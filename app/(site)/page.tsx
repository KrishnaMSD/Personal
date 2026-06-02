import { ActivitiesSection } from "@/components/home/ActivitiesSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { SkillsOverview } from "@/components/home/SkillsOverview";
import { TechMarquee } from "@/components/home/TechMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <SkillsOverview />
      <FeaturedProjects />
      <ExperienceTimeline />
      <EducationSection />
      <ActivitiesSection />
    </>
  );
}
