import { ArticlesList } from "@/components/articles/ArticlesList";

export const metadata = {
  title: "Articles",
  description:
    "Practitioner notes on AI systems, explainable healthcare models, and data storytelling from Krishna Kalakonda.",
};

export default function ArticlesPage() {
  return (
    <div className="container-grid pb-16">
      <header className="max-w-3xl space-y-4 pt-10">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Articles</p>
        <h1 className="section-title">Field notes & thought leadership</h1>
        <p className="text-muted">
          Essays on building responsible, production-ready AI systems—covering agent architectures, interpretable healthcare research, and data visualization craft.
        </p>
      </header>
      <div className="mt-10">
        <ArticlesList />
      </div>
    </div>
  );
}
