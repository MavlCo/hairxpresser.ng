"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

const packages = [
  {
    name: "Trial Session",
    subtitle: "Perfect your look",
    features: [
      "1-hour styling consultation",
      "Full trial hairstyle",
      "Style documentation (photos)",
      "Product recommendations",
      "Minor adjustments included",
    ],
    cta: "Book Trial",
    highlight: false,
  },
  {
    name: "Bridals Day",
    subtitle: "Your wedding, perfected",
    features: [
      "Everything in Trial Session",
      "Full wedding day styling",
      "Travel to venue (Ilorin area)",
      "Touch-up kit provided",
      "On-call for reception touch-up",
      "Priority scheduling",
    ],
    cta: "Book Bridals Day",
    highlight: true,
  },
  {
    name: "Bridals Party",
    subtitle: "The full celebration",
    features: [
      "Everything in Bridals Day",
      "Bridesmaid styling (up to 4)",
      "Flower girl styling",
      "Extended travel radius",
      "Dedicated styling assistant",
      "Full-day availability",
    ],
    cta: "Book Party Package",
    highlight: false,
  },
];

export function BridalPackages() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="bridal-packages"
      className="py-24 bg-ivory"
      aria-labelledby="bridal-packages-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <motion.p
            className="font-flourish text-gold text-2xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose your experience
          </motion.p>
          <motion.h2
            id="bridal-packages-heading"
            className="font-display font-semibold text-onyx"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Bridals Packages
          </motion.h2>
          <motion.p
            className="text-onyx/60 mt-4 max-w-xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            All packages are tailored to your specific needs. Message us on WhatsApp for custom pricing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.article
              key={i}
              className={`relative p-8 flex flex-col ${
                pkg.highlight
                  ? "bg-espresso text-ivory border-2 border-gold"
                  : "bg-surface border border-champagne"
              }`}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-onyx text-xs font-bold uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}

              <h3
                className={`font-display font-bold text-2xl mb-1 ${
                  pkg.highlight ? "text-gold" : "text-onyx"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  pkg.highlight ? "text-ivory/60" : "text-onyx/50"
                }`}
              >
                {pkg.subtitle}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        pkg.highlight ? "text-gold" : "text-gold"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm ${
                        pkg.highlight ? "text-ivory/80" : "text-onyx/70"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${pkg.name} package on WhatsApp`}
                className={`inline-flex items-center justify-center gap-2 py-4 font-semibold transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gold text-onyx hover:bg-gold-dark"
                    : "border border-onyx text-onyx hover:bg-onyx hover:text-ivory"
                }`}
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                {pkg.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
