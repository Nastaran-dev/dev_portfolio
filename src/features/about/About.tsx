import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/constants/site";
import { TechStack } from "./TechStack";
import { ShowcasePreview } from "./ShowcasePreview";


export function About() {
  return (
    <section id="about" className="container-page flex flex-col gap-28 py-24 lg:gap-36 lg:py-32">
      <div className="flex flex-col items-center gap-16">
        <SectionHeading title="About" description={SITE.aboutText} align="center" />
        <div className="relative h-[280px] w-full max-w-2xl sm:h-[360px]">
          <Image
            src="/images/about-illustration.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <TechStack />

      <ShowcasePreview />
    </section>
  );
}
