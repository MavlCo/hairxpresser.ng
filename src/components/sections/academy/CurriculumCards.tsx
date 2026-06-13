"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Users,
  BookOpen,
  TrendingUp,
  Award,
} from "lucide-react";

const curriculum = [
  {
    icon: Scissors,
    title: "Hair Cutting & Shaping",
    description:
      "Master the fundamentals of precision cutting for all hair types and textures.",
  },
  {
    icon: Sparkles,
    title: "Styling Techniques",
    description:
      "Learn blow-drying, flat-ironing, curling, and protective styling from the ground up.",
  },
  {
    icon: Users,
    title: "Wig Installation & Frontals",
    description:
      "Full training on wig customization, frontal installation, and seamless blending.",
  },
  {
    icon: BookOpen,
    title: "Color Theory",
    description:
      "Understand hair color, bleaching, toning, and safe chemical processing.",
  },
  {
    icon: TrendingUp,
    title: "Business & Pricing",
    description:
      "How to price your services, attract clients, and build a sustainable business.",
  },
  {
    icon: Award,
    title: "Bridal & Event Styling",
    description:
      "Advanced styling for weddings and high-profile events — where precision matters most.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function CurriculumCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-24 bg-surface"
      aria-labelledby="curriculum-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <motion.p
            className="font-flourish text-gold text-2xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The curriculum
          </motion.p>
          <motion.h2
            id="curriculum-heading"
            className="font-display font-semibold text-onyx"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What You&apos;ll Learn
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {curriculum.map((item, i) => (
            <motion.div
              key={i}
              variants={shouldReduceMotion ? {} : cardVariants}
              className="p-8 bg-ivory border border-champagne/50 hover:border-gold/40 hover:shadow-[0_20px_40px_rgba(14,14,14,0.05)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-onyx text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-onyx/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Format details */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-espresso"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-xs text-ivory/40 uppercase tracking-widest mb-2">Duration</p>
            <p className="font-display font-semibold text-ivory text-xl">Flexible Modules</p>
            <p className="text-ivory/60 text-sm mt-1">Beginner to Advanced</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-ivory/40 uppercase tracking-widest mb-2">Mode</p>
            <p className="font-display font-semibold text-ivory text-xl">In-Person</p>
            <p className="text-ivory/60 text-sm mt-1">Salon & Home Visit Options</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-ivory/40 uppercase tracking-widest mb-2">Certification</p>
            <p className="font-display font-semibold text-ivory text-xl">Certified</p>
            <p className="text-ivory/60 text-sm mt-1">Hairxpresser.NG Certificate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
