import { siteContent } from "@/content/siteContent";

export function EducationSection() {
  return (
    <section id="education" className="container-grid mt-24 space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-info">Education</p>
        <h2 className="section-title mt-3">Academic foundation</h2>
        <p className="mt-4 text-muted">
          An engineer&apos;s rigor blended with data science depth ensures every model is
          production-ready and values human context.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {siteContent.education.map((edu) => (
          <article
            key={edu.degree}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/60 p-6 transition card-hover"
          >
            {/* Gradient top accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-info/40 to-transparent" />
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted">{edu.school}</p>
                {edu.location && <p className="text-xs text-subtle">{edu.location}</p>}
              </div>
              <span className="shrink-0 rounded-full border border-info/30 bg-info/10 px-3 py-1 text-[11px] font-semibold text-info">
                {edu.start} — {edu.end}
              </span>
            </div>
            {edu.gpa && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs font-medium text-subtle">
                CGPA {edu.gpa}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
