import { siteContent } from "@/content/siteContent";

export function EducationSection() {
  return (
    <section id="education" className="container-grid mt-24 space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Education</p>
        <h2 className="section-title mt-3">Academic foundation</h2>
        <p className="mt-4 text-muted">
          An engineer&apos;s rigor blended with design thinking from interdisciplinary programs ensures every model is production-ready and values human context.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {siteContent.education.map((edu) => (
          <article key={edu.degree} className="surface-card h-full rounded-3xl border border-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
              <span className="rounded-full border border-info/40 bg-info/10 px-3 py-1 text-xs font-semibold text-info">
                {edu.start} — {edu.end}
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-muted">{edu.school}</p>
            {edu.location && <p className="text-xs text-subtle">{edu.location}</p>}
            {edu.gpa && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/70 px-3 py-1 text-xs text-subtle">
                CGPA {edu.gpa}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
