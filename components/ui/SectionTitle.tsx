"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  label,
  title,
  highlight,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
        <span className="h-px w-6 bg-blue-500/50 rounded" />
        {label}
        <span className="h-px w-6 bg-blue-500/50 rounded" />
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mt-1">
          {description}
        </p>
      )}
    </motion.div>
  );
}
