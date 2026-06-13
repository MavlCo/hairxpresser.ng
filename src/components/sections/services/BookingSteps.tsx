"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Message Us",
    description:
      "Send us a WhatsApp message with your desired service, preferred date, and any reference photos.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Confirm Your Booking",
    description:
      "We'll confirm your appointment date, time, and share everything you need to know before arrival.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Get Styled",
    description:
      "Show up (or we come to you) and enjoy a premium styling experience tailored entirely to you.",
  },
];

export function BookingSteps() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-ivory" aria-labelledby="booking-steps-heading">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-14">
          <motion.h2
            id="booking-steps-heading"
            className="font-display font-semibold text-onyx"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How to Book
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gold/30" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="text-center relative"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold mb-6 mx-auto">
                <step.icon
                  className="w-8 h-8 text-onyx"
                  aria-hidden="true"
                />
                <span className="absolute -top-2 -right-2 text-xs font-bold text-onyx bg-ivory border border-gold w-6 h-6 rounded-full flex items-center justify-center">
                  {step.number.slice(1)}
                </span>
              </div>
              <h3 className="font-display font-semibold text-onyx text-xl mb-3">
                {step.title}
              </h3>
              <p
                className="text-onyx/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
