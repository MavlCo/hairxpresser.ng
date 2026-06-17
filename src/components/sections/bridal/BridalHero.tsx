"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

export function BridalHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Bridals services hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/client-updo-back.jpeg"
          alt="Elegant bridals updo hairstyle at Hairxpresser.NG"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/80 to-espresso/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-20 py-40">
        <motion.p
          className="font-flourish text-gold text-5xl lg:text-7xl mb-2"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Bridals
        </motion.p>

        <motion.h1
          className="font-display font-bold text-ivory leading-tight mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Your Perfect<br />Wedding Hair
        </motion.h1>

        <motion.p
          className="text-champagne text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Flawless, long-lasting bridals hair for your most important day.
          From trial session to your walk down the aisle — we&apos;re with you
          every step.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reserve your bridal date on WhatsApp"
            className="inline-flex items-center justify-center gap-2 bg-gold text-onyx font-semibold px-10 py-5 text-lg hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            Reserve Your Date
          </a>
          <a
            href="#bridal-packages"
            className="inline-flex items-center justify-center gap-2 border border-ivory/40 text-ivory font-medium px-10 py-5 hover:border-ivory/80 transition-all duration-300"
          >
            View Packages ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
