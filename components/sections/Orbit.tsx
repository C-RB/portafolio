import TechLogo from "@/components/ui/TechLogo";

// Positions in design pixels on a 780×780 canvas.
const CHIPS = [
  { logo: "react", glow: [417.76, 236.71, 93.6], chip: [438.56, 257.51, 52], icon: 24 },
  { logo: "typescript", glow: [268.64, 449.69, 93.6], chip: [289.44, 470.49, 52], icon: 24 },
  { logo: "nodejs", glow: [562.99, 275.18, 108], chip: [586.99, 299.18, 60], icon: 28 },
  { logo: "nextjs", glow: [315.52, 101.89, 108], chip: [339.52, 125.89, 60], icon: 28 },
  { logo: "tailwind", glow: [416.37, 556.83, 108], chip: [440.37, 580.83, 60], icon: 28 },
  { logo: "python", glow: [132.48, 453.5, 108], chip: [156.48, 477.5, 60], icon: 28 },
  { logo: "git", glow: [596.69, 110.64, 115.2], chip: [622.29, 136.24, 64], icon: 29 },
  { logo: "springboot", glow: [645.08, 478.2, 115.2], chip: [670.68, 503.8, 64], icon: 29 },
  { logo: "android", glow: [302.33, 676.09, 115.2], chip: [327.93, 701.69, 64], icon: 29 },
  { logo: "java", glow: [159.9, 33.62, 115.2], chip: [185.5, 59.22, 64], icon: 29 },
];

const RINGS = [
  { src: "ring-1.svg", offset: 260, size: 260 },
  { src: "ring-2.png", offset: 155, size: 470 },
  { src: "ring-3.svg", offset: 45, size: 690 },
];

function Layer({ src, left, top, size, className = "" }: { src: string; left: number; top: number; size: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/figma/${src}`}
      alt=""
      className={`absolute max-w-none ${className}`}
      style={{ left, top, width: size, height: size }}
    />
  );
}

export default function Orbit() {
  return (
    <div aria-hidden className="orbit-float relative size-[780px]">
      <div className="orbit-spin absolute inset-0">
        {RINGS.map((ring) => (
          <Layer key={ring.src} src={ring.src} left={ring.offset} top={ring.offset} size={ring.size} className="invert dark:invert-0" />
        ))}
        {CHIPS.map(({ logo, glow: [gx, gy, gs], chip: [x, y, s], icon }) => (
          <div key={logo}>
            {/* The exported glow bleeds 38.89% past its node on every side. */}
            <Layer src={`glow-${logo}.svg`} left={gx - gs * 0.3889} top={gy - gs * 0.3889} size={gs * 1.7778} />
            <div
              className="orbit-counter-spin absolute flex items-center justify-center rounded-full border border-white/20 bg-[#0a0a0c]/85 shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)]"
              style={{ left: x, top: y, width: s, height: s }}
            >
              {/* Chips stay dark in both themes, so the logo is never inverted. */}
              <div className="dark contents">
                <TechLogo name={logo} size={icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Layer src="glow-core.svg" left={220} top={220} size={340} />
      <div className="absolute left-[326px] top-[326px] flex size-[128px] items-center justify-center rounded-full border border-line-strong bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md">
        <span className="title-gradient text-4xl font-semibold tracking-[-0.04em]">CR</span>
      </div>
    </div>
  );
}
