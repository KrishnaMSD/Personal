"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { siteContent } from "@/content/siteContent";

export function ExperienceTimeline() {
  const experiences = siteContent.experience;

  return (
    <section id="experience" className="container-grid mt-24 space-y-12">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Experience</p>
        <h2 className="section-title mt-3">Impact-first roles and research fellowships</h2>
        <p className="mt-4 text-muted">
          I have shipped AI products that measurably move revenue, built research pipelines with clinicians, and architected full-stack insights platforms for civic partners.
        </p>
      </header>
      <div className="relative">
        <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/80 via-white/10 to-transparent md:left-6" aria-hidden />
        <ul className="space-y-10">
          {experiences.map((item, index) => (
            <TimelineItem key={`${item.role}-${index}`} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: (typeof siteContent.experience)[number];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? item.bullets : item.bullets.slice(0, 2);
  const hasMore = item.bullets.length > 2;

  return (
    <li className="relative pl-12 md:pl-16">
      <span
        className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent/70 bg-surface text-xs font-semibold text-accent md:left-5"
        aria-hidden
      >
        {index + 1}
      </span>
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="surface-card rounded-3xl border border-white/5 p-6 shadow-sm"
      >
        <header className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
            <p className="text-sm text-muted">
              {item.org}
              {item.location ? ` • ${item.location}` : ""}
            </p>
          </div>
          <p className="text-sm font-medium text-info">
            {item.start} — {item.end}
          </p>
        </header>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {visibleBullets.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-info focus-visible:focus-ring"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown className={`h-4 w-4 transition ${expanded ? "rotate-180" : "rotate-0"}`} />
          </button>
        )}
        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-surface/70 px-3 py-1 text-xs text-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </li>
  );
}
