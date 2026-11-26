"use client";

import Glow, { GlowLayer } from "@/components/ui/Glow";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  const facts = [
    {
      title: t.about.eduName,
      detail: t.about.eduDegree,
      box: "bg-[#f3f4f6]",
      icon: (
        <span className="relative block size-12 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figma/logo-ufro.png"
            alt=""
            className="absolute left-[-31.97%] top-0 h-[138.11%] w-[163.11%] max-w-none"
          />
        </span>
      ),
    },
    {
      title: t.about.city,
      detail: t.about.cityDesc,
      box: "border border-[#2dd4bf]/35 bg-[#2dd4bf]/15 text-[#2dd4bf]",
      icon: <Icon name="map-pin" size={22} />,
    },
    {
      title: t.about.open,
      detail: t.about.openDesc,
      box: "border border-[#30d158]/35 bg-[#30d158]/15 text-[#30d158]",
      icon: <Icon name="linkedin" size={22} />,
    },
  ];

  return (
    <section id="about" className="relative">
      <GlowLayer>
        <Glow name="about-glow-1" x={640} y={-60} w={980} />
        <Glow name="about-glow-2" x={890} y={320} w={740} />
      </GlowLayer>

      <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-20 lg:py-40">
        <div className="flex max-w-[1040px] flex-col gap-12">
          <Reveal>
            <h2 className="text-[15px] font-medium text-muted">{t.about.eyebrow}</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="text-[28px] font-medium leading-[1.26] tracking-[-0.03em] text-faint sm:text-4xl lg:text-[46px] lg:leading-[58px]">
              {t.about.statement.map((segment, i) => (
                <span key={i} className={segment.strong ? "text-strong" : undefined}>
                  {segment.text}
                </span>
              ))}
            </p>
          </Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-12">
            {facts.map((fact, i) => (
              <Reveal key={fact.title} index={i + 2} className="flex items-center gap-4">
                <div className={`flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl ${fact.box}`}>
                  {fact.icon}
                </div>
                <div className="flex flex-col gap-0.5 leading-[1.25]">
                  <p className="text-[17px] font-medium">{fact.title}</p>
                  <p className="text-[15px] text-muted">{fact.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
