"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  type?: "button" | "submit" | "reset";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-onyx font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_0_20px_rgba(232,178,42,0.5)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-onyx text-onyx font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all duration-300 hover:bg-onyx hover:text-ivory active:opacity-90",
  ghost:
    "text-gold font-medium inline-flex items-center gap-2 pb-0.5 border-b border-transparent hover:border-gold transition-all duration-300",
};

export function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
  target,
  rel,
  "aria-label": ariaLabel,
  type = "button",
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: variant === "primary" ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
