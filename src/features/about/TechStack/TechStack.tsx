import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechCard } from "@/components/ui/TechCard";
import { TECH_STACK } from "../techStack.data";

/**
 * Technology showcase, styled after the reference "orbit" graphic:
 * a dark, glowing, glassmorphic aesthetic - reinterpreted here as a
 * clean, consistent card grid (per the brief: "clean cards, icons,
 * subtle gradients... professional and minimal rather than
 * overcrowded") instead of literally reproducing the orbiting-icon
 * animation.
 */
export function TechStack() {
  return (
    <div className="relative flex flex-col items-center gap-12">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-gradient opacity-[0.08] blur-3xl"
        aria-hidden="true"
      />
      <SectionHeading
        title="Tech Stack"
        description="Tools and technologies I use to design, build and ship modern front-end products."
        align="center"
      />
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {TECH_STACK.map((technology) => (
          <TechCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}
