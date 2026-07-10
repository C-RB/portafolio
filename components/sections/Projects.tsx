"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { projects, type Project, type ProjectAccent } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/lib/language-context";

const ACCENT_STYLES: Record<
  ProjectAccent,
  { bg: string; icon: string; glow: string }
> = {
  emerald: {
    bg: "from-emerald-100/60 via-zinc-50 to-emerald-50 dark:from-emerald-900/40 dark:via-zinc-900 dark:to-emerald-950/30",
    icon: "text-emerald-600/80 dark:text-emerald-400/70",
    glow: "bg-emerald-500/10",
  },
  indigo: {
    bg: "from-indigo-100/60 via-zinc-50 to-indigo-50 dark:from-indigo-900/40 dark:via-zinc-900 dark:to-indigo-950/30",
    icon: "text-indigo-600/80 dark:text-indigo-400/70",
    glow: "bg-indigo-500/10",
  },
  purple: {
    bg: "from-purple-100/60 via-zinc-50 to-purple-50 dark:from-purple-900/40 dark:via-zinc-900 dark:to-purple-950/30",
    icon: "text-purple-600/80 dark:text-purple-400/70",
    glow: "bg-purple-500/10",
  },
  orange: {
    bg: "from-orange-100/60 via-zinc-50 to-orange-50 dark:from-orange-900/40 dark:via-zinc-900 dark:to-orange-950/30",
    icon: "text-orange-600/80 dark:text-orange-400/70",
    glow: "bg-orange-500/10",
  },
  cyan: {
    bg: "from-cyan-100/60 via-zinc-50 to-cyan-50 dark:from-cyan-900/40 dark:via-zinc-900 dark:to-cyan-950/30",
    icon: "text-cyan-600/80 dark:text-cyan-400/70",
    glow: "bg-cyan-500/10",
  },
  rose: {
    bg: "from-rose-100/60 via-zinc-50 to-rose-50 dark:from-rose-900/40 dark:via-zinc-900 dark:to-rose-950/30",
    icon: "text-rose-600/80 dark:text-rose-400/70",
    glow: "bg-rose-500/10",
  },
};

function ProjectPlaceholder({ project, category }: { project: Project; category: string }) {
  const { icon: Icon, accent } = project;
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${styles.bg} flex items-center justify-center overflow-hidden`}
    >
      <div className={`absolute w-40 h-40 rounded-full blur-3xl ${styles.glow}`} />
      <div className="relative flex flex-col items-center gap-2">
        <Icon size={40} strokeWidth={1.5} className={styles.icon} />
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-500/80 font-medium">
          {category}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpenGallery,
}: {
  project: Project;
  index: number;
  onOpenGallery: (project: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [stackExpanded, setStackExpanded] = useState(false);
  const { lang, t } = useLanguage();
  const hasGallery = project.images.length > 0;
  const hiddenStack = project.stack.slice(5);

  return (
    <motion.article
      className="glass group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/60 hover:shadow-xl hover:shadow-zinc-300/50 dark:hover:shadow-zinc-950/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <ProjectPlaceholder project={project} category={project.category[lang]} />

        {/* Overlay on hover */}
        <AnimatePresence>
          {hovered && hasGallery && (
            <motion.div
              className="absolute inset-0 bg-white/90 dark:bg-zinc-950/80 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenGallery(project);
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                <Images size={13} />
                {t.projects.demo}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-600/80 text-blue-100 backdrop-blur-sm">
              {t.projects.featured}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base group-hover:text-black dark:group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium mt-0.5">
            {project.tagline[lang]}
          </p>
        </div>

        {/* Problem it solves */}
        <p className="text-sm text-blue-700/90 dark:text-blue-300/90 leading-relaxed line-clamp-4">
          {project.problem[lang]}
        </p>

        {/* Full description */}
        <p className="text-xs text-zinc-600 dark:text-zinc-500 leading-relaxed line-clamp-3">
          {project.description[lang]}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {(stackExpanded ? project.stack : project.stack.slice(0, 5)).map((tech) => (
            <Badge key={tech} color="zinc">
              {tech}
            </Badge>
          ))}
          {hiddenStack.length > 0 && (
            <button
              type="button"
              onClick={() => setStackExpanded((v) => !v)}
              title={hiddenStack.join(", ")}
              className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-200/70 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300/70 dark:hover:bg-zinc-700/70 transition-colors"
            >
              {stackExpanded ? t.projects.showLess : `+${hiddenStack.length}`}
            </button>
          )}
        </div>

        {/* Category + Links */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-800/60">
          <Badge color="blue">{project.category[lang]}</Badge>
          {hasGallery && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenGallery(project)}
                className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
                aria-label={t.projects.demo}
              >
                <ExternalLink size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectGalleryModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const { lang, t } = useLanguage();
  const images = project.images;
  const hasImages = images.length > 0;

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.projects.closeGallery}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={22} />
      </button>

      <div className="flex flex-col items-center gap-3 max-w-5xl w-full">
        <h3 className="text-white font-semibold text-sm sm:text-base">{project.name}</h3>

        {hasImages ? (
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={images[index]}
              src={images[index]}
              alt={`${project.name} ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
                  {index + 1} / {images.length}
                </span>
              </>
            )}
          </div>
        ) : (
          <div
            className="w-full aspect-[16/9] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectPlaceholder project={project} category={project.category[lang]} />
          </div>
        )}

        {!hasImages && (
          <p className="text-zinc-400 text-xs">{t.projects.noImages}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/3 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute -right-20 bottom-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-12">
          <SectionTitle
            label={t.projects.eyebrow}
            title={t.projects.title}
            highlight={t.projects.highlight}
            description={t.projects.description}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenGallery={setGalleryProject}
              />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://github.com/C-RB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass glass-hover text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-all"
            >
              <Github size={16} />
              {t.projects.viewMore}
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {galleryProject && (
          <ProjectGalleryModal
            project={galleryProject}
            onClose={() => setGalleryProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
