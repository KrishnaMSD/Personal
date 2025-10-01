"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Globe, MonitorPlay } from "lucide-react";

import { siteContent } from "@/content/siteContent";

const linkIcons = {
  Live: Globe,
  GitHub: Github,
  Article: ExternalLink,
  Video: MonitorPlay,
};

type ProjectItem = (typeof siteContent.projects)[number]["items"][number];

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [embedVisible, setEmbedVisible] = useState(false);

  const showEmbed = () => setEmbedVisible(true);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="surface-card flex flex-col gap-5 rounded-3xl border border-white/5 p-6"
    >
      <header className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          {project.tagline && <p className="mt-1 text-sm text-muted">{project.tagline}</p>}
        </div>
        {project.timeframe && (
          <span className="rounded-full border border-info/40 bg-info/10 px-3 py-1 text-xs font-semibold text-info">
            {project.timeframe}
          </span>
        )}
      </header>

      <ul className="space-y-2 text-sm text-muted">
        {project.impact.map((bullet, index) => (
          <li key={index} className="leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-surface/70 px-3 py-1 text-xs text-subtle">
              {tech}
            </span>
          ))}
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => {
            const Icon = linkIcons[link.label];
            return (
              <a
                key={`${project.title}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-muted transition hover:border-accent/60 hover:text-foreground"
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      {project.embed && (
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
          {!embedVisible ? (
            <button
              type="button"
              onClick={showEmbed}
              className="w-full rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-sm font-semibold text-muted transition hover:border-accent/60 hover:text-foreground"
            >
              Preview project
            </button>
          ) : (
            <ProjectEmbed embed={project.embed} title={project.title} />
          )}
        </div>
      )}
    </motion.article>
  );
}

interface EmbedProps {
  embed: NonNullable<ProjectItem["embed"]>;
  title: string;
}

function ProjectEmbed({ embed, title }: EmbedProps) {
  if (embed.type === "iframe") {
    return (
      <iframe
        src={embed.src}
        title={`${title} embed`}
        loading="lazy"
        className="h-72 w-full rounded-xl border-0"
        allowFullScreen
      />
    );
  }

  if (embed.type === "video") {
    return (
      <video
        src={embed.src}
        controls
        preload="metadata"
        className="h-72 w-full rounded-xl object-cover"
      >
        {embed.alt || title}
      </video>
    );
  }

  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl">
      <Image
        src={embed.src}
        alt={embed.alt || `${title} preview`}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
}
