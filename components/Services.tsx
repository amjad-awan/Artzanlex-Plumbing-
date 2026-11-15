
import {
  Wrench,
  Hammer,
  Cable,
  Bath,
  Container,
  Waves,
  ShowerHead,
  Droplets,
} from "lucide-react";

import Reveal from "./Reveal";

const S = [
  {
    icon: Droplets,
    title: "Plumbing Installations",
    description: "Complete supply and fixture installations done to code.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=85",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Fast fixes for leaks, blockages and failing fittings.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85",
  },
  {
    icon: Cable,
    title: "Pipe Fitting & Replacements",
    description: "Durable pipework fitted and replaced with care.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=85",
  },
  {
    icon: Bath,
    title: "Bathroom & Kitchen Fittings",
    description: "Taps, basins, showers and sinks fitted cleanly.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=85",
  },
  {
    icon: Container,
    title: "Water Tank Installation & Repair",
    description: "Reliable storage set up and kept running.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=85",
  },
  {
    icon: Waves,
    title: "Drainage Solutions",
    description: "Clear, well-graded drainage that keeps flowing.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=85",
  },
  {
    icon: ShowerHead,
    title: "Sanitary Ware Installation",
    description: "Toilets, basins and bidets installed precisely.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85",
  },
  {
    icon: Hammer,
    title: "General Plumbing Works",
    description: "Whatever the job, we fix it right.",
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=85",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-5 py-24 md:px-10"
    >
      <Reveal>
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sun">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            Professional plumbing and sanitary solutions designed
            to keep your home and business running smoothly.
          </p>
        </div>
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {S.map(({ icon: I, title, description, image }, i) => (
          <li key={title}>
            <Reveal delay={(i % 4) * 0.08} className="h-full">
              <article className="group relative h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-navy">
                {/* Background Image */}
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/10 transition-colors duration-500 group-hover:from-navy/95" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-sun text-navy transition-transform duration-300 group-hover:-translate-y-2">
                    <I size={24} aria-hidden />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {description}
                  </p>

                  <div className="mt-5 h-1 w-10 rounded-full bg-sun transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
