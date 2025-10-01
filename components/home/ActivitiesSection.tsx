import { siteContent } from "@/content/siteContent";

const order: Record<string, number> = {
  Workshops: 1,
  Hackathons: 2,
  Extracurricular: 3,
  Awards: 4,
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
          A steady cadence of workshops, cultural programs, and competitions keeps me close to communities and curious about emerging tech.
        </p>
      </header>
      <div className="space-y-10">
        {sections.map(([sectionName, items]) => (
          <div key={sectionName} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-info" aria-hidden />
              <h3 className="text-lg font-semibold text-foreground">{sectionName}</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item, idx) => (
                <article key={`${item.title}-${idx}`} className="surface-card rounded-2xl border border-white/5 p-4">
                  <header className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    {item.date && <span className="text-xs text-subtle">{item.date}</span>}
                  </header>
                  {item.bullets && (
                    <ul className="mt-3 space-y-2 text-xs text-muted">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="leading-relaxed">
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
