"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

import { siteContent } from "@/content/siteContent";
import { cn, slugify } from "@/lib/utils";

import { ProjectCard } from "./ProjectCard";
import { ProjectsSideMenu } from "./ProjectsSideMenu";

type ProjectGroup = (typeof siteContent.projects)[number];

type FilteredGroup = ProjectGroup & { filteredItems: ProjectGroup["items"] };

const CURATED_TAGS = [
  "Generative AI",
  "Analytics",
  "Sales Automation",
  "Web Development",
  "API Development",
  "SQL",
  "Architecture Design",
  "Error Analysis",
  "Speech Models",
  "Dashboards",
  "Prompt Engineering",
  "Chatbot",
  "Multimodal Modelling",
] as const;

export function ProjectsView() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const uniqueTags = useMemo(() => {
    const counts = new Map<string, number>();
    siteContent.projects.forEach((group) => {
      group.items.forEach((project) => {
        const combined = [...project.keywords, ...project.cardKeywords];
        combined.forEach((tag) => {
          counts.set(tag, (counts.get(tag) ?? 0) + 1);
        });
      });
    });

    const curated = CURATED_TAGS.filter((tag) => counts.has(tag));
    const ensureActive = activeTags.filter((tag) => counts.has(tag) && !curated.includes(tag));

    return [...curated, ...ensureActive];
  }, [activeTags]);

  const groups = useMemo<FilteredGroup[]>(() => {
    const queryLower = query.toLowerCase();
    return siteContent.projects
      .map((group) => {
        const filteredItems = group.items.filter((item) => {
          const searchableText = [
            item.title,
            item.tagline ?? "",
            item.summary,
            item.description,
            ...item.achievements,
            item.cardKeywords.join(" "),
            item.keywords.join(" "),
          ]
            .join(" ")
            .toLowerCase();

          const matchesQuery = queryLower.length === 0 || searchableText.includes(queryLower);

          const keywordBucket = item.keywords.map((keyword) => keyword.toLowerCase());
          const cardBucket = item.cardKeywords.map((keyword) => keyword.toLowerCase());
          const descriptionLower = item.description.toLowerCase();

          const matchesTags =
            activeTags.length === 0 ||
            activeTags.every((tag) => {
              const lowered = tag.toLowerCase();
              return (
                keywordBucket.includes(lowered) ||
                cardBucket.includes(lowered) ||
                descriptionLower.includes(lowered)
              );
            });

          return matchesQuery && matchesTags;
        });

        return {
          ...group,
          filteredItems,
        };
      })
      .filter((group) => group.filteredItems.length > 0);
  }, [activeTags, query]);

  const totalProjects = groups.reduce((sum, group) => sum + group.filteredItems.length, 0);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  const clearFilters = () => {
    setQuery("");
    setActiveTags([]);
  };

  return (
    <div className="container-grid flex flex-col gap-10 pb-16 lg:flex-row">
      <div className="lg:w-64">
        <ProjectsSideMenu />
      </div>
      <div className="flex-1 space-y-10">
        <header className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-info">Projects</p>
            <h1 className="section-title">Full-stack work across AI, data, and product</h1>
            <p className="max-w-3xl text-muted">
              Explore technical builds that blend data science rigor with product craft—from multi-agent sales systems to civic dashboards and IoT experimentation.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-surface/70 p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects by outcome, tech, or keyword"
                className="w-full rounded-full border border-white/10 bg-transparent py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-subtle focus-visible:focus-ring"
              />
            </div>
            <div className="flex items-center gap-3 text-xs text-subtle">
              <span>{totalProjects} project{totalProjects === 1 ? "" : "s"} shown</span>
              {(query || activeTags.length > 0) && (
                <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  Clear filters
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition",
                  activeTags.includes(tag)
                    ? "border-accent/60 bg-accent/15 text-foreground"
                    : "border-white/10 bg-transparent text-muted hover:border-accent/40"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </header>

        {groups.map((group) => (
          <section key={group.group} id={slugify(group.group)} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                <h2 className="text-lg font-semibold text-foreground">{group.group}</h2>
              </div>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                {group.description ?? `${group.items.length} projects in this focus area.`} Currently showing{" "}
                {group.filteredItems.length} project{group.filteredItems.length === 1 ? "" : "s"} with the active filters.
              </p>
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-2">
              {group.filteredItems.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        ))}

        {groups.length === 0 && (
          <p className="rounded-3xl border border-white/5 bg-surface/70 p-6 text-sm text-muted">
            No projects match the current filters. Try clearing the search or selecting different tech tags.
          </p>
        )}
      </div>
    </div>
  );
}
