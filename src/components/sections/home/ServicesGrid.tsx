"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BRAND, SERVICES } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-surface" aria-labelledby="services-heading">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="font-flourish text-gold text-2xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What we offer
          </motion.p>
          <motion.h2
            id="services-heading"
            className="font-display font-semibold text-onyx mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Signature Services
          </motion.h2>
          <SectionDivider />
        </div>

        {/* Asymmetric grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              variants={shouldReduceMotion ? {} : cardVariants}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 1
                  ? "md:col-span-2 lg:col-span-1 min-h-[500px]"
                  : "min-h-[400px]"
              } ${i === 0 ? "lg:col-span-2 min-h-[500px]" : ""}`}
              whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={`${service.name} at Hairxpresser.NG`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/20 to-transparent" />

              {/* Default content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-display font-semibold text-ivory text-2xl mb-1">
                  {service.name}
                </h3>
                <p className="text-ivory/60 text-sm line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-onyx/90 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="font-display font-semibold text-gold text-2xl mb-3">
                  {service.name}
                </h3>
                <p className="text-ivory/80 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${service.name} on WhatsApp`}
                  className="inline-flex items-center gap-2 bg-gold text-onyx text-sm font-semibold px-6 py-3 hover:bg-gold-dark transition-colors duration-200"
                >
                  Book Now
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold font-medium border-b border-gold/0 hover:border-gold transition-all duration-300 pb-0.5"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
