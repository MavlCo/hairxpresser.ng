"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

export function BridalSpotlight() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-espresso overflow-hidden"
      aria-labelledby="bridal-spotlight-heading"
    >
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 min-h-[600px]">
        {/* Text content */}
        <div className="flex flex-col justify-center px-5 lg:px-20 py-20 order-2 lg:order-1">
          <motion.p
            className="font-flourish text-gold text-4xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bridals
          </motion.p>

          <motion.h2
            id="bridal-spotlight-heading"
            className="font-display font-bold text-ivory leading-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Wedding Hair,<br />Perfected.
          </motion.h2>

          <motion.div
            className="w-16 h-px bg-gold mb-6"
            initial={shouldReduceMotion ? {} : { scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            className="text-ivory/70 text-base leading-relaxed mb-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your wedding day deserves flawless hair. From the bridals trial to
            your big day, Dorcas Ade-Akanbi brings her signature artistry and attention
            to detail — whether you&apos;re at our salon or she travels to your venue.
          </motion.p>

          <motion.p
            className="text-ivory/70 text-base leading-relaxed mb-8"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From traditional Nigerian ceremonies to white weddings, we create
            looks that last through every kiss, every dance, and every photograph.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your bridals hair trial on WhatsApp"
              className="inline-flex items-center justify-center gap-2 bg-gold text-onyx font-semibold px-8 py-4 hover:bg-gold-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Your Bridals Trial
            </a>
            <a
              href="/bridal"
              className="inline-flex items-center justify-center gap-2 border border-ivory/30 text-ivory font-medium px-8 py-4 hover:border-ivory/60 transition-all duration-300"
            >
              View Bridals Services
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <div className="relative min-h-[400px] lg:min-h-full order-1 lg:order-2">
          <Image
            src="/images/client-updo-back.jpeg"
            alt="Elegant bridal updo hairstyle by Hairxpresser.NG"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 to-transparent lg:bg-gradient-to-l" />

          {/* Gold accent badge */}
          <motion.div
            className="absolute bottom-8 left-8 bg-gold px-6 py-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-onyx text-xs font-semibold uppercase tracking-widest">
              Bridals Specialist
            </p>
            <p className="text-onyx font-display font-bold text-lg">
              Ilorin & Travel
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
