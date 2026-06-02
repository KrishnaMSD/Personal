"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteContent } from "@/content/siteContent";

interface SkillGroupCardProps {
  group: (typeof siteContent.skills.groups)[number];
  index: number;
}

const barColors: Record<string, string> = {
  Programming: "from-violet-500 to-purple-600",
  "Data Visualization": "from-cyan-400 to-blue-500",
  "Machine Learning": "from-emerald-400 to-teal-500",
  Database: "from-amber-400 to-orange-500",
  Cloud: "from-sky-400 to-blue-600",
  Frontend: "from-pink-400 to-rose-500",
  MLOps: "from-indigo-400 to-violet-500",
  "Creativity Tools": "from-fuchsia-400 to-pink-500",
  Others: "from-slate-400 to-zinc-500",
};

export function SkillGroupCard({ group, index }: SkillGroupCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const colorClass = barColors[group.name] || "from-accent to-info";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group space-y-3 rounded-2xl border border-white/[0.06] bg-surface/60 p-5 transition card-hover"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">{group.name}</h3>
        <span className="font-mono text-xs font-semibold text-muted">{group.level}%</span>
      </div>

      {/* Animated progress bar */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${colorClass}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${group.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Tool tags */}
      <div className="flex flex-wrap gap-1.5">
        {group.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-subtle transition group-hover:border-white/10 group-hover:text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
