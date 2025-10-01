import Link from "next/link";
import type { Route } from "next";

import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "/projects" satisfies Route },
  { label: "Articles", href: "/articles" satisfies Route },
  { label: "Downloads", href: "/downloads" satisfies Route },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-surface/80 backdrop-blur-xl" role="contentinfo">
      <div className="container-grid flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-subtle">Let&apos;s build impactful systems</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-semibold text-foreground">
              {siteContent.profile.name}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              {siteContent.profile.bioShort}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {siteContent.profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition hover:border-accent/50 hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-6 border-t border-white/5 pt-6 text-xs text-subtle md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Krishna Kalakonda. All rights reserved.</p>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-4 text-sm">
            {footerLinks.map((link) => {
              const href = link.href.startsWith("#")
                ? { pathname: "/", hash: link.href.replace("#", "") }
                : link.href;
              return (
                <Link key={link.label} href={href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="#top"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition",
                "hover:border-accent/50 hover:text-foreground"
              )}
            >
              Back to top ↑
            </Link>
          </nav>
        </div>

        <p className="text-xs text-subtle">
          Privacy-first analytics only. No invasive trackers. Performance optimized for 90+ Lighthouse scores across performance, SEO, and accessibility.
        </p>
      </div>
    </footer>
  );
}
