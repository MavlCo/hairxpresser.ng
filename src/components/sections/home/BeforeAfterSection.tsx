"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const updateSlider = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSliderPos(percent);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    },
    [isDragging, updateSlider]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updateSlider(e.touches[0].clientX);
    },
    [updateSlider]
  );

  return (
    <section
      className="py-24 bg-ivory"
      aria-labelledby="before-after-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <motion.p
            className="font-flourish text-gold text-2xl mb-2"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transformation
          </motion.p>
          <motion.h2
            id="before-after-heading"
            className="font-display font-semibold text-onyx mb-4"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Wig Revamping — See the Transformation
          </motion.h2>
          <motion.p
            className="text-onyx/60 max-w-xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Drag the slider to reveal the before & after. Watch how we bring
            wigs back to life.
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Slider container */}
          <div
            ref={containerRef}
            className="relative h-[400px] md:h-[550px] overflow-hidden cursor-ew-resize select-none"
            role="img"
            aria-label="Before and after wig revamping comparison slider"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After image — full width, sits underneath */}
            <div className="absolute inset-0">
              <Image
                src="/images/wig-auburn-bob-bangs.jpeg"
                alt="After: auburn bob with bangs wig revamped at Hairxpresser.NG"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute bottom-6 right-6 bg-gold text-onyx text-xs font-semibold uppercase tracking-widest px-3 py-1.5">
                After
              </div>
            </div>

            {/* Before image — clipped to the left of the slider handle */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src="/images/wig-auburn-textured-bob.jpeg"
                alt="Before: auburn textured bob wig before revamp"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute bottom-6 left-6 bg-onyx/80 text-ivory text-xs font-semibold uppercase tracking-widest px-3 py-1.5">
                Before
              </div>
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gold z-10"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Circular handle */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold border-2 border-white shadow-lg flex items-center justify-center cursor-ew-resize"
                whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : isDragging
                    ? { scale: 1.15 }
                    : { scale: 1 }
                }
                aria-hidden="true"
              >
                <div className="flex items-center gap-0.5">
                  <span className="text-onyx text-xs font-bold">‹</span>
                  <span className="text-onyx text-xs font-bold">›</span>
                </div>
              </motion.div>
            </div>
          </div>

          <p className="text-center text-onyx/50 text-sm mt-4">
            ← Drag to compare →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
