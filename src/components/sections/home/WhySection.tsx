"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, Award, GraduationCap, Clock } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const reasons = [
  {
    icon: MapPin,
    title: "Salon + Home Service + Travel",
    description:
      "Whether you prefer visiting our salon in Tanke, having us come to you, or meeting at your wedding venue — we're there.",
  },
  {
    icon: Award,
    title: "Professional Finish, Every Time",
    description:
      "We use premium products and proven techniques to deliver results that turn heads and photograph beautifully.",
  },
  {
    icon: GraduationCap,
    title: "Training-Backed Expertise",
    description:
      "Dorcas doesn't just style — she teaches. Her training academy ensures every technique is mastered to perfection.",
  },
  {
    icon: Clock,
    title: "Walk-ins Welcome",
    description:
      "No appointment? No problem. We welcome walk-ins Monday through Saturday, 8am–8pm.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WhySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-surface" aria-labelledby="why-heading">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <motion.p
            className="font-flourish text-gold text-2xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our difference
          </motion.p>
          <motion.h2
            id="why-heading"
            className="font-display font-semibold text-onyx mb-4"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why Choose Hairxpresser.NG
          </motion.h2>
          <SectionDivider />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={shouldReduceMotion ? {} : cardVariants}
              className={`flex gap-6 p-8 group hover:shadow-[0_20px_40px_rgba(14,14,14,0.05)] transition-shadow duration-300 ${
                i % 2 === 1 ? "lg:mt-8" : ""
              }`}
              style={{ backgroundColor: i % 2 === 0 ? "#fff8f2" : "#F3E4D0" }}
            >
              <div className="shrink-0 w-12 h-12 bg-gold/10 flex items-center justify-center">
                <reason.icon
                  className="w-6 h-6 text-gold"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-display font-semibold text-onyx text-xl mb-3">
                  {reason.title}
                </h3>
                <p
                  className="text-onyx/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: reason.description }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
