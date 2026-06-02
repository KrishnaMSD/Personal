import Link from "next/link";
import type { Route } from "next";

import { siteContent } from "@/content/siteContent";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "/projects" satisfies Route },
  { label: "Articles", href: "/articles" satisfies Route },
  { label: "Resumes", href: "/downloads" satisfies Route },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06]" role="contentinfo">
      {/* Gradient top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-grid py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* Left column */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-subtle">
              Let&apos;s build something impactful
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-semibold text-foreground">
              <span className="gradient-text">{siteContent.profile.name}</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              {siteContent.profile.bioShort}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {siteContent.profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs text-muted transition hover:border-accent/40 hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between gap-6">
            <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm">
              {footerLinks.map((link) => {
                const href = link.href.startsWith("#")
                  ? { pathname: "/", hash: link.href.replace("#", "") }
                  : link.href;
                return (
                  <Link
                    key={link.label}
                    href={href}
                    className="text-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="#top"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.06] px-4 py-2 text-xs text-subtle transition hover:border-accent/40 hover:text-foreground"
            >
              Back to top ↑
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-6 text-xs text-subtle">
          <p>© {new Date().getFullYear()} Krishna Kalakonda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
