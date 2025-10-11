import Script from "next/script";

import { ProjectsView } from "@/components/projects/ProjectsView";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Projects",
  description:
    "Explore Krishna Kalakonda's portfolio of AI agents, data science platforms, civic dashboards, and experimental builds that deliver measurable outcomes.",
};

const projectList = siteContent.projects.flatMap((group) => group.items);

const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projectList.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Project",
      name: project.title,
      description: project.tagline ?? project.summary,
      startDate: project.timeframe ?? "",
      url: "https://krishnakalakonda.com/projects",
      creator: siteContent.profile.name,
    },
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsView />
      <Script id="projects-jsonld" type="application/ld+json">
        {JSON.stringify(projectsStructuredData)}
      </Script>
    </>
  );
}
