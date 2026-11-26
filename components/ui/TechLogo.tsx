const PNG_LOGOS = new Set(["java", "linux", "postgresql", "python", "typescript"]);

export default function TechLogo({ name, size }: { name: string; size: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/assets/logos/${name}.${PNG_LOGOS.has(name) ? "png" : "svg"}`}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={`shrink-0 object-contain ${name === "nextjs" ? "invert dark:invert-0" : ""}`}
      style={{ width: size, height: size }}
    />
  );
}
