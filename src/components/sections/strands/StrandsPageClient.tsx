"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

const strandsImages = [
  "/images/wig-auburn-bob-bangs.jpeg",
  "/images/wig-black-curly-lacefront.jpeg",
  "/images/wig-auburn-textured-bob.jpeg",
  "/images/wig-black-kinky-curls.jpeg",
  "/images/wig-brown-wavy-bob.jpeg",
  "/images/client-afro-curly-wig.jpeg",
  "/images/client-curly-lacefront.jpeg",
  "/images/client-high-bun-back.jpeg",
];

const alts = [
  "Auburn bob with bangs wig from Strands by HX",
  "Black curly lace front wig",
  "Auburn textured bob wig",
  "Black kinky curls wig unit",
  "Brown wavy bob wig from Strands by HX",
  "Client wearing voluminous afro curly wig",
  "Client wearing curly lace front wig",
  "Client with high bun styling at Hairxpresser.NG",
];

export function StrandsPageClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20 bg-champagne relative overflow-hidden"
        aria-label="Strands by HX hero"
      >
        {/* Gold decorative line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="max-w-[1400px] mx-auto px-5 lg:px-20 text-center">
          <motion.p
            className="font-flourish text-espresso/40 text-xl mb-1"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A Hairxpresser.NG sub-brand
          </motion.p>

          <motion.h1
            className="font-display font-bold text-espresso mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Strands by HX
          </motion.h1>

          <motion.p
            className="text-espresso/70 text-xl mb-8 font-light"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Premium Hair &amp; Wig Collection
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={BRAND.strandsInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop Strands by HX on Instagram"
              className="inline-flex items-center gap-3 bg-espresso text-ivory font-semibold px-8 py-4 hover:bg-onyx transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              Shop on Instagram
            </a>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire about Strands by HX on WhatsApp"
              className="inline-flex items-center gap-3 border border-espresso text-espresso font-medium px-8 py-4 hover:bg-espresso hover:text-ivory transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              WhatsApp Enquiry
            </a>
          </motion.div>
        </div>
      </section>

      {/* About the sub-brand */}
      <section className="py-20 bg-surface" aria-labelledby="strands-about-heading">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              id="strands-about-heading"
              className="font-display font-semibold text-onyx mb-6"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Strands by HX
            </motion.h2>
            <motion.p
              className="text-onyx/70 leading-relaxed text-lg mb-4"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Strands by HX is the premium hair product arm of Hairxpresser.NG.
              Curated by Dorcas Ade-Akanbi, our collection features high-quality
              wigs, extensions, and hair accessories — selected with the same
              attention to detail as our salon services.
            </motion.p>
            <motion.p
              className="text-onyx/70 leading-relaxed text-lg"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every piece in our collection is tested, styled, and approved by
              our expert team — because we believe great hair products should feel
              as good as they look.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Image showcase grid */}
      <section className="py-12 bg-ivory" aria-labelledby="strands-showcase-heading">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
          <motion.h2
            id="strands-showcase-heading"
            className="font-display font-semibold text-onyx text-center mb-10"
            style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Collection
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {strandsImages.map((src, i) => (
              <motion.div
                key={i}
                className="relative h-64 md:h-72 overflow-hidden group"
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <Image
                  src={src}
                  alt={alts[i]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/20 transition-all duration-400" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={BRAND.strandsInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See more on Strands by HX Instagram"
              className="inline-flex items-center gap-2 text-gold font-medium border-b border-gold pb-0.5 hover:text-gold-dark transition-colors"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              See more @strands_by_hx.ng →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso py-20 text-center" aria-label="Strands by HX CTA">
        <div className="max-w-xl mx-auto px-5">
          <motion.h2
            className="font-display font-bold text-ivory mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Interested in Our Hair Collection?
          </motion.h2>
          <motion.p
            className="text-ivory/60 mb-8"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Browse our latest pieces on Instagram or send us a WhatsApp message
            to enquire about availability and pricing.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href={BRAND.strandsInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-onyx font-semibold px-8 py-4 hover:bg-gold-dark transition-colors"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              Follow on Instagram
            </a>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ivory/30 text-ivory font-medium px-8 py-4 hover:border-ivory/60 transition-all"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
