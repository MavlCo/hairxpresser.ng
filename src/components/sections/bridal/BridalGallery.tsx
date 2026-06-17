"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const bridalImages = [
  {
    src: "/images/client-updo-back.jpeg",
    alt: "Elegant bridal updo hairstyle at Hairxpresser.NG",
  },
  {
    src: "/images/client-sleek-bun-logo.jpeg",
    alt: "Sleek bridal bun styling",
  },
  {
    src: "/images/client-high-bun-back.jpeg",
    alt: "High bridal bun with baby hairs",
  },
  {
    src: "/images/client-lace-front-smile.jpeg",
    alt: "Lace front wig bridal installation",
  },
  {
    src: "/images/client-curly-lacefront.jpeg",
    alt: "Curly lace front bridal styling",
  },
  {
    src: "/images/client-afro-curly-wig.jpeg",
    alt: "Voluminous curly bridal style",
  },
];

export function BridalGallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 bg-espresso/10"
      aria-labelledby="bridal-gallery-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.h2
          id="bridal-gallery-heading"
          className="font-display font-semibold text-onyx text-center mb-10"
          style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bridals Inspiration Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {bridalImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative h-64 md:h-80 overflow-hidden group"
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/20 transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
