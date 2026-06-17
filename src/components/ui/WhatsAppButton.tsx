"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
        className="group relative"
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-onyx text-ivory text-sm font-medium px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Shop Wigs
        </span>

        {/* Pulsing ring */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <motion.a
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop Wigs on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors duration-300"
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.08, 1] }
          }
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-7 h-7" strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </div>
  );
}
