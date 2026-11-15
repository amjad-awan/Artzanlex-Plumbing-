"use client";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { WA } from "@/lib";
export default function WhatsAppButton({
  label = "Chat on WhatsApp",
  variant = "sun",
  arrow = false,
}: {
  label?: string;
  variant?: "sun" | "white";
  arrow?: boolean;
}) {
  const c = variant === "sun" ? "bg-sun text-navy" : "bg-white text-navy";
  return (
    <motion.a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg ${c}`}
    >
      <MessageCircle size={18} aria-hidden />
      {label}
      {arrow && <ArrowUpRight size={16} aria-hidden />}
    </motion.a>
  );
}