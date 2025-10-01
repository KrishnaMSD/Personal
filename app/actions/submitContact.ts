"use server";

import { promises as fs } from "fs";
import path from "path";

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

  const payload = {
    ...parsed.data,
    mobile,
  } as {
    name: string;
    email: string;
    mobile?: string;
    message: string;
    honeypot?: string;
  };

  delete payload.honeypot;

  const nextEntry = {
    ...payload,
    timestamp: now,
  };

  const updated = [...recent, nextEntry];
  await fs.writeFile(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");

  return {
    success: true,
  } as const;
}
