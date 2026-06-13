"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Instagram } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function StrandsTeaser() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 bg-champagne"
      aria-labelledby="strands-teaser-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-flourish text-espresso/50 text-xl mb-1">
              Sub-brand
            </p>
            <h2
              id="strands-teaser-heading"
              className="font-display font-bold text-espresso mb-2"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Discover Strands by HX
            </h2>
            <p className="text-espresso/70 text-lg font-light">
              Premium Hair &amp; Wig Collection
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={BRAND.strandsInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Strands by HX on Instagram"
              className="inline-flex items-center gap-3 bg-espresso text-ivory font-semibold px-8 py-4 hover:bg-onyx transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              @strands_by_hx.ng
            </a>
            <a
              href="/strands"
              className="inline-flex items-center gap-2 border border-espresso text-espresso font-medium px-8 py-4 hover:bg-espresso hover:text-ivory transition-all duration-300"
            >
              Learn More →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
