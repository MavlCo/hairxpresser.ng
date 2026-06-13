"use client";

import { motion } from "framer-motion";

type SectionDividerProps = {
  className?: string;
  color?: string;
  width?: number;
};

export function SectionDivider({
  className = "",
  color = "#E8B22A",
  width = 200,
}: SectionDividerProps) {
  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <motion.svg
        width={width}
        height="2"
        viewBox={`0 0 ${width} 2`}
        aria-hidden="true"
      >
        <motion.line
          x1="0"
          y1="1"
          x2={width}
          y2="1"
          stroke={color}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.svg>
    </div>
  );
}
