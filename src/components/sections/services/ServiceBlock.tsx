"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

type ServiceBlockProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  idealFor: readonly string[];
  includes: readonly string[];
  reverse?: boolean;
};

export function ServiceBlock({
  id,
  name,
  description,
  image,
  idealFor,
  includes,
  reverse = false,
}: ServiceBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className="py-16 lg:py-24 overflow-hidden border-b border-champagne/50"
      aria-labelledby={`service-${id}-heading`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            className="relative h-[400px] lg:h-[550px] overflow-hidden"
            initial={
              shouldReduceMotion
                ? {}
                : { opacity: 0, x: reverse ? 60 : -60 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Image
              src={image}
              alt={`${name} service at Hairxpresser.NG`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={
              shouldReduceMotion
                ? {}
                : { opacity: 0, x: reverse ? -60 : 60 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
          >
            <h2
              id={`service-${id}-heading`}
              className="font-display font-semibold text-onyx mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {name}
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="text-onyx/70 leading-relaxed text-lg mb-8">
              {description}
            </p>

            {/* Ideal For */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-onyx/50 mb-3">
                Ideal For
              </h3>
              <ul className="flex flex-wrap gap-2">
                {idealFor.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm bg-champagne/60 text-espresso px-3 py-1.5 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-onyx/50 mb-3">
                Includes
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-onyx/70">
                    <Check className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${name} on WhatsApp`}
              className="inline-flex items-center gap-3 bg-gold text-onyx font-semibold px-8 py-4 hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Book {name}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
