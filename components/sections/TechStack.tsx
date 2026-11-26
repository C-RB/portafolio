"use client";

import Glow, { GlowLayer } from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechLogo from "@/components/ui/TechLogo";
import { marqueeStack, techStack } from "@/data/tech-stack";
import { useLanguage } from "@/lib/language-context";

export default function TechStack() {
  const { t } = useLanguage();
  const groups = Object.keys(techStack) as (keyof typeof techStack)[];

  return (
    <section id="stack" className="relative">
      <GlowLayer>
        <Glow name="stack-glow-1" x={-400} y={100} w={1300} h={800} />
        <Glow name="stack-glow-2" x={700} y={220} w={1100} h={800} />
      </GlowLayer>

      <div className="pb-20 pt-16 lg:pb-[clamp(80px,19svh,160px)] lg:pt-[clamp(72px,17svh,140px)]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <SectionHeading title={t.stack.title} description={t.stack.description} />
        </div>

        {/* The strip is duplicated so the loop has no seam. */}
        <div aria-hidden className="marquee-container mx-auto mt-14 flex h-24 max-w-[1440px] items-center overflow-hidden lg:mt-[88px]">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-16 pr-16 lg:gap-24 lg:pr-24">
                {marqueeStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-[18px]">
                    <TechLogo name={tech.logo} size={44} />
                    <span className="whitespace-nowrap text-4xl font-semibold tracking-[-0.03em] lg:text-[56px]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-10 px-5 lg:mt-[110px] lg:grid-cols-4 lg:gap-12 lg:px-20">
          {groups.map((group, i) => (
            <Reveal key={group} index={i} className="flex flex-col gap-[18px]">
              <h3 className="text-[15px] font-medium text-muted">{t.stack.groups[group]}</h3>
              <ul className="flex flex-col gap-[18px]">
                {techStack[group].map((tech) => (
                  <li key={tech.name} className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                    <TechLogo name={tech.logo} size={22} />
                    <span className="text-base font-medium leading-[1.2] sm:text-[19px]">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
