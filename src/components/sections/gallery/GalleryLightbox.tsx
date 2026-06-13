"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

type LightboxProps = {
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function GalleryLightbox({
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const shouldReduceMotion = useReducedMotion();
  const isOpen = currentIndex !== null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const currentImage =
    currentIndex !== null ? GALLERY_IMAGES[currentIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? {} : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-onyx/95 backdrop-blur-sm flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            className="relative max-w-5xl max-h-[85vh] w-full h-full mx-8"
            initial={shouldReduceMotion ? {} : { scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={shouldReduceMotion ? {} : { scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-ivory/70 text-sm">{currentImage.alt}</p>
            <p className="text-gold/70 text-xs mt-1">
              {currentImage.category} · {(currentIndex ?? 0) + 1} /{" "}
              {GALLERY_IMAGES.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
