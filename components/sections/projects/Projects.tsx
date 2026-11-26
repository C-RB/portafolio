"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectGalleryModal from "@/components/sections/projects/ProjectGalleryModal";
import ProjectPanel from "@/components/sections/projects/ProjectPanel";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";
import { useLanguage } from "@/lib/language-context";

export default function Projects() {
  const { t } = useLanguage();
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const closeGallery = useCallback(() => setGalleryProject(null), []);

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
          <ProjectGalleryModal project={galleryProject} onClose={closeGallery} />
        )}
      </AnimatePresence>
    </section>
  );
}
