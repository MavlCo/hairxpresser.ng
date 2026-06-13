"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

type Category = "All" | "Bridal" | "Frontals" | "Wigs" | "Revamp" | "Styling";

const categories: Category[] = [
  "All",
  "Bridal",
  "Frontals",
  "Wigs",
  "Revamp",
  "Styling",
];

type GalleryGridProps = {
  onImageClick: (index: number) => void;
};

export function GalleryGrid({ onImageClick }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section className="py-12" aria-labelledby="gallery-grid-heading">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        {/* Filter buttons */}
        <div
          className="flex flex-wrap gap-3 mb-10 justify-center"
          role="group"
          aria-label="Filter gallery by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gold text-onyx"
                  : "bg-surface border border-champagne text-onyx/70 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          layout={!shouldReduceMotion}
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="relative h-56 md:h-72 overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                onClick={() => onImageClick(i)}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/50 transition-all duration-400 flex flex-col items-center justify-center">
                  <span className="text-ivory font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold/90 px-3 py-1.5 mb-2">
                    {img.category}
                  </span>
                  <span className="text-ivory/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    Click to expand
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-onyx/50">
            No images in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
