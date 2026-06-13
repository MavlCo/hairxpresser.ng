"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryLightbox } from "./GalleryLightbox";
import { BeforeAfterSection } from "@/components/sections/home/BeforeAfterSection";
import { CTABand } from "@/components/sections/home/CTABand";
import { GALLERY_IMAGES } from "@/lib/constants";

export function GalleryPageClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-16 bg-gradient-to-br from-charcoal to-onyx"
        aria-label="Gallery page hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20 text-center">
          <motion.p
            className="font-flourish text-gold text-3xl mb-3"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our portfolio
          </motion.p>
          <motion.h1
            className="font-display font-bold text-ivory mb-4"
            style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="text-ivory/60 text-lg max-w-xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Every image tells a transformation story. Browse our work by category.
          </motion.p>
        </div>
      </section>

      <GalleryGrid onImageClick={setLightboxIndex} />
      <BeforeAfterSection />
      <CTABand />

      <GalleryLightbox
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
