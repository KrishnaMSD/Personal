import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import { siteContent } from "@/content/siteContent";

export function ArticlesList() {
  const articles = [...siteContent.articles].sort((a, b) => (a.published < b.published ? 1 : -1));

  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <article key={article.slug} className="surface-card rounded-3xl border border-white/5 p-6 shadow-sm">
          <header className="space-y-3">
            <div className="flex flex-wrap items-center gap-4 text-xs text-subtle">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" aria-hidden />
                {new Date(article.published).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden />
                {article.readingTime}
              </span>
            </div>
            <Link href={`/articles/${article.slug}`} className="text-[1.4rem] font-semibold text-foreground">
              {article.title}
            </Link>
            <p className="text-sm text-muted">{article.summary}</p>
          </header>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-subtle">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
