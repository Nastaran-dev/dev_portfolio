import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "./work.data";
import { SITE } from "@/constants/site";

export function Work() {
  return (
    <section id="work" className="container-page flex flex-col gap-20 py-24 lg:py-32">
      <SectionHeading title="Recent Work" description={SITE.workSubtitle} align="center" />
      <div className="flex flex-col gap-24 lg:gap-32">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
