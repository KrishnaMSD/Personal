"use server";

import { promises as fs } from "fs";
import os from "os";
import path from "path";
import nodemailer from "nodemailer";

import { contactSchema, type ContactFormInput } from "@/lib/validation/contact";

const STORAGE_ROOT =
  process.env.CONTACT_STORAGE_DIR != null
    ? path.resolve(process.env.CONTACT_STORAGE_DIR)
    : process.env.NODE_ENV === "production"
      ? path.join(process.env.TMPDIR ?? os.tmpdir(), "portfolio-contact")
      : path.join(process.cwd(), "data");
const DATA_DIR = STORAGE_ROOT;
const DATA_FILE = path.join(DATA_DIR, "contact-submissions.json");
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 5; // 5 minutes
const RATE_LIMIT_MAX = 3;
const MAX_STORED_ENTRIES = 500;

type ContactEntry = ContactPayload & { timestamp: number };

const memoryStoreContainer = globalThis as typeof globalThis & {
  __portfolioContactEntries?: ContactEntry[];
};

if (!memoryStoreContainer.__portfolioContactEntries) {
  memoryStoreContainer.__portfolioContactEntries = [];
}

const memoryStore = memoryStoreContainer.__portfolioContactEntries;

let isFileStorageWritable: boolean | undefined;

async function ensureDataFile() {
  if (isFileStorageWritable === false) {
    return false;
  }

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(DATA_FILE);
  } catch {
    try {
      await fs.writeFile(DATA_FILE, JSON.stringify([]), "utf-8");
    } catch (error) {
      isFileStorageWritable = false;
      console.warn(
        "Contact submissions file storage unavailable. Falling back to in-memory storage.",
        error,
      );
      return false;
    }
  }

  isFileStorageWritable = true;
  return true;
}

async function readEntries(): Promise<ContactEntry[]> {
  const canUseFile = await ensureDataFile();
  if (!canUseFile) {
    return memoryStore;
  }

  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsedEntries = JSON.parse(raw) as ContactEntry[];
    memoryStore.splice(0, memoryStore.length, ...parsedEntries);
    return parsedEntries;
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException;
    if (nodeError.code === "ENOENT") {
      try {
        await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
        memoryStore.length = 0;
        return memoryStore;
      } catch (writeError) {
        isFileStorageWritable = false;
        console.warn(
          "Unable to initialise contact submissions file. Switching to in-memory storage.",
          writeError,
        );
        memoryStore.length = 0;
        return memoryStore;
      }
    }

    console.warn(
      "Failed to read contact submissions file. Continuing with in-memory storage.",
      error,
    );
    isFileStorageWritable = false;
    return memoryStore;
  }
}

async function writeEntries(entries: ContactEntry[]) {
  memoryStore.splice(0, memoryStore.length, ...entries);

  if (isFileStorageWritable === false) {
    return;
  }

  if (!(await ensureDataFile())) {
    return;
  }

  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
  } catch (error) {
    isFileStorageWritable = false;
    console.warn(
      "Failed to persist contact submissions to the filesystem. Remaining on in-memory storage.",
      error,
    );
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

type EmailDeliveryResult =
  | { ok: true; provider: "smtp"; messageId?: string }
  | {
      ok: false;
      reason: "unconfigured" | "delivery_failed";
      message: string;
      error?: unknown;
    };

function getFallbackContactTarget() {
  const fromEnv =
    process.env.CONTACT_FALLBACK_EMAIL ??
    process.env.CONTACT_TO_EMAIL ??
    process.env.CONTACT_FROM_EMAIL ??
    process.env.SMTP_USER ??
    "";
  return fromEnv.trim();
}

async function deliverEmail(payload: ContactPayload): Promise<EmailDeliveryResult> {
  const host = process.env.SMTP_HOST ?? "";
  const portRaw = process.env.SMTP_PORT ?? "";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toAddress = process.env.CONTACT_TO_EMAIL ?? user ?? "";
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? user ?? "";

  const port = Number.parseInt(portRaw, 10);
  const isConfigured = host.length > 0 && !Number.isNaN(port) && port > 0 && toAddress.length > 0 && fromAddress.length > 0;
  console.log("Contact email configuration:", { isConfigured, host, port, toAddress, fromAddress });
  if (!isConfigured) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Contact email delivery skipped. Configure SMTP_* and CONTACT_* environment variables to enable email notifications.");
    }
    const fallback = getFallbackContactTarget();
    const message =
      fallback.length > 0
        ? `Message saved, but email forwarding isn't configured. Please email me directly at ${fallback}.`
        : "Message saved, but email forwarding isn't configured. Please reach out via the email listed on the site.";
    return {
      ok: false,
      reason: "unconfigured",
      message,
    };
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

  try {
    const emailSent = await transporter.sendMail({
      to: toAddress,
      from: fromAddress,
      subject: `New portfolio contact from ${payload.name}`,
      text: plainMessage,
      html: htmlMessage,
      replyTo: payload.email,
    });
    console.log("Contact email sent:", emailSent);
    return {
      ok: true,
      provider: "smtp",
      messageId: emailSent.messageId,
    };
  } catch (error) {
    console.error("Failed to send contact email via SMTP transport.", error);
    const fallback = getFallbackContactTarget();
    const message =
      fallback.length > 0
        ? `Message saved, but email delivery failed. Please email me directly at ${fallback}.`
        : "Message saved, but email delivery failed. Please reach out via the email listed on the site.";
    return {
      ok: false,
      reason: "delivery_failed",
      message,
      error,
    };
  }
}

export async function submitContact(values: ContactFormInput) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
    } as const;
  }

  const entries = await readEntries();

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

  const updated = [...entries, nextEntry];
  const truncated = updated.slice(-MAX_STORED_ENTRIES);
  await writeEntries(truncated);

  const delivery = await deliverEmail(payload);
  if (!delivery.ok) {
    return {
      success: false,
      error: { general: [delivery.message] },
    } as const;
  }

  return {
    success: true,
  } as const;
}
