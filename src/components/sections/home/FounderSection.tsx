"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function FounderSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-24 bg-champagne/30"
      aria-labelledby="founder-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[550px] overflow-hidden">
              <Image
                src="/images/client-lace-front-smile.jpeg"
                alt="Dorcas Ade Akanbi — Founder and Lead Stylist at Hairxpresser.NG"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <p className="font-flourish text-gold text-3xl mb-1">
              Dorcas Ade Akanbi
            </p>
            <h2
              id="founder-heading"
              className="font-display font-semibold text-onyx mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Meet the Stylist Behind the Magic
            </h2>
            <SectionDivider className="justify-start py-4" />

            <p className="text-onyx/70 leading-relaxed mb-4">
              Born with a passion for beauty and a vision for transformation,
              Dorcas built Hairxpresser.NG from the ground up in Ilorin, Kwara
              State. What started as a love for perfecting hair grew into one of
              the city&apos;s most trusted premium salons.
            </p>
            <p className="text-onyx/70 leading-relaxed mb-6">
              From intricate bridal styling that has graced hundreds of wedding
              days, to a thriving training academy empowering the next generation
              of stylists — every service she offers is rooted in excellence,
              care, and an uncompromising eye for detail.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-6 py-2 mb-8">
              <p className="font-display font-semibold italic text-espresso text-lg leading-relaxed">
                &ldquo;Hair is how we express who we are. I don&apos;t just style
                hair — I help people show the world their best selves.&rdquo;
              </p>
              <footer className="text-gold text-sm font-medium mt-2">
                — Dorcas Ade Akanbi
              </footer>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-onyx text-onyx font-semibold px-8 py-4 hover:bg-onyx hover:text-ivory transition-all duration-300"
              >
                Our Full Story
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
