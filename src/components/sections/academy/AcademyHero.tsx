"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

export function AcademyHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      aria-label="Academy hero section"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/wig-brown-wavy-wip.jpeg"
          alt="Wig being styled during Hairxpresser.NG training academy session"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/95 via-charcoal/85 to-onyx/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-20 py-40">
        <motion.p
          className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hairxpresser.NG Training Academy
        </motion.p>

        <motion.h1
          className="font-display font-bold text-ivory leading-tight mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Launch Your<br />
          <span className="text-gold">Styling Career</span>
        </motion.h1>

        <motion.p
          className="text-ivory/70 text-lg max-w-xl mb-10 leading-relaxed"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Learn from a professional stylist who has been doing this for years.
          Hands-on training, real clients, and the skills to build a career you&apos;re
          proud of.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enroll in the academy via WhatsApp"
            className="inline-flex items-center gap-2 bg-gold text-onyx font-semibold text-lg px-10 py-5 hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            Enroll via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
