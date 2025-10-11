import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { projectEntries, projectIndex } from "@/content/siteContent";
import { ProjectCard } from "@/components/projects/ProjectCard";

type ProjectPageParams = { slug: string };

interface ProjectPageProps {
  params: Promise<ProjectPageParams>;
}

export function generateStaticParams() {
  return projectEntries.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectIndex[slug];

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectIndex[slug];

  if (!project) {
    notFound();
  }

  const relevant = project.relevantSlugs
    .map((relatedSlug) => projectIndex[relatedSlug])
    .filter((item) => item && item.slug !== project.slug)
    .slice(0, 3);

  const descriptionParagraphs = project.description
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);

  return (
    <div className="container-grid pb-16">
      <nav className="flex items-center gap-3 pt-8 text-sm text-subtle">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-medium text-muted transition hover:border-accent/50 hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Back to projects
        </Link>
        <span aria-hidden>•</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-subtle">
          {project.group}
        </span>
      </nav>

      <header className="mt-10 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-semibold text-foreground">{project.title}</h1>
            {project.tagline && <p className="mt-2 text-lg text-muted">{project.tagline}</p>}
          </div>
          {project.timeframe ? (
            <span className="rounded-full border border-info/40 bg-info/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-info">
              {project.timeframe}
            </span>
          ) : null}
        </div>
        <p className="max-w-3xl text-base text-muted">{project.summary}</p>
        <div className="rounded-3xl border border-white/5 bg-surface/70 p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-subtle">Key achievements</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="mt-10 space-y-8">
        <article className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Project narrative</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        {project.website && (
          <div>
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition hover:bg-accent/90"
            >
              Visit website
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        )}

        <div className="rounded-3xl border border-white/5 bg-surface/80 p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-subtle">Key words</h2>
          <p className="mt-2 text-xs text-muted">
            Filter-ready keywords covering tech stack, methodologies, and differentiators.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/10 bg-surface/70 px-3 py-1 text-xs text-subtle"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {relevant.length > 0 && (
        <section className="mt-16 space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            <h2 className="text-lg font-semibold text-foreground">Relevant projects</h2>
          </div>
          <p className="max-w-2xl text-sm text-muted">
            Projects that share similar methodologies, tech stacks, or impact areas.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {relevant.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
