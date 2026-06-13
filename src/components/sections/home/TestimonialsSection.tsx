"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-24 bg-espresso"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <motion.p
            className="font-flourish text-gold text-2xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Kind words
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            className="font-display font-semibold text-ivory"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.id}
              className="bg-ivory/5 border border-ivory/10 p-8 hover:border-gold/40 transition-colors duration-300"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-gold fill-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-ivory/80 leading-relaxed text-base italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              {/* Client info */}
              <footer className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-ivory font-semibold text-sm">{t.name}</p>
                  <p className="text-gold/70 text-xs">{t.service}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
