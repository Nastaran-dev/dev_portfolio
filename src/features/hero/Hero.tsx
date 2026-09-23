import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,250,250,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.06) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          maskImage:
            "radial-gradient(circle at 75% 30%, black, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative grid min-h-[85vh] grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2 lg:gap-12 lg:py-32">
        <div className="flex max-w-2xl flex-col gap-10 text-center lg:text-left">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-h1 lg:text-h2 text-neutral-text">
              Hi, I&rsquo;m {SITE.name}
            </h1>
            <GradientText as="p" className="text-h2 lg:text-h3 font-semibold">
              {SITE.role}
            </GradientText>
          </div>

          <p className="text-body-lg  text-neutral-text/80 lg:max-w-xl">
            {SITE.tagline}
          </p>

          <Button href="#contact" className="mx-auto w-fit lg:mx-0">
            Contact
          </Button>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
          <div
            className="absolute inset-[-15%] rounded-full bg-brand-gradient opacity-30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[6%] rounded-full bg-button-gradient opacity-20 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 rounded-full ring-1 ring-neutral-text/10"
            aria-hidden="true"
          />

          <Image
            src="/images/profile-photo.webp"
            alt={`${SITE.name}, Front-End Developer, sitting at a laptop`}
            fill
            priority
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 340px"
            className="relative object-contain object-bottom drop-shadow-[0_20px_45px_rgba(174,12,167,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
