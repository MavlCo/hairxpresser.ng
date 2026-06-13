"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, TrendingUp, RefreshCw } from "lucide-react";

const profiles = [
  {
    icon: Star,
    title: "Beginners",
    description:
      "No experience? No problem. We start from the very basics and build your confidence alongside your skills. You'll leave with a strong foundation.",
    tag: "Start here",
  },
  {
    icon: TrendingUp,
    title: "Experienced Stylists",
    description:
      "Already styling but want to level up? We offer advanced modules in wig installation, bridal techniques, and color correction.",
    tag: "Level up",
  },
  {
    icon: RefreshCw,
    title: "Career Changers",
    description:
      "Looking for a new career path? Hair styling is lucrative, flexible, and deeply satisfying. We'll fast-track your learning and help you launch.",
    tag: "New career",
  },
];

export function AcademyProfiles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-24 bg-champagne/40"
      aria-labelledby="academy-profiles-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <motion.h2
            id="academy-profiles-heading"
            className="font-display font-semibold text-onyx"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Who Is This For?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              className="bg-surface p-8 relative overflow-hidden"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span className="absolute top-4 right-4 text-xs bg-gold/10 text-gold px-3 py-1 font-medium uppercase tracking-wide">
                {profile.tag}
              </span>

              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-6">
                <profile.icon className="w-7 h-7 text-gold" aria-hidden="true" />
              </div>

              <h3 className="font-display font-semibold text-onyx text-2xl mb-4">
                {profile.title}
              </h3>
              <p
                className="text-onyx/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: profile.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
