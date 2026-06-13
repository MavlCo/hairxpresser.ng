"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function CTABand() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-gold py-20 text-center"
      aria-labelledby="cta-band-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.p
          className="font-flourish text-onyx/40 text-2xl mb-2"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let&apos;s get started
        </motion.p>

        <motion.h2
          id="cta-band-heading"
          className="font-display font-bold text-onyx mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ready for Your Transformation?
        </motion.h2>

        <motion.p
          className="text-onyx/70 text-lg mb-10 max-w-xl mx-auto"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Book your appointment on WhatsApp today. Walk-ins also welcome at our
          Tanke, Ilorin salon.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your appointment on WhatsApp"
            className="inline-flex items-center gap-3 bg-onyx text-ivory font-semibold text-lg px-10 py-5 hover:bg-charcoal transition-colors duration-300"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
            Book on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
