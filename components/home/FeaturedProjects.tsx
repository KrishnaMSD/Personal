"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { siteContent } from "@/content/siteContent";

const featured = [
  {
    slug: "magic-mail",
    metric: "+80%",
    metricDetail: "Positive reply rate lift",
  },
  {
    slug: "adhd-gender-prediction",
    metric: "0.82 F1",
    metricDetail: "Interpretable clinical ML",
  },
  {
    slug: "data-viz-pro",
    metric: "No-Code ML",
    metricDetail: "Upload, train, and export",
  },
];

export function FeaturedProjects() {
  const allProjects = siteContent.projects.flatMap((g) => g.items);
  const projects = featured
    .map((f) => ({
      ...f,
      project: allProjects.find((p) => p.slug === f.slug),
    }))
    .filter((f) => f.project);

  return (
    <section className="container-grid mt-24">
      <div className="flex items-end justify-between">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-info">Featured work</p>
          <h2 className="section-title mt-3">
            Projects that <span className="gradient-text">moved the needle</span>
          </h2>
        </header>
        <Link
          href="/projects"
          className="hidden items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-info md:inline-flex"
        >
          All projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.map(({ project, metric, metricDetail }, index) =>
          project ? (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/[0.06] bg-surface/60 p-5 transition card-hover"
              >
                <div>
                  <div className="text-2xl font-bold gradient-text">{metric}</div>
                  <p className="mt-1 text-[11px] text-subtle">{metricDetail}</p>
                  <h3 className="mt-4 text-sm font-semibold text-foreground transition group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted">{project.summary}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition group-hover:opacity-100">
                  Explore <ArrowUpRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ) : null
        )}
      </div>

      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-info md:hidden"
      >
        View all projects <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
