"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ServicesPageHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="pt-40 pb-20 bg-gradient-to-br from-espresso via-charcoal to-onyx relative overflow-hidden"
      aria-label="Services page hero"
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-20 text-center">
        <motion.p
          className="font-flourish text-gold text-3xl mb-3"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What we do
        </motion.p>
        <motion.h1
          className="font-display font-bold text-ivory mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-ivory/60 text-xl max-w-2xl mx-auto"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          From everyday styling to your most important day — every service
          crafted with precision and care.
        </motion.p>
      </div>
    </section>
  );
}
