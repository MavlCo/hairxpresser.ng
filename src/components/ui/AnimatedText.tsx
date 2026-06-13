"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AnimatedText({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delayChildren: delay }}
    >
      <Tag className={`${className} inline`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
