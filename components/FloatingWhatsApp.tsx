
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA } from "@/lib";

export default function FloatingWhatsApp() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ARTZANLEX on WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.94 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] md:bottom-8 md:right-8"
    >
      {/* Expanding Ripple Waves */}
      {!reduceMotion &&
        [0, 1.5, 3].map((delay) => (
          <motion.span
            key={delay}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#25D366]"
            initial={{ scale: 1, opacity: 0.65 }}
            animate={{
              scale: [1, 1.7, 2.2],
              opacity: [0.6, 0.25, 0],
            }}
            transition={{
              duration: 4.5,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Gentle Ambient Glow */}
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 rounded-full bg-[#25D366]/30 blur-xl"
          animate={{
            scale: [0.9, 1.25, 0.9],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* WhatsApp Icon */}
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -2, 0], rotate: [0, -5, 0] }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MessageCircle size={27} strokeWidth={2.2} />
      </motion.span>
    </motion.a>
  );
}
