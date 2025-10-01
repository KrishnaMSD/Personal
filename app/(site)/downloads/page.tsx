import { DownloadCard } from "@/components/downloads/DownloadCard";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Downloads",
  description:
    "Grab Krishna Kalakonda's focused CV and resume for data science and full-stack product roles.",
};

export default function DownloadsPage() {
  return (
    <div className="container-grid pb-16">
      <header className="max-w-3xl space-y-4 pt-10">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Downloads</p>
        <h1 className="section-title">Ready-to-share CV & resume</h1>
        <p className="text-muted">
          Choose the version you need. Each document highlights AI product leadership, research collaborations, and full-stack engineering skills.
        </p>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {siteContent.downloads.map((item) => (
          <DownloadCard key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}
