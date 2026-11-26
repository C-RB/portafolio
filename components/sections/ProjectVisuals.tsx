import Image from "next/image";
import type { Project } from "@/data/projects";

// All coordinates are design pixels inside the 1280×580 project panel.

function Browser({ project, left }: { project: Project; left: number }) {
  if (project.preview?.type !== "web") return null;
  return (
    <div
      className="absolute top-[189px] w-[760px] overflow-hidden rounded-[15.2px] border border-white/15 bg-[#161618] shadow-[0_47.5px_95px_rgba(0,0,0,0.6)]"
      style={{ left }}
    >
      <div className="flex items-center bg-[#1f1f22] px-[15.2px] py-[11.4px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/figma/traffic-lights.svg" alt="" className="h-[11.4px] w-[49.4px]" />
        <div className="flex flex-1 justify-center">
          <span className="rounded-[7.6px] bg-white/5 px-[57px] py-[4.75px] font-mono text-[11.4px] text-[#8e8e93]">
            {project.id}
          </span>
        </div>
        <span className="w-[49.4px]" />
      </div>
      <div className="relative h-[366.7px]">
        <Image src={project.preview.image} alt={project.name} fill sizes="760px" className="object-cover object-top" />
      </div>
    </div>
  );
}

type PhoneProps = { src: string; alt: string; x: number; y: number; width: number; height: number; rotate?: number };

function Phone({ src, alt, x, y, width, height, rotate = 0 }: PhoneProps) {
  return (
    <div
      className="absolute overflow-hidden border-[1.44px] border-white/35 bg-[#0e0e10] shadow-[0_28.8px_57.6px_rgba(0,0,0,0.6)]"
      style={{ left: x, top: y, width, height, borderRadius: width * 0.2, rotate: `${rotate}deg` }}
    >
      <div
        className="absolute overflow-hidden"
        style={{ inset: width / 30 - 1.44, borderRadius: width * 0.16 }}
      >
        <Image src={src} alt={alt} fill sizes="200px" className="object-cover object-top" />
      </div>
      <span
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black"
        style={{ top: width * 0.073, width: width * 0.3, height: width * 0.085 }}
      />
    </div>
  );
}

const CODE_COLORS = { c: "#6e6e73", k: "#c084fc", t: "#7dd3fc", s: "#86efac", p: "#e5e5ea" } as const;
type Token = [keyof typeof CODE_COLORS, string];

const CONTROLLER: Token[][] = [
  [["c", "// src/modules/auth/auth.controller.ts"]],
  [["k", "@Controller"], ["p", "("], ["s", "'auth'"], ["p", ")"]],
  [["k", "export class "], ["t", "AuthController"], ["p", " {"]],
  [["t", "  constructor"], ["p", "(private auth: "], ["t", "AuthService"], ["p", ") {}"]],
  [["p", " "]],
  [["k", "  @Post"], ["p", "("], ["s", "'login'"], ["p", ")"]],
  [["k", "  @Roles"], ["p", "("], ["s", "'admin'"], ["p", ", "], ["s", "'user'"], ["p", ")"]],
  [["k", "  async "], ["t", "login"], ["p", "(@Body() dto: "], ["t", "LoginDto"], ["p", ") {"]],
  [["k", "    return this"], ["p", ".auth."], ["t", "signIn"], ["p", "(dto);"]],
  [["p", "  }"]],
  [["p", "}"]],
];

const TERMINAL: Token[][] = [
  [["c", "$ "], ["p", "docker compose up -d"]],
  [["s", "✓ "], ["p", "postgres   "], ["c", "healthy"]],
  [["s", "✓ "], ["p", "api        "], ["c", "listening :3000"]],
  [["s", "✓ "], ["p", "jwt        "], ["c", "RS256 keys loaded"]],
];

function Editor({ title, lines, left, top, width }: { title: string; lines: Token[][]; left: number; top: number; width: number }) {
  return (
    <div
      aria-hidden
      className="absolute overflow-hidden rounded-[11.52px] border border-white/15 bg-[#0d0d10]/95 font-mono shadow-[0_36px_72px_rgba(0,0,0,0.6)]"
      style={{ left, top, width }}
    >
      <div className="flex items-center gap-[14.4px] bg-[#18181b] px-[11.52px] py-[8.64px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/figma/traffic-lights.svg" alt="" className="h-[8.64px] w-[37.44px]" />
        <span className="text-[8.64px] text-[#8e8e93]">{title}</span>
      </div>
      <div className="flex flex-col gap-[4.32px] px-[20.16px] py-[17.28px] text-[10.08px] leading-[normal]">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className="text-[#3a3a3f]">{String(i + 1).padStart(2, " ")}   </span>
            {line.map(([color, text], j) => (
              <span key={j} style={{ color: CODE_COLORS[color] }}>
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Layout = {
  /** Side of the panel where the text goes on desktop. */
  textLeft: number;
  textTop: number;
  /** Area of the panel covered by the visual, used to crop it on small screens. */
  box: { x: number; y: number; width: number; height: number };
  render: (project: Project) => React.ReactNode;
};

const mobileShots = (project: Project) => (project.preview?.type === "mobile" ? project.preview.images : null);

export const LAYOUTS: Record<string, Layout> = {
  eunacomia: {
    textLeft: 63,
    textTop: 78,
    box: { x: 559, y: 189, width: 760, height: 410 },
    render: (project) => <Browser project={project} left={559} />,
  },
  sobracero: {
    textLeft: 825,
    textTop: 78,
    box: { x: -81, y: 189, width: 760, height: 410 },
    render: (project) => <Browser project={project} left={-81} />,
  },
  bilup: {
    textLeft: 63,
    textTop: 78,
    box: { x: 620, y: 90, width: 620, height: 390 },
    render: () => (
      <>
        <Editor title="auth.controller.ts — bilup" lines={CONTROLLER} left={700.6} top={108} width={518.4} />
        <Editor title="terminal" lines={TERMINAL} left={635.8} top={360} width={316.8} />
      </>
    ),
  },
  lexpa: {
    textLeft: 825,
    textTop: 78,
    box: { x: 40, y: 80, width: 520, height: 450 },
    render: (project) => {
      const shots = mobileShots(project);
      return shots && (
        <>
          <Phone src={shots[0]} alt={project.name} x={75.3} y={162.2} width={151.2} height={320.4} rotate={-6} />
          <Phone src={shots[2]} alt={project.name} x={380.2} y={185.2} width={151.2} height={320.4} rotate={6} />
          <Phone src={shots[1]} alt={project.name} x={210.2} y={99} width={172.8} height={366.5} />
        </>
      );
    },
  },
  activamente: {
    textLeft: 63,
    textTop: 92,
    box: { x: 835, y: 80, width: 400, height: 450 },
    render: (project) => {
      const shots = mobileShots(project);
      return shots && (
        <>
          <Phone src={shots[0]} alt={project.name} x={866.8} y={144.7} width={165.6} height={351.4} rotate={-5} />
          <Phone src={shots[1]} alt={project.name} x={1025.5} y={100.8} width={180} height={381.6} rotate={4} />
        </>
      );
    },
  },
};
