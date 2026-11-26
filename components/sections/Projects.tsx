"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { LAYOUTS } from "@/components/sections/ProjectVisuals";
import Glow from "@/components/ui/Glow";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import Scaled from "@/components/ui/Scaled";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/language-context";

function ProjectText({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { lang, t } = useLanguage();

  return (
    <div className="flex w-full max-w-[390px] flex-col items-start">
      <p className="font-mono text-[13px] uppercase tracking-[0.04em] text-white/80">{project.category[lang]}</p>
      <h3 className="mt-6 text-[clamp(34px,11vw,48px)] font-semibold tracking-[-0.04em] lg:text-[64px] lg:leading-[1.2]">{project.name}</h3>
      <p className="mt-5 text-[17px] leading-[27px] text-white/80">{project.problem[lang]}</p>
      <ul className="mt-7 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((tech) => (
          <li key={tech} className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium">
            {tech}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        className="mt-8 flex items-center gap-2.5 rounded-full bg-white px-[26px] py-[15px] text-[15px] font-semibold text-black transition-all hover:gap-3.5 hover:opacity-85 active:scale-[0.97] cursor-pointer"
      >
        {t.projects.demo}
        <Icon name="arrow-up-right" size={16} />
      </button>
    </div>
  );
}

const zoom =
  "origin-center transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none";

function ProjectPanel({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const layout = LAYOUTS[project.id];
  const textOnRight = layout.textLeft > 640;
  const { box } = layout;
  const [from, to] = project.colors;

  return (
    <article
      onClick={onOpen}
      className="group relative overflow-hidden rounded-[28px] border border-white/35 text-white transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none lg:rounded-[40px] cursor-pointer"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
      {/* Desktop: the design canvas, scaled to the panel width */}
      <div className="hidden lg:block">
        <Scaled width={1280} height={580}>
          <Glow name={`panel-glow-${project.id}`} x={textOnRight ? -381 : 519} y={-441} w={1060} h={860} />
          <Glow name="panel-glow-shade" x={textOnRight ? 539 : -261} y={359} w={920} h={720} />
          <div className={`absolute inset-0 ${zoom}`}>{layout.render(project)}</div>
          <div className="absolute" style={{ left: layout.textLeft, top: layout.textTop, width: 390 }}>
            <ProjectText project={project} onOpen={onOpen} />
          </div>
        </Scaled>
      </div>

      {/* Smaller screens: text first, visual below */}
      <div className="flex flex-col gap-8 lg:hidden">
        <div className="px-6 pt-8 sm:px-10">
          <ProjectText project={project} onOpen={onOpen} />
        </div>
        <div className="mx-auto w-full max-w-[640px] px-4 pb-4">
          <Scaled width={box.width} height={box.height}>
            <div className="absolute h-[580px] w-[1280px]" style={{ left: -box.x, top: -box.y }}>
              {layout.render(project)}
            </div>
          </Scaled>
        </div>
      </div>
    </article>
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
  const { t } = useLanguage();
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

  // Rendered on <body>: <main> is its own stacking context, below the navbar.
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8"
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
            className="relative w-full h-[75svh] sm:h-auto sm:aspect-[16/9] rounded-xl overflow-hidden bg-zinc-900"
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
          <p className="text-zinc-400 text-sm py-16">{t.projects.noImages}</p>
        )}
      </div>
    </motion.div>,
    document.body
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-16 lg:px-20 lg:pb-20 lg:pt-[clamp(72px,17svh,140px)]">
        <SectionHeading title={t.projects.title} description={t.projects.description} />

        <div className="mt-14 flex flex-col gap-7 lg:mt-24">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectPanel project={project} onOpen={() => setGalleryProject(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {galleryProject && (
          <ProjectGalleryModal project={galleryProject} onClose={() => setGalleryProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
