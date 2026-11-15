
"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Wrench,
  ThumbsUp,
} from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Dependable plumbing and sanitary solutions with attention to detail from start to finish.",
  },
  {
    icon: Clock3,
    title: "Prompt Response",
    description:
      "We understand the importance of working water systems and aim to respond to service requests promptly.",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    description:
      "Careful installations, practical repairs and professional finishing you can feel confident about.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "Clear communication, respectful service and solutions focused on your needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-royal">
              The ARTZANLEX Difference
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy md:text-5xl">
              Service You Can Trust.
              <span className="block text-royal">
                Quality You Can See.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
              From everyday plumbing repairs to sanitary installations,
              we focus on dependable service and quality results for
              every project.
            </p>
          </div>
        </Reveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal key={benefit.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="group h-full rounded-2xl border border-gray-100 bg-gray-50 p-7 transition-colors duration-300 hover:border-royal/20 hover:bg-white hover:shadow-xl hover:shadow-navy/5"
                >
                  {/* Icon */}
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-royal/10 text-royal transition-colors duration-300 group-hover:bg-royal group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>

                  {/* Accent */}
                  <div className="mt-7 h-1 w-10 rounded-full bg-sun transition-all duration-300 group-hover:w-16" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy p-7 md:flex-row md:items-center md:p-9">
            <div>
              <p className="text-xl font-bold text-white md:text-2xl">
                Need a plumbing or sanitary solution?
              </p>

              <p className="mt-2 text-sm text-white/65">
                Let's discuss your project and how we can help.
              </p>
            </div>

            <a
              href="https://wa.me/260974533514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-sun px-7 py-4 text-sm font-bold text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Talk to Our Team
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
