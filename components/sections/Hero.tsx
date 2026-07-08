"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import type { ComponentType } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiPython,
  SiNodedotjs, SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiTailwindcss,
} from "react-icons/si";
import { useLanguage } from "@/lib/language-context";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemTransition: Transition = { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] };

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: itemTransition },
};

type OrbDef = {
  Icon: ComponentType<{ size?: number; color?: string; opacity?: number }>;
  color: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
  duration: number;
  yRange: number;
  size: number;
};

const orbs: OrbDef[] = [
  // Left column — distributed top to bottom
  { Icon: SiReact,       color: "#61DAFB", top: "14%",    left: "4%",   delay: 0,    duration: 6.0, yRange: 18, size: 22 },
  { Icon: SiPython,      color: "#3776AB", top: "44%",    left: "3%",   delay: 1.1,  duration: 5.5, yRange: 22, size: 20 },
  { Icon: SiMongodb,     color: "#47A248", bottom: "16%", left: "6%",   delay: 1.8,  duration: 6.5, yRange: 16, size: 18 },

  // Right column — distributed top to bottom
  { Icon: SiTypescript,  color: "#3178C6", top: "18%",    right: "4%",  delay: 0.6,  duration: 7.0, yRange: 16, size: 20 },
  { Icon: SiNodedotjs,   color: "#539E43", top: "50%",    right: "3%",  delay: 0.8,  duration: 7.5, yRange: 20, size: 20 },
  { Icon: SiMysql,       color: "#4479A1", bottom: "14%", right: "6%",  delay: 1.2,  duration: 5.0, yRange: 18, size: 18 },

  // Top row — spread horizontally (kept clear of the fixed navbar)
  { Icon: SiGit,         color: "#F05032", top: "17%",    left: "20%",  delay: 0.3,  duration: 7.0, yRange: 12, size: 17 },
  { Icon: SiTailwindcss, color: "#06B6D4", top: "17%",    right: "20%", delay: 1.6,  duration: 6.5, yRange: 14, size: 17 },

  // Bottom row — spread horizontally
  { Icon: SiNextdotjs,   color: "#ffffff", bottom: "7%",  left: "27%",  delay: 0.4,  duration: 8.0, yRange: 18, size: 20 },
  { Icon: SiPostgresql,  color: "#336791", bottom: "7%",  right: "27%", delay: 1.4,  duration: 6.5, yRange: 14, size: 18 },
];

function FloatingOrb({ Icon, color, top, bottom, left, right, delay, duration, yRange, size }: OrbDef) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, bottom, left, right }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0, 1, 1],
        scale: [0.6, 1, 1],
        y: [0, -yRange, 0],
      }}
      transition={{
        opacity:  { duration: 1.2, delay, times: [0, 1, 1] },
        scale:    { duration: 1.2, delay, times: [0, 1, 1] },
        y:        { duration, delay: delay + 1, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div
        className="rounded-2xl backdrop-blur-sm flex items-center justify-center"
        style={{
          width: size + 28,
          height: size + 28,
          backgroundColor: `${color}26`,
          border: `1.5px solid ${color}55`,
          boxShadow: `0 6px 28px ${color}45, 0 0 0 1px ${color}14 inset`,
        }}
      >
        <Icon size={size} color={color} />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/7 rounded-full blur-[130px]" />

        {/* Floating orbs (hidden on narrow screens — no side gutter for them to sit in) */}
        <div className="hidden sm:block">
          {orbs.map((orb, i) => (
            <FloatingOrb key={i} {...orb} />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 pt-28 pb-16 flex flex-col items-center text-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <div className="w-6 h-px bg-blue-500/50" />
          <p className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            {t.hero.eyebrow}
          </p>
          <div className="w-6 h-px bg-blue-500/50" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-50"
        >
          Camilo <span className="gradient-text">Rojas Baeza</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-zinc-600 dark:text-zinc-500 font-medium tracking-wide"
        >
          {t.hero.role} &nbsp;·&nbsp; {t.hero.university}
        </motion.p>

        {/* Divider */}
        <motion.div variants={itemVariants} className="w-8 h-px bg-zinc-300 dark:bg-zinc-800" />

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          {t.hero.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center pt-2"
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.hero.ctaProjects} <ArrowDown size={13} />
          </motion.button>
          <motion.button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700/60 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300 text-sm font-semibold transition-all cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.hero.ctaContact}
          </motion.button>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants} className="flex items-center gap-6 pt-1">
          <a
            href="https://github.com/C-RB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors"
          >
            <Github size={14} /> {t.hero.github}
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors"
          >
            <Linkedin size={14} /> {t.hero.linkedin}
          </a>
          <a
            href="mailto:bruce.cyber14@gmail.com"
            className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors"
          >
            <Mail size={14} /> {t.hero.email}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
