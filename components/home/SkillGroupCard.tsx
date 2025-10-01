import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";

import { SkillRadialChart } from "@/components/charts/SkillRadialChart";

interface SkillGroupCardProps {
  group: (typeof siteContent.skills.groups)[number];
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <div className="surface-card flex flex-col gap-4 rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-subtle">{group.name}</p>
          <p className="text-sm text-muted">Competency snapshot</p>
        </div>
        <span
          className={cn(
            "rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent",
            "shadow-sm"
          )}
        >
          {group.level}%
        </span>
      </div>
      <SkillRadialChart value={group.level} label={`${group.name} proficiency`} />
      <div className="flex flex-wrap gap-2">
        {group.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 bg-surface/70 px-3 py-1 text-xs text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
