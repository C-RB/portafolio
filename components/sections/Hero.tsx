"use client";

import { motion, type Variants } from "framer-motion";
import Orbit from "@/components/sections/Orbit";
import Glow, { GlowLayer } from "@/components/ui/Glow";
import Icon from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { useMailto } from "@/lib/use-mailto";

const ease = [0.25, 0.1, 0.25, 1] as const;

const title: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function Hero() {
  const { t } = useLanguage();
  const mailHref = useMailto("c.rojas22", "ufromail.cl");

  const socials = [
    { name: "github", label: "GitHub", href: "https://github.com/C-RB" },
    { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/camilo-rojas-baeza-0810ba374/" },
    { name: "mail", label: "Email", href: mailHref },
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] lg:min-h-[max(600px,100svh)]">
      <GlowLayer>
        <Glow name="hero-glow-1" x={340} y={-420} w={1220} h={920} />
        <Glow name="hero-glow-2" x={810} y={-10} w={900} />
        <Glow name="hero-glow-3" x={590} y={390} w={760} />
        <Glow name="hero-glow-4" x={1020} y={460} w={700} />
      </GlowLayer>

      <motion.div
        className="pointer-events-none absolute -right-[390px] -top-[270px] -z-10 origin-center scale-50 opacity-70 md:-right-[240px] md:scale-75 lg:left-[calc(50%+80px)] lg:right-auto lg:top-[calc(60%-390px)] lg:origin-left lg:scale-[0.8] lg:opacity-100 min-[1360px]:scale-100 lg:[@media(max-height:800px)]:scale-[0.8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="max-lg:opacity-40">
          <Orbit />
        </div>
      </motion.div>

      <div className="mx-auto flex max-w-[1440px] flex-col items-start px-5 pb-10 pt-32 lg:px-20 lg:pt-[clamp(104px,calc(100svh-577px),250px)]">
        <motion.h1
          className="text-[clamp(44px,15vw,96px)] lg:text-[clamp(88px,min(10.28vw,19svh),148px)] font-semibold leading-[0.92] tracking-[-0.055em]"
          variants={title}
          initial="hidden"
          animate="visible"
          aria-label="Camilo Rojas Baeza"
        >
          <span aria-hidden className="block">
            <motion.span variants={word} className="title-gradient-top inline-block pr-[0.06em]">
              Camilo
            </motion.span>
          </span>
          <span aria-hidden className="flex flex-wrap gap-x-[0.22em]">
            {["Rojas", "Baeza"].map((name) => (
              <motion.span key={name} variants={word} className="title-gradient-bottom inline-block pb-[0.08em] pr-[0.06em]">
                {name}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-16 lg:mt-[clamp(24px,5.3svh,44px)]" {...rise(0.5)}>
          <div className="flex flex-col gap-1.5 text-[22px] leading-[1.2] tracking-[-0.015em] whitespace-nowrap">
            <p className="font-medium text-strong">{t.hero.role}</p>
            <p className="text-dim">{t.hero.focus}</p>
          </div>
          <p className="max-w-[360px] text-[17px] leading-[27px] text-muted">{t.hero.bio}</p>
        </motion.div>

        <motion.div className="mt-8 flex flex-wrap items-center gap-7 lg:mt-[clamp(28px,5.8svh,48px)]" {...rise(0.62)}>
          <button
            type="button"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 rounded-full bg-solid px-[30px] py-[17px] text-[15px] font-semibold text-solid-fg transition-all hover:gap-4 hover:opacity-85 active:scale-[0.97] cursor-pointer"
          >
            {t.hero.ctaProjects}
            <Icon name="arrow-right" size={16} />
          </button>
          <a
            href="/CV_Camilo_Rojas_Baeza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 text-[15px] font-semibold transition hover:opacity-70 active:scale-[0.97]"
          >
            {t.hero.ctaCv}
            <Icon name="download" size={15} />
          </a>
          <div className="flex items-center gap-[18px] text-muted">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="relative transition after:absolute after:-inset-x-2 after:-inset-y-2.5 hover:-translate-y-0.5 hover:text-strong"
              >
                <Icon name={social.name} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
