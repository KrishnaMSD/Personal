import { siteContent } from "@/content/siteContent";

import { SkillRadarChart } from "@/components/charts/SkillRadarChart";
import { SkillGroupCard } from "./SkillGroupCard";

export function SkillsOverview() {
  const { groups, polar } = siteContent.skills;

  return (
    <section id="skills" className="container-grid mt-16">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          <header>
            <p className="text-xs uppercase tracking-[0.28em] text-info">Core capabilities</p>
            <h2 className="section-title mt-2">Hands-on skill spectrum</h2>
            <p className="mt-4 max-w-2xl text-muted">
              A balanced toolset across modeling, engineering, and visualization fuels experiments that ship to production fast while staying explainable and observable.
            </p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <SkillGroupCard key={group.name} group={group} />
            ))}
          </div>
        </div>
        <div className="mt-6 w-full max-w-lg lg:sticky lg:top-[calc(var(--header-height)+1.5rem)] lg:mt-0 lg:self-start">
          <SkillRadarChart title={polar.title} metrics={polar.metrics} />
        </div>
      </div>
    </section>
  );
}
