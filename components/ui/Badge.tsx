"use client";

type BadgeProps = {
  children: React.ReactNode;
  color?: "blue" | "zinc";
  size?: "sm" | "md";
};

const colorMap = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  zinc: "bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border-zinc-300/60 dark:border-zinc-700/40",
};

const sizeMap = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  color = "zinc",
  size = "sm",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium tracking-wide ${colorMap[color]} ${sizeMap[size]}`}
    >
      {children}
    </span>
  );
}
