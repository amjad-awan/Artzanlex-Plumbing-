
"use client";

import Image from "next/image";
import { useState } from "react";
import { WA } from "@/lib";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  ["Services", "#services"],
  ["Our Projects", "#gallery"],
  ["Reviews", "#reviews"],
  ["Contact Us", "#contact"],
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl px-4 py-3 sm:px-6 md:px-10 md:py-5">
      <div className="flex items-center justify-between gap-3">

        {/* Brand Logo */}
        <a
          href="/"
          aria-label="ARTZANLEX Home"
          className="relative h-16 w-48 shrink-0 sm:h-20 sm:w-60 md:h-24 md:w-80"
        >
          <Image
            src="/images/artzanlex_main_logo_white_gold_contrast.png"
            alt="ARTZANLEX Plumbing and Sanitary Works"
            fill
            priority
            sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 320px"
            className="object-contain object-left"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 rounded-full bg-white px-8 py-3 text-sm font-medium text-navy shadow-sm md:flex"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-royal"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Contact */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg md:inline-flex"
        >
          Contact Us
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sun px-4 py-2.5 text-xs font-bold text-navy transition-colors hover:bg-white"
          >
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white text-navy shadow-sm transition-colors hover:bg-sun"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mt-3 rounded-2xl border border-white/20 bg-white p-5 text-navy shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-navy/5 hover:text-royal"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-royal"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
