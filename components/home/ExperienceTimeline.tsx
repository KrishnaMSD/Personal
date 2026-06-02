"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, TrendingUp } from "lucide-react";

import { siteContent } from "@/content/siteContent";

/* Headline impact metrics for select roles */
const impactMetrics: Record<string, string> = {
  "Associate Data Scientist": "120% connect-rate lift",
};

export function ExperienceTimeline() {
  const experiences = siteContent.experience;

  return (
    <section id="experience" className="container-grid mt-24 space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Experience</p>
        <h2 className="section-title mt-3">
          Where I&apos;ve made <span className="gradient-text">impact</span>
        </h2>
        <p className="mt-4 text-muted">
          From shipping AI products that measurably move revenue, to building research
          pipelines with clinicians, to architecting insights platforms for civic partners.
        </p>
      </header>

      <div className="relative">
        {/* Gradient timeline spine */}
        <span
          className="absolute left-4 top-0 h-full w-px md:left-6"
          style={{
            background:
              "linear-gradient(to bottom, #7c3aed 0%, #22d3ee 50%, transparent 100%)",
          }}
          aria-hidden
        />

        <ul className="space-y-8">
          {experiences.map((item, index) => (
            <TimelineItem key={`${item.role}-${index}`} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Individual timeline entry ── */
interface TimelineItemProps {
  item: (typeof siteContent.experience)[number];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? item.bullets : item.bullets.slice(0, 2);
  const hasMore = item.bullets.length > 2;
  const impact = impactMetrics[item.role];

  return (
    <li className="relative pl-12 md:pl-16">
      {/* Dot on the timeline */}
      <span
        className="absolute left-2 top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background md:left-4"
        aria-hidden
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>

      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-2xl border border-white/[0.06] bg-surface/60 p-6 transition card-hover"
      >
        <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
            <p className="text-sm text-muted">
              {item.org}
              {item.location ? ` · ${item.location}` : ""}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {impact && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <TrendingUp className="h-3 w-3" />
                {impact}
              </span>
            )}
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-subtle">
              {item.start} — {item.end}
            </span>
          </div>
        </header>

        <ul className="mt-4 space-y-2 text-sm text-muted">
          {visibleBullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-2 leading-relaxed">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition hover:text-info focus-visible:focus-ring"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `Show ${item.bullets.length - 2} more`}
            <ChevronDown
              className={`h-3.5 w-3.5 transition ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-subtle"
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
