export default function TechLogo({ name, size }: { name: string; size: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/figma/logo-${name}.svg`}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={`shrink-0 ${name === "nextjs" ? "invert dark:invert-0" : ""}`}
      style={{ width: size, height: size }}
    />
  );
}
