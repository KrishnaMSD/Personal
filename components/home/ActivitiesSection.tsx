import { siteContent } from "@/content/siteContent";

const order: Record<string, number> = {
  Awards: 1,
  Certifications: 2,
  Hackathons: 3,
  Workshops: 4,
  Extracurricular: 5,
};

const sectionColors: Record<string, string> = {
  Awards: "bg-amber-500",
  Certifications: "bg-violet-500",
  Hackathons: "bg-accent",
  Workshops: "bg-info",
  Extracurricular: "bg-emerald-500",
};

export function ActivitiesSection() {
  const grouped = siteContent.activities.reduce<Record<string, typeof siteContent.activities>>(
    (acc, item) => {
      const list = acc[item.section] ?? [];
      list.push(item);
      acc[item.section] = list;
      return acc;
    },
    {}
  );

  const sections = Object.entries(grouped).sort((a, b) => (order[a[0]] ?? 99) - (order[b[0]] ?? 99));

  return (
    <section id="activities" className="container-grid mt-24 space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Beyond the desk</p>
        <h2 className="section-title mt-3">Workshops, hackathons & leadership</h2>
        <p className="mt-4 text-muted">
          A steady cadence of workshops, cultural programs, and competitions keeps me close
          to communities and curious about emerging tech.
        </p>
      </header>
      <div className="space-y-8">
        {sections.map(([sectionName, items]) => (
          <div key={sectionName} className="space-y-3">
            <div className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${sectionColors[sectionName] || "bg-info"}`}
                aria-hidden
              />
              <h3 className="text-base font-semibold text-foreground">{sectionName}</h3>
              <span className="text-xs text-subtle">({items.length})</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item, idx) => (
                <article
                  key={`${item.title}-${idx}`}
                  className="rounded-xl border border-white/[0.06] bg-surface/60 p-4 transition card-hover"
                >
                  <header className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    {item.date && (
                      <span className="shrink-0 text-[11px] text-subtle">{item.date}</span>
                    )}
                  </header>
                  {item.bullets && (
                    <ul className="mt-2 space-y-1">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-xs leading-relaxed text-muted">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
