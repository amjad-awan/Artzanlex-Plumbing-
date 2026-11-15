
"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2200&q=90",
    eyebrow: "Clean Water | Safe Systems | Better Living",
    title: "Your Trusted",
    highlight: "Plumbing &",
    ending: "Sanitary Expert.",
    description:
      "ARTZANLEX Plumbing and Sanitary Works delivers dependable plumbing, professional installations and quality sanitary solutions.",
    slogan: "We Fix It Right!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=2200&q=90",
    eyebrow: "Modern Bathrooms | Quality Fittings | Expert Care",
    title: "Transform Your",
    highlight: "Bathroom",
    ending: "With Confidence.",
    description:
      "From stylish bathroom fittings to complete sanitary installations, we bring quality and precision to every detail.",
    slogan: "Quality You Can Trust!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=2200&q=90",
    eyebrow: "Professional Service | Reliable Solutions",
    title: "Complete",
    highlight: "Plumbing",
    ending: "Solutions.",
    description:
      "Reliable plumbing repairs, pipe installations and maintenance services designed to keep your water systems running smoothly.",
    slogan: "We Fix It Right!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2200&q=90",
    eyebrow: "Premium Sanitary Ware | Better Living",
    title: "Better Spaces",
    highlight: "Begin With",
    ending: "Quality.",
    description:
      "Discover professional sanitary ware installations and carefully finished bathroom solutions for your home.",
    slogan: "Built Around Quality!",
  },
];

const contentVariants = {
  initial: {
    opacity: 0,
    y: 22,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

export default function Hero() {
  const [active, setActive] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay resets whenever the active slide changes.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      nextSlide();
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [active, nextSlide]);

  const current = slides[active];

  return (
    <section className="group relative m-2 min-h-[700px] overflow-hidden rounded-[2rem] bg-navy md:m-3 md:min-h-[780px]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              src={current.image}
              alt="ARTZANLEX plumbing and sanitary work"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "linear" }}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />

      {/* Decorative Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-royal/30 blur-[100px]"
      />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[700px] max-w-7xl flex-col justify-center px-6 pb-28 pt-32 md:min-h-[780px] md:px-10">

        {/* One animation wrapper for ALL changing content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-4xl"
          >

            {/* Eyebrow */}
            <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-sun" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 md:text-xs">
                {current.eyebrow}
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {current.title}

              <span className="block text-sun">
                {current.highlight}
              </span>

              <span className="block">
                {current.ending}
              </span>
            </h1>

            {/* Description and Slogan */}
            <div className="mt-7 max-w-xl">
              <p className="text-base leading-8 text-white/75 md:text-lg">
                {current.description}
              </p>

              <p className="mt-3 text-base font-bold text-sun md:text-lg">
                {current.slogan}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <WhatsAppButton label="Get a Free Quote" />

              <a
                href="#services"
                className="group/link inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sun hover:bg-sun hover:text-navy"
              >
                Explore Services

                <span className="transition-transform duration-300 group-hover/link:translate-y-1">
                  ↓
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-7">
              {[
                ["Professional", "Quality Workmanship"],
                ["Reliable", "Dependable Solutions"],
                ["Complete Care", "Plumbing & Sanitary"],
              ].map(([title, subtitle]) => (
                <div key={title}>
                  <p className="text-xs font-bold uppercase tracking-widest text-sun">
                    {title}
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 md:bottom-10 md:right-12">

        {/* Slide Number */}
        <span className="mr-2 text-xs font-bold tracking-widest text-white">
          0{active + 1}
          <span className="mx-2 text-white/40">/</span>
          0{slides.length}
        </span>

        {/* Previous */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-sun hover:text-navy"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-sun hover:text-navy"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-7 z-20 flex items-center gap-2 md:left-12">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={active === i ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === i
                ? "w-12 bg-sun"
                : "w-5 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
