"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiSpringboot,
  SiPostgresql, SiMysql, SiMinio,
  SiUbuntu, SiGit,
  SiAndroid,
} from "react-icons/si";
import { Globe, Coffee } from "lucide-react";
import type { ComponentType } from "react";
import { techStack } from "@/data/tech-stack";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";

type IconEntry = {
  icon: ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  colorLight?: string;
};

const iconMap: Record<string, IconEntry> = {
  "Python":          { icon: SiPython,      color: "#3776AB" },
  "TypeScript":      { icon: SiTypescript,  color: "#3178C6" },
  "Java":            { icon: Coffee,        color: "#f89820" },
  "React":           { icon: SiReact,       color: "#61DAFB" },
  "Next.js":         { icon: SiNextdotjs,   color: "#e4e4e7", colorLight: "#18181b" },
  "Tailwind CSS":    { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js":         { icon: SiNodedotjs,   color: "#339933" },
  "Spring Boot":     { icon: SiSpringboot,  color: "#6DB33F" },
  "APIs REST":       { icon: Globe,         color: "#60a5fa" },
  "PostgreSQL":      { icon: SiPostgresql,  color: "#4169E1" },
  "MySQL":           { icon: SiMysql,       color: "#4479A1" },
  "MinIO":           { icon: SiMinio,       color: "#C72E49" },
  "Linux / Ubuntu":  { icon: SiUbuntu,      color: "#E95420" },
  "Git / GitHub":    { icon: SiGit,         color: "#F05032" },
  "Android":         { icon: SiAndroid,     color: "#3DDC84" },
};

export default function TechStack() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="stack" className="min-h-screen flex items-center py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-14">
          <SectionTitle
            label={t.stack.eyebrow}
            title={t.stack.title}
            highlight={t.stack.highlight}
            description={t.stack.description}
          />

          <div className="w-full flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => {
              const entry = iconMap[tech.name];
              if (!entry) return null;
              const Icon = entry.icon;
              const color = theme === "light" && entry.colorLight ? entry.colorLight : entry.color;

              return (
                <motion.div
                  key={tech.name}
                  className="glass rounded-xl px-4 py-3 flex items-center gap-2.5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm whitespace-nowrap">
                    {tech.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
