"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/language-context";

export default function ProjectGalleryModal({
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

  const closeButton = useRef<HTMLButtonElement>(null);
  const count = images.length;

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  // Lock the page scroll and move focus into the dialog; both are restored on close.
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (count < 2) return;
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count, onClose]);

  // Rendered on <body>: <main> is its own stacking context, below the navbar.
  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        ref={closeButton}
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
                  aria-label={t.projects.previous}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={t.projects.next}
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
