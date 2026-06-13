"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function GalleryTeaser() {
  const shouldReduceMotion = useReducedMotion();
  const images = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-24 bg-ivory" aria-labelledby="gallery-teaser-heading">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p
              className="font-flourish text-gold text-2xl mb-1"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our work
            </motion.p>
            <motion.h2
              id="gallery-teaser-heading"
              className="font-display font-semibold text-onyx"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A Glimpse of the Magic
            </motion.h2>
          </div>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-gold font-medium border-b border-gold transition-all duration-300 hover:text-gold-dark pb-0.5"
            >
              See Full Gallery →
            </Link>
          </motion.div>
        </div>

        {/* Masonry grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              variants={shouldReduceMotion ? {} : itemVariants}
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 || i === 3 ? "row-span-2" : ""
              }`}
              style={{
                height: i === 0 || i === 3 ? "auto" : "220px",
                aspectRatio: i === 0 || i === 3 ? "3/4" : "auto",
              }}
            >
              <div
                className={`relative w-full ${
                  i === 0 || i === 3 ? "h-full" : "h-[220px]"
                } overflow-hidden`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-all duration-400 flex items-center justify-center">
                  <span className="text-ivory font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold/90 px-3 py-1.5">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
