"use client";

import { LAYOUTS } from "@/components/sections/projects/ProjectVisuals";
import Glow from "@/components/ui/Glow";
import Icon from "@/components/ui/Icon";
import Scaled from "@/components/ui/Scaled";
import type { Project } from "@/data/projects";
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

export default function ProjectPanel({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const layout = LAYOUTS[project.id];
  const textOnRight = layout.textLeft > 640;
  const { box } = layout;
  const [from, to] = project.colors;

  return (
    <article
      onClick={onOpen}
      className="group relative overflow-hidden rounded-[28px] border border-white/35 text-white shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] dark:shadow-none transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none lg:rounded-[40px] cursor-pointer"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
      {/* Desktop: the design canvas, scaled to the panel width */}
      <div className="hidden lg:block">
        <Scaled width={1280} height={580}>
          <Glow name={`panel-${project.id}`} x={textOnRight ? -381 : 519} y={-441} w={1060} h={860} />
          <Glow name="panel-shade" x={textOnRight ? 539 : -261} y={359} w={920} h={720} />
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
