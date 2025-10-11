"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { siteContent } from "@/content/siteContent";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home", type: "section" as const },
  { label: "Projects", href: "/projects" satisfies Route, type: "route" as const },
  { label: "Articles", href: "/articles" satisfies Route, type: "route" as const },
  { label: "Downloads", href: "/downloads" satisfies Route, type: "route" as const },
] as const;

interface HeaderProps {
  onContactClick: () => void;
}

const scrollSections = ["home", "skills", "experience", "education", "activities"] as const;
const sectionSet = new Set(scrollSections);

export function Header({ onContactClick }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(scrollSections as unknown as string[]);

  const isHome = pathname === "/";

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-overlay backdrop-blur-xl"
      role="banner"
    >
      <div className="container-grid flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold text-foreground">
          <span className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-accent">
            <Image
              src={siteContent.profile.logoImg}
              alt={`${siteContent.profile.name} logo`}
              className="h-12 w-12 rounded-full object-cover"
              width={48}
              height={48}
              priority
            />
          </span>
          <div className="flex flex-col leading-snug">
            <span>{siteContent.profile.name}</span>
            <span className="text-xs text-subtle">{siteContent.profile.title}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              link.type === "section"
                ? isHome && (!!activeSection && sectionSet.has(activeSection as typeof scrollSections[number]))
                : pathname.startsWith(link.href);
            const href = link.type === "section"
              ? ({ pathname: "/", hash: link.href.replace("#", "") })
              : link.href;

            return (
              <Link
                key={link.label}
                href={href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition",
                  "hover:text-foreground/90 focus-visible:focus-ring",
                  isActive ? "text-foreground" : "text-subtle",
                  link.label === "Articles" ? "d-none" : undefined
                )}
              >
                {link.label}
                <motion.span
                  layoutId="nav-underline"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={cn(
                    "absolute inset-x-2 bottom-1 h-0.5 rounded-full",
                    isActive ? "bg-accent" : "bg-transparent"
                  )}
                />
              </Link>
            );
          })}
          <button
            onClick={onContactClick}
            className="ml-3 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background shadow-sm transition hover:bg-accent/90 focus-visible:focus-ring"
          >
            Contact Me
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-foreground transition hover:border-accent/40 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="container-grid pb-4">
              <div className="surface-card flex flex-col gap-2 rounded-2xl p-4">
                {navLinks.map((link) => {
                  const href =
                    link.type === "section"
                      ? ({ pathname: "/", hash: link.href.replace("#", "") })
                      : link.href;
                  const isActive =
                    link.type === "section"
                      ? isHome && (!!activeSection && sectionSet.has(activeSection as typeof scrollSections[number]))
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={href}
                      onClick={closeMobile}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
                        isActive ? "bg-accent/15 text-foreground" : "bg-transparent text-muted",
                        "hover:bg-surface/80",
                        link.label === "Articles" ? "d-none" : undefined
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />}
                    </Link>
                  );
                })}
                <button
                  onClick={() => {
                    closeMobile();
                    onContactClick();
                  }}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-background shadow-sm"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
