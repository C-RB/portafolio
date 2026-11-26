/** Monochrome icon from the design, tinted with the current text color. */
export default function Icon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  const mask = `url(/figma/icon-${name}.svg) center / contain no-repeat`;
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{ width: size, height: size, mask, WebkitMask: mask }}
    />
  );
}
