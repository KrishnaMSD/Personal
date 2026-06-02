"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
  Instagram as InstagramIcon,
  MapPin,
  Plane,
  ArrowRight,
  Download,
} from "lucide-react";

import { siteContent } from "@/content/siteContent";
import { StatCard } from "./StatCard";

type SocialLabel = (typeof siteContent.profile.socials)[number]["label"];

const socialIcons: Record<SocialLabel, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  X: Twitter,
  Portfolio: Globe,
  Instagram: InstagramIcon,
};

const roles = [
  "Full-Stack Data Scientist",
  "Machine Learning Engineer",
  "AI Tools Developer",
  "MLOps Practitioner",
];

export function Hero() {
  const { profile } = siteContent;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="hero-mesh" aria-hidden />

      <div className="container-grid relative z-10 overflow-hidden pb-8 pt-16 md:pb-12 md:pt-24">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* ── Content column ── */}
          <motion.div
            className="hero-copy flex min-w-0 flex-col gap-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Status + location badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface/40 px-3 py-1.5 text-xs font-medium text-subtle">
                <Plane className="h-3 w-3" />
                Open to relocate
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </span>
            </div>

            {/* Name with gradient highlight */}
            <h1 className="text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="gradient-text">{profile.name.split(" ")[0]}</span>
              <br />
              <span className="text-foreground/80">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Rotating role title */}
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-medium text-info"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bio */}
            <p className="w-full max-w-full break-words text-base leading-relaxed text-muted sm:max-w-xl">
              {profile.bioShort}
            </p>

            {/* Compact social icons */}
            <div className="flex flex-wrap items-center gap-2">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-surface/50 p-2.5 text-subtle transition hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                    aria-label={social.label}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent/90 hover:shadow-accent/40 focus-visible:focus-ring"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface/50 px-6 py-3 text-sm font-semibold text-muted transition hover:border-accent/40 hover:bg-surface/80 hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </div>
          </motion.div>

          {/* ── Photo column ── */}
          <motion.div
            className="hero-portrait-frame relative mx-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            <div
              className="absolute -inset-8 rounded-full bg-gradient-to-br from-accent/30 via-info/15 to-success/20 blur-3xl"
              aria-hidden
            />
            <div className="glow-ring relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_28%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(145deg,rgba(16,19,26,0.94),rgba(19,24,34,0.72)_48%,rgba(124,58,237,0.16))] p-3 shadow-md">
              <div className="absolute inset-3 rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.08] via-transparent to-black/20" />
              <div className="absolute inset-x-12 bottom-6 h-20 rounded-full bg-accent/25 blur-2xl" aria-hidden />
              <Image
                src={profile.headshotSrc}
                alt={`${profile.name} portrait`}
                width={640}
                height={640}
                sizes="(max-width: 768px) 86vw, 460px"
                priority
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.5)]"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Bento stat cards ── */}
        <motion.div
          className="hero-stats-grid mt-12 grid min-w-0 grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {profile.stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
