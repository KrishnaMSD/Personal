import { ActivitiesSection } from "@/components/home/ActivitiesSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { Hero } from "@/components/home/Hero";
import { SkillsOverview } from "@/components/home/SkillsOverview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsOverview />
      <ExperienceTimeline />
      <EducationSection />
      <ActivitiesSection />
    </>
  );
}
