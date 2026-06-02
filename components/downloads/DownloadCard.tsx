"use client";

import { useState } from "react";
import { Download, FileText, QrCode } from "lucide-react";
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
  const extension = item.file.split(".").pop()?.toUpperCase() ?? "FILE";
  const isPdf = extension === "PDF";

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
          {item.sizeKB ? `${item.sizeKB} KB` : extension}
        </span>
      </header>
      <p className="text-sm text-muted">
        Download a polished {item.label.toLowerCase()} tailored for data science and full-stack roles.
      </p>
      {isPdf ? (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
          <iframe
            src={`${item.file}#toolbar=0&navpanes=0`}
            title={`${item.label} preview`}
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-surface/60 p-6 text-center">
          <FileText className="h-10 w-10 text-info" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-foreground">{extension} document</p>
            <p className="mt-1 text-xs text-subtle">Use the download button below to open the editable file.</p>
          </div>
        </div>
      )}
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
          <p className="text-xs text-subtle">Scan to save this file</p>
        </div>
      )}
    </article>
  );
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  const date = year && month && day ? new Date(year, month - 1, day) : new Date(value);
  return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
