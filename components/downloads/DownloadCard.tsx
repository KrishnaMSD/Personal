"use client";

import { useState } from "react";
import { Download, QrCode } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

interface DownloadItem {
  label: "CV" | "Resume";
  file: string;
  updated?: string;
  sizeKB?: number;
}

interface DownloadCardProps {
  item: DownloadItem;
}

export function DownloadCard({ item }: DownloadCardProps) {
  const [showQR, setShowQR] = useState(false);

  return (
    <article className="surface-card flex flex-col gap-4 rounded-3xl border border-white/5 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{item.label}</h2>
          {item.updated && (
            <p className="text-xs text-subtle">Updated {formatDate(item.updated)}</p>
          )}
        </div>
        <span className="rounded-full border border-info/40 bg-info/10 px-3 py-1 text-xs font-semibold text-info">
          {item.sizeKB ? `${item.sizeKB} KB` : "PDF"}
        </span>
      </header>
      <p className="text-sm text-muted">
        Download a polished {item.label.toLowerCase()} tailored for data science and full-stack roles.
      </p>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
        <iframe
          src={`${item.file}#toolbar=0&navpanes=0`}
          title={`${item.label} preview`}
          className="h-[420px] w-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={item.file}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent/90"
        >
          <Download className="h-4 w-4" aria-hidden /> Download {item.label}
        </a>
        <button
          type="button"
          onClick={() => setShowQR((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-muted transition hover:border-accent/40 hover:text-foreground"
        >
          <QrCode className="h-4 w-4" aria-hidden /> {showQR ? "Hide" : "Show"} QR
        </button>
      </div>
      {showQR && (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-surface/70 p-4">
          <QRCodeCanvas value={`https://krishnakalakonda.com${item.file}`} size={128} bgColor="#10131A" fgColor="#E6E9EF" />
          <p className="text-xs text-subtle">Scan to save on your phone</p>
        </div>
      )}
    </article>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
