
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Star,
  Quote,
  MessageCircle,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";


const reviews = [
  {
    name: "Daniel M.",
    location: "Lusaka",
    initials: "DM",
    rating: 5,
    review:
      "The team handled our plumbing installation professionally. Everything was fitted neatly, and they took the time to explain the work before getting started. Very happy with the result.",
    service: "Plumbing Installation",
  },
  {
    name: "Grace N.",
    location: "Lusaka",
    initials: "GN",
    rating: 5,
    review:
      "I needed help with a leaking tap and some bathroom fittings. The communication was clear, and the work was completed neatly. A good experience overall.",
    service: "Plumbing Repairs",
  },
  {
    name: "Michael B.",
    location: "Ndola",
    initials: "MB",
    rating: 5,
    review:
      "We wanted to improve our bathroom and replace some old sanitary fittings. The finished work gave the space a much cleaner and more modern look.",
    service: "Bathroom Upgrade",
  },
  {
    name: "Ruth K.",
    location: "Kitwe",
    initials: "RK",
    rating: 5,
    review:
      "What I appreciated most was the attention to detail. The installation was neat, the area was left tidy, and everything looked properly finished.",
    service: "Sanitary Installation",
  },
  {
    name: "James P.",
    location: "Lusaka",
    initials: "JP",
    rating: 5,
    review:
      "We had an issue with our water pipes and needed someone to look into it. The problem was assessed, and the repair was handled with care.",
    service: "Pipe Repairs",
  },
  {
    name: "Patricia C.",
    location: "Livingstone",
    initials: "PC",
    rating: 5,
    review:
      "The bathroom fittings were installed neatly, and the overall finish was exactly the kind of clean look we wanted. Communication throughout was appreciated.",
    service: "Bathroom Fittings",
  },
  {
    name: "Robert T.",
    location: "Chingola",
    initials: "RT",
    rating: 5,
    review:
      "From discussing the requirements to completing the installation, the experience was straightforward. The work was done with good attention to detail.",
    service: "Plumbing Works",
  },
  {
    name: "Esther M.",
    location: "Lusaka",
    initials: "EM",
    rating: 5,
    review:
      "Our old bathroom needed some attention, especially the sanitary fittings. The new installation looks much better and makes the space feel refreshed.",
    service: "Sanitary Upgrade",
  },
  {
    name: "Peter S.",
    location: "Kitwe",
    initials: "PS",
    rating: 5,
    review:
      "I wanted a practical solution rather than unnecessary replacements. The work focused on what needed fixing, and the result was neat and functional.",
    service: "Maintenance & Repairs",
  },
  {
    name: "Linda W.",
    location: "Ndola",
    initials: "LW",
    rating: 5,
    review:
      "The team paid attention to the small details during the installation. The fittings were aligned properly, and the finished bathroom looks great.",
    service: "Bathroom Installation",
  },
  {
    name: "Samuel K.",
    location: "Lusaka",
    initials: "SK",
    rating: 5,
    review:
      "We needed plumbing work for our property, and the requirements were handled in a clear and organized way. Overall, a positive experience.",
    service: "Property Plumbing",
  },
  {
    name: "Mary D.",
    location: "Livingstone",
    initials: "MD",
    rating: 5,
    review:
      "A good experience from start to finish. The sanitary fittings look clean, the installation is neat, and the bathroom feels much more complete.",
    service: "Sanitary Fittings",
  },
];


function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={17}
          className={
            index < rating ? "fill-sun text-sun" : "text-white/20"
          }
        />
      ))}
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 70 : -70,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -70 : 70,
    opacity: 0,
  }),
};

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = window.setTimeout(nextSlide, 6500);
    return () => window.clearTimeout(timer);
  }, [active]);

  const review = reviews[active];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#071426] py-24 md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-royal/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sun/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">

        {/* Section Header */}
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MessageCircle size={14} className="text-sun" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Customer Experiences
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Good Work.
                <span className="block text-sun">
                  Lasting Impressions.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
                Every plumbing project deserves care, attention and dependable
                workmanship. Discover what customers say about their
                experience with ARTZANLEX.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/60">
              <ShieldCheck size={19} className="text-sun" />
              Customer Feedback
            </div>
          </div>
        </Reveal>

        {/* Featured Review Carousel */}
        <div className="relative mx-auto max-w-5xl">

          {/* Decorative Quote */}
          <div className="pointer-events-none absolute -left-5 -top-8 z-10 hidden text-sun/10 md:block">
            <Quote size={110} fill="currentColor" />
          </div>

          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-md sm:p-10 md:min-h-[350px] md:p-14">

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="flex h-full flex-col"
              >
                {/* Rating and Service */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Stars rating={review.rating} />

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                    {review.service}
                  </span>
                </div>

                {/* Review Text */}
                <div className="my-auto py-9">
                  <p className="max-w-4xl text-xl font-medium leading-relaxed text-white sm:text-2xl md:text-3xl">
                    "{review.review}"
                  </p>
                </div>

                {/* Customer Details */}
                <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-7">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-royal to-navy text-sm font-bold text-white">
                      {review.initials}
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        {review.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/45">
                        {review.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-white/50">
                    <ShieldCheck size={17} className="text-sun" />
                    Customer Testimonial
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation */}
          <div className="mt-8 flex items-center justify-between">

            {/* Pagination */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setDirection(index > active ? 1 : -1);
                    setActive(index);
                  }}
                  aria-label={`Go to review ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-10 bg-sun"
                      : "w-5 bg-white/25 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Slide Count and Arrows */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest text-white/60">
                0{active + 1}
                <span className="mx-2 text-white/30">/</span>
                0{reviews.length}
              </span>

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all hover:border-sun hover:bg-sun hover:text-navy"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all hover:border-sun hover:bg-sun hover:text-navy"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-royal/20 to-white/[0.03] p-7 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Had a great experience with us?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                We'd appreciate your feedback. Your experience helps us
                continue improving our service.
              </p>
            </div>

            <a
              href="https://wa.me/260974533514?text=Hello%20ARTZANLEX%2C%20I%20would%20like%20to%20share%20my%20feedback."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-sun px-7 py-4 text-sm font-bold text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Share Your Feedback
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
