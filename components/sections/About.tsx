"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
              {t.about.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              {t.about.title} <span className="gradient-text">{t.about.highlight}</span>
            </h2>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px]">
            <p>
              {t.about.bio1.map((segment, i) =>
                segment.strong ? (
                  <span key={i} className="text-zinc-900 dark:text-zinc-200 font-medium">
                    {segment.text}
                  </span>
                ) : (
                  <span key={i}>{segment.text}</span>
                )
              )}
            </p>
            <p>
              {t.about.bio2.map((segment, i) =>
                segment.strong ? (
                  <span key={i} className="text-zinc-900 dark:text-zinc-200 font-medium">
                    {segment.text}
                  </span>
                ) : (
                  <span key={i}>{segment.text}</span>
                )
              )}
            </p>
          </div>

          {/* Education */}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/60">
            <div className="flex items-center justify-between gap-4 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={16} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">{t.about.eduName}</p>
                  <p className="text-sm text-zinc-500">{t.about.eduDegree}</p>
                </div>
              </div>
              <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {t.about.eduBadge}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
