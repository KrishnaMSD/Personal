"use server";

import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

import { contactSchema, type ContactFormInput } from "@/lib/validation/contact";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contact-submissions.json");
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 5; // 5 minutes
const RATE_LIMIT_MAX = 3;

async function ensureDataFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([]), "utf-8");
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface ContactPayload {
  name: string;
  email: string;
  mobile?: string;
  message: string;
}

async function deliverEmail(payload: ContactPayload) {
  const host = process.env.SMTP_HOST ?? "";
  const portRaw = process.env.SMTP_PORT ?? "";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toAddress = process.env.CONTACT_TO_EMAIL ?? user ?? "";
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? user ?? "";

  const port = Number.parseInt(portRaw, 10);
  const isConfigured = host.length > 0 && !Number.isNaN(port) && port > 0 && toAddress.length > 0 && fromAddress.length > 0;

  if (!isConfigured) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Contact email delivery skipped. Configure SMTP_* and CONTACT_* environment variables to enable email notifications.");
    }
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });

  const plainMessage = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Mobile: ${payload.mobile ?? "Not provided"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const htmlMessage = `
    <p>You received a new message from your portfolio contact form.</p>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Mobile:</strong> ${escapeHtml(payload.mobile ?? "Not provided")}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</p>
  `;

  await transporter.sendMail({
    to: toAddress,
    from: fromAddress,
    subject: `New portfolio contact from ${payload.name}`,
    text: plainMessage,
    html: htmlMessage,
    replyTo: payload.email,
  });

  return true;
}

export async function submitContact(values: ContactFormInput) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
    } as const;
  }

  await ensureDataFile();

  const raw = await fs.readFile(DATA_FILE, "utf-8");
  const entries = JSON.parse(raw) as Array<{
    name: string;
    email: string;
    mobile?: string;
    message: string;
    timestamp: number;
  }>;

  const now = Date.now();
  const recent = entries.filter((entry) => now - entry.timestamp <= RATE_LIMIT_WINDOW_MS);
  const recentForEmail = recent.filter((entry) => entry.email === parsed.data.email);

  if (recentForEmail.length >= RATE_LIMIT_MAX) {
    return {
      success: false,
      error: { general: [`Too many messages. Try again in ${RATE_LIMIT_WINDOW_MS / 60000} minutes.`] },
    } as const;
  }

  const mobileRaw = parsed.data.mobile.trim();
  const mobile = mobileRaw.length > 0 ? mobileRaw : undefined;

  const payload: ContactPayload & { honeypot?: string } = {
    ...parsed.data,
    mobile,
  };

  delete payload.honeypot;

  const nextEntry = {
    ...payload,
    timestamp: now,
  };

  const updated = [...recent, nextEntry];
  await fs.writeFile(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");

  try {
    await deliverEmail(payload);
  } catch (error) {
    console.error("Failed to send contact email", error);
  }

  return {
    success: true,
  } as const;
}
