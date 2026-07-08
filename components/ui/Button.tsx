"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
};

const variantMap = {
  primary:
    "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30",
  secondary:
    "bg-zinc-200/60 hover:bg-zinc-300/60 dark:bg-zinc-800/60 dark:hover:bg-zinc-700/60 text-zinc-900 dark:text-zinc-100 border border-zinc-300/50 dark:border-zinc-700/50 hover:border-zinc-400/50 dark:hover:border-zinc-600/50",
  ghost:
    "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/40 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/40",
};

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "secondary",
  size = "md",
  href,
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer ${variantMap[variant]} ${sizeMap[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
