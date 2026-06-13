"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const headline = "Hair, Styled to Express You.";
  const words = headline.split(" ");

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
      aria-label="Hero — Hairxpresser.NG"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/client-lace-front-smile.jpeg"
          alt="Client with lace front wig installation at Hairxpresser.NG salon"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/90 via-charcoal/80 to-espresso/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/50 via-transparent to-transparent" />
      </div>

      {/* Animated SVG hair silhouette */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-end pr-12 pointer-events-none">
        <motion.svg
          width="300"
          height="500"
          viewBox="0 0 300 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="animate-float opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.path
            d="M150 20 C80 60, 40 120, 50 200 C60 280, 120 300, 100 380 C80 460, 50 480, 60 500"
            stroke="#E8B22A"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M170 10 C220 50, 260 110, 250 190 C240 270, 180 290, 200 370 C220 450, 260 470, 240 500"
            stroke="#E8B22A"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M130 30 C70 80, 20 150, 30 230 C40 310, 100 340, 80 400 C60 460, 30 490, 50 510"
            stroke="#F3E4D0"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, delay: 1.6, ease: "easeInOut" }}
          />
          <motion.path
            d="M190 15 C240 60, 270 130, 260 210 C250 290, 200 310, 220 390 C240 470, 280 480, 260 510"
            stroke="#E8B22A"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, delay: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-20 w-full">
        <div className="max-w-3xl">
          {/* Flourish */}
          <motion.p
            className="font-flourish text-gold text-2xl mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to
          </motion.p>

          {/* Main headline with word-by-word animation */}
          <motion.h1
            className="font-display font-bold text-ivory leading-none mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1.05 }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className={`inline-block ${word === "You." ? "text-gold" : ""}`}
                  variants={shouldReduceMotion ? {} : wordVariants}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-champagne text-lg md:text-xl font-light tracking-wide mb-10"
            variants={shouldReduceMotion ? {} : fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            Bridal · Wigs · Revamps · Training — Ilorin, Nigeria
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={shouldReduceMotion ? {} : fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
          >
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your appointment on WhatsApp"
              className="inline-flex items-center justify-center gap-2 bg-gold text-onyx font-semibold px-8 py-4 hover:bg-gold-dark hover:shadow-[0_0_30px_rgba(232,178,42,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/gallery"
              aria-label="View our work gallery"
              className="inline-flex items-center justify-center gap-2 border border-ivory/50 text-ivory font-semibold px-8 py-4 hover:border-ivory hover:bg-ivory/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-ivory/40 text-xs tracking-[0.15em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-ivory/50" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
