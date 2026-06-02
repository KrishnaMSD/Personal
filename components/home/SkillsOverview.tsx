import { siteContent } from "@/content/siteContent";

import { SkillRadarChart } from "@/components/charts/SkillRadarChart";
import { SkillGroupCard } from "./SkillGroupCard";

export function SkillsOverview() {
  const { groups, polar } = siteContent.skills;

  return (
    <section id="skills" className="container-grid mt-24">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Core capabilities</p>
        <h2 className="section-title mt-3">
          A balanced <span className="gradient-text">skill spectrum</span>
        </h2>
        <p className="mt-4 text-muted">
          Spanning modeling, engineering, and visualization — I build experiments that ship
          to production fast while staying explainable and observable.
        </p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Skill cards with animated progress bars */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <SkillGroupCard key={group.name} group={group} index={index} />
          ))}
        </div>

        {/* Polar chart sidebar */}
        <div className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)] lg:self-start">
          <SkillRadarChart title={polar.title} metrics={polar.metrics} />
        </div>
      </div>
    </section>
  );
}
