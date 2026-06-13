"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Heart, Award, Users, Globe, Instagram } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CTABand } from "@/components/sections/home/CTABand";

const values = [
  {
    icon: Heart,
    title: "Transformation",
    description:
      "We believe every client deserves to walk out feeling like a better version of themselves. Hair is our medium; transformation is our mission.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "No shortcuts, no compromise. We invest in the best products, techniques, and continuous learning to deliver premium results every time.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Premium hair care shouldn't be out of reach. We offer flexible services including home visits to make great styling accessible to all.",
  },
  {
    icon: Globe,
    title: "Community",
    description:
      "Through our Training Academy, we're building a community of skilled stylists across Nigeria — passing on the craft and the passion.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Founded",
    description: "Hairxpresser.NG opens its doors in Tanke, Ilorin.",
  },
  {
    year: "2019",
    title: "First Bridal",
    description: "The first of many bridal styling commissions — a day that changed everything.",
  },
  {
    year: "2021",
    title: "Academy Launch",
    description: "The Hairxpresser.NG Training Academy welcomes its first cohort of students.",
  },
  {
    year: "2023",
    title: "Strands by HX",
    description: "Launch of our premium hair and wig sub-brand, Strands by HX.",
  },
];

export function AboutPageClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero / Founder Story */}
      <section
        className="pt-40 pb-24 bg-surface"
        aria-labelledby="about-heading"
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="/images/client-lace-front-smile.jpeg"
                  alt="Dorcas Ade Akanbi — Founder of Hairxpresser.NG"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="font-flourish text-gold text-4xl mb-2"
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Dorcas Ade Akanbi
              </motion.p>

              <h1
                id="about-heading"
                className="font-display font-bold text-onyx mb-4"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                The Story Behind Hairxpresser.NG
              </h1>

              <SectionDivider className="justify-start py-4" />

              <p className="text-onyx/70 leading-relaxed mb-4">
                Dorcas Ade Akanbi grew up fascinated by beauty — the way a change
                in hairstyle could transform not just appearance, but confidence.
                What began as a passion became a vocation, and eventually a thriving
                business rooted in Tanke, Ilorin.
              </p>
              <p className="text-onyx/70 leading-relaxed mb-4">
                Over the years, Hairxpresser.NG has evolved from a local salon
                into a full-service brand encompassing bridal styling, wig services,
                a training academy, and the premium Strands by HX product line.
              </p>
              <p className="text-onyx/70 leading-relaxed mb-8">
                But at its core, the mission remains the same: to make every
                client feel seen, valued, and beautifully expressed through hair.
              </p>

              <blockquote className="border-l-2 border-gold pl-6 mb-8">
                <p className="font-display italic text-espresso text-lg leading-relaxed">
                  &ldquo;When you leave my chair feeling like the best version of
                  yourself — that&apos;s everything to me.&rdquo;
                </p>
                <footer className="text-gold text-sm font-medium mt-2">
                  — Dorcas Ade Akanbi
                </footer>
              </blockquote>

              <div className="flex gap-4">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Hairxpresser.NG on Instagram"
                  className="inline-flex items-center gap-2 bg-onyx text-ivory font-medium px-6 py-3 hover:bg-charcoal transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  Follow Us
                </a>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book with Dorcas on WhatsApp"
                  className="inline-flex items-center gap-2 border border-onyx text-onyx font-medium px-6 py-3 hover:bg-onyx hover:text-ivory transition-all"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 bg-champagne/30" aria-labelledby="values-heading">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <motion.h2
              id="values-heading"
              className="font-display font-semibold text-onyx"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Brand Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-surface p-8 hover:shadow-[0_20px_40px_rgba(14,14,14,0.05)] transition-shadow"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-onyx text-xl mb-3">
                  {value.title}
                </h3>
                <p
                  className="text-onyx/60 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: value.description }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-espresso" aria-labelledby="milestones-heading">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <motion.h2
              id="milestones-heading"
              className="font-display font-semibold text-ivory"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Connector */}
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-gold/20 -z-10" aria-hidden="true" />
                )}

                <span className="text-gold font-display font-bold text-3xl block mb-3">
                  {m.year}
                </span>
                <h3 className="font-display font-semibold text-ivory text-xl mb-2">
                  {m.title}
                </h3>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
