"use client";

import { siteContent } from "@/content/siteContent";

export function TechMarquee() {
  const allTools = siteContent.skills.groups.flatMap((g) => g.tools);
  const uniqueTools = [...new Set(allTools)];
  // Duplicate for seamless infinite scroll
  const doubled = [...uniqueTools, ...uniqueTools];

  return (
    <section className="marquee-wrapper mt-16 overflow-hidden border-y border-white/[0.06] bg-surface/30 py-5">
      <div className="animate-marquee flex gap-10 whitespace-nowrap">
        {doubled.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="text-sm font-medium text-subtle/50 transition hover:text-foreground"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
