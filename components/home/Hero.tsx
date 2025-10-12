"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Globe, Instagram as InstagramIcon } from "lucide-react";

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

export function Hero() {
  const { profile } = siteContent;

  return (
    <section id="home" className="container-grid pt-16 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          className="relative mx-auto flex w-full max-w-[420px] items-center justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-accent/15 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-surface/90 via-surface/40 to-surface/90 p-2 shadow-md">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src={profile.headshotSrc}
                alt={`${profile.name} portrait`}
                width={520}
                height={620}
                priority
                className="aspect-[4/5] object-cover transition hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {profile.title}
          </span>
          <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight text-foreground">
            I build intelligent products end-to-end — from data strategy to polished experiences.
          </h1>
          <p className="text-muted text-lg leading-relaxed text-balance">{profile.bioShort}</p>
          <div className="flex flex-wrap items-center gap-3">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/70 px-4 py-2 text-sm text-muted transition hover:border-accent/50 hover:text-foreground"
                >
                  {Icon ? <Icon className="h-4 w-4 text-accent group-hover:text-info" aria-hidden /> : null}
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-sm transition hover:bg-accent/90 focus-visible:focus-ring"
            >
              See My Work
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-muted transition hover:border-info/60 hover:text-info"
            >
              Explore Experience
            </Link>
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {profile.stats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
