/** Blurred light exported from the design, positioned in design pixels. */
export default function Glow({ name, x, y, w, h = w }: { name: string; x: number; y: number; w: number; h?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/figma/${name}.svg`}
      alt=""
      aria-hidden
      className="pointer-events-none absolute max-w-none"
      style={{ left: x, top: y, width: w, height: h }}
    />
  );
}

/** 1440px wide layer, centered, that keeps the glows behind the content. */
export function GlowLayer({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 w-[1440px] -translate-x-1/2 opacity-40 dark:opacity-100">
      {children}
    </div>
  );
}
