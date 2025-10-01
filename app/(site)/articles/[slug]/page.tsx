import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { renderMDX } from "@/lib/mdx";
import { siteContent } from "@/content/siteContent";

export async function generateStaticParams() {
  return siteContent.articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = siteContent.articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  const url = `https://krishnakalakonda.com/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url,
      type: "article",
      authors: [siteContent.profile.name],
      tags: article.tags,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = siteContent.articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const currentArticle = article;

  const mdxContent = await renderMDX(currentArticle.body);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: currentArticle.title,
    datePublished: currentArticle.published,
    author: {
      "@type": "Person",
      name: siteContent.profile.name,
    },
    description: currentArticle.summary,
    url: `https://krishnakalakonda.com/articles/${currentArticle.slug}`,
    keywords: currentArticle.tags.join(", "),
  };

  return (
    <article className="container-grid pb-16">
      <header className="max-w-3xl space-y-4 pt-10">
        <p className="text-xs uppercase tracking-[0.28em] text-info">
          {new Date(currentArticle.published).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-foreground">{currentArticle.title}</h1>
        <p className="text-muted">{currentArticle.summary}</p>
        <div className="flex flex-wrap gap-2">
          {currentArticle.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-subtle">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="mt-10 max-w-3xl space-y-4">{mdxContent}</div>
      <Script id="article-jsonld" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
    </article>
  );
}
