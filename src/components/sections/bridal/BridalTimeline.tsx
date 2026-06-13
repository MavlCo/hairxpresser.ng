"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We discuss your vision, wedding style, attire, and any reference photos. We help you choose the perfect look for your big day.",
    timing: "2–4 weeks before",
  },
  {
    step: "02",
    title: "Bridal Hair Trial",
    description:
      "A full practice session at our salon where we create your chosen style, make adjustments, and document every detail.",
    timing: "1–2 weeks before",
  },
  {
    step: "03",
    title: "Wedding Day Styling",
    description:
      "We arrive at your location or you visit us — refreshed, focused, and ready to make your hair look as stunning as you feel.",
    timing: "Wedding day",
  },
  {
    step: "04",
    title: "Touch-Up & Sign-Off",
    description:
      "Final checks, touch-ups, and a signature finishing spray to keep your hair perfect from ceremony to reception and beyond.",
    timing: "Before you say 'I do'",
  },
];

export function BridalTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-24 bg-surface"
      aria-labelledby="bridal-timeline-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <motion.p
            className="font-flourish text-gold text-2xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The journey
          </motion.p>
          <motion.h2
            id="bridal-timeline-heading"
            className="font-display font-semibold text-onyx"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Bridal Experience
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gold/30" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`relative flex gap-8 lg:gap-0 mb-12 last:mb-0 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Step number (dot) */}
              <div className="relative z-10 shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-onyx font-bold text-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
                {step.step}
              </div>

              {/* Content */}
              <div
                className={`flex-1 lg:w-5/12 ${
                  i % 2 === 0
                    ? "lg:pr-16 lg:text-right"
                    : "lg:pl-16 lg:ml-auto"
                }`}
              >
                <span className="text-xs text-gold font-medium uppercase tracking-widest">
                  {step.timing}
                </span>
                <h3 className="font-display font-semibold text-onyx text-xl mt-1 mb-2">
                  {step.title}
                </h3>
                <p
                  className="text-onyx/60 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
