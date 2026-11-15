
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Droplets, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-royal/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Content */}
          <Reveal>
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                <Droplets size={15} className="text-sun" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Plumbing & Sanitary Solutions
                </span>
              </div>

              <h2 className="text-4xl font-extrabold uppercase leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
                Plumbing.
                <span className="block text-sun">Sanitary.</span>
                <span className="block">Repairs.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                From new installations and bathroom fittings to pipe repairs
                and maintenance, ARTZANLEX provides practical plumbing
                solutions for homes and businesses.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <WhatsAppButton
                  variant="white"
                  label="Make an Enquiry"
                  arrow
                />

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-sun"
                >
                  Explore Our Services
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <p className="mt-8 text-sm font-medium italic text-sun">
                We Fix It Right!
              </p>
            </div>
          </Reveal>

          {/* Visual Panel */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1000&q=85"
                  alt="Modern bathroom sanitary fittings"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-sun text-navy">
                      <Wrench size={23} />
                    </div>

                    <div>
                      <p className="font-bold text-white">
                        Quality in Every Detail
                      </p>
                      <p className="mt-1 text-xs text-white/70">
                        Clean Water. Safe Systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 top-12 rounded-2xl border border-white/10 bg-white p-4 shadow-2xl md:-left-10"
              >
                <Droplets size={25} className="text-royal" />
                <p className="mt-2 text-xs font-extrabold text-navy">
                  Better Living
                </p>
              </motion.div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
