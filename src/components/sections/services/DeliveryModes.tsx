"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, UserCheck, Home, Plane } from "lucide-react";

const modes = [
  {
    icon: Building2,
    title: "In-Salon",
    description: "Visit us at our salon on University Road, Tanke, Ilorin.",
  },
  {
    icon: UserCheck,
    title: "Walk-In",
    description: "Walk in any time Monday–Saturday, 8am–8pm. No appointment needed.",
  },
  {
    icon: Home,
    title: "Home Service",
    description: "We come to you anywhere in Ilorin and surrounding areas.",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "We travel to your wedding venue or event location as needed.",
  },
];

export function DeliveryModes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-champagne/30" aria-labelledby="delivery-modes-heading">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-12">
          <motion.h2
            id="delivery-modes-heading"
            className="font-display font-semibold text-onyx"
            style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We Come to You — Or You Come to Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              className="bg-surface p-6 text-center hover:shadow-[0_20px_40px_rgba(14,14,14,0.05)] transition-shadow"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <mode.icon className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-onyx text-lg mb-2">
                {mode.title}
              </h3>
              <p className="text-onyx/60 text-sm leading-relaxed">
                {mode.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
