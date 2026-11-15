
import Reveal from "./Reveal";

const GALLERY = [
  {
    title: "Modern Bathroom Installation",
    category: "Bathroom Fittings",
    description:
      "Beautifully finished bathroom spaces with carefully installed fixtures and premium sanitary fittings.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
  },
  {
    title: "Professional Plumbing",
    category: "Plumbing Works",
    description:
      "Reliable plumbing solutions, professional pipework and installations designed for long-term performance.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=85",
  },
  {
    title: "Luxury Shower Design",
    category: "Sanitary Installation",
    description:
      "Modern shower installations combining functionality, comfort and elegant finishing.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=85",
  },
  {
    title: "Contemporary Bathroom",
    category: "Bathroom Renovation",
    description:
      "Thoughtfully designed bathroom spaces with attention to every fitting and finishing detail.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85",
  },
  {
    title: "Professional Pipe Fitting",
    category: "Pipe Installation",
    description:
      "Durable pipe installations and replacement solutions built around reliable water systems.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=85",
  },
  {
    title: "Premium Bathroom Design",
    category: "Sanitary Ware",
    description:
      "Quality sanitary ware installations that bring practicality and a refined look to every space.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="m-2 overflow-hidden rounded-[2rem] bg-white px-6 py-20 text-navy md:m-3 md:px-16 md:py-28"
    >
      {/* Section Heading */}
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-royal">
              Our Portfolio
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Our Work<span className="text-royal">.</span>
            </h2>

            <p className="mt-5 max-w-lg leading-relaxed text-navy/60">
              Explore our plumbing, bathroom and sanitary
              installations. Quality workmanship in every detail.
            </p>
          </div>

          <div className="text-sm font-semibold uppercase tracking-widest text-navy/40">
            Quality · Precision · Reliability
          </div>
        </div>
      </Reveal>

      {/* Zig Zag Projects */}
      <div className="mt-20 space-y-20 md:space-y-32">
        {GALLERY.map((item, i) => {
          const reverse = i % 2 !== 0;

          return (
            <div
              key={item.title}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Project Image */}
              <Reveal
                delay={0.1}
                className="w-full"
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 md:aspect-[5/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-navy/10 transition-colors duration-500 group-hover:bg-transparent" />

                  <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/20 text-sm font-bold text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:bg-sun group-hover:text-navy">
                    0{i + 1}
                  </span>

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    ARTZANLEX
                  </div>
                </div>
              </Reveal>

              {/* Project Details */}
              <Reveal
                delay={0.2}
                className="w-full"
              >
                <div className="relative px-2 py-5 md:px-6 md:py-10">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-royal">
                    {item.category}
                  </span>

                  <h3 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                    {item.title}
                    <span className="text-royal">.</span>
                  </h3>

                  <p className="mt-6 max-w-md text-base leading-8 text-navy/60">
                    {item.description}
                  </p>

                  <div className="mt-8 h-[2px] w-16 bg-sun transition-all duration-500 hover:w-28" />

                  <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                    <span className="h-2 w-2 rounded-full bg-royal" />
                    Clean Work. Reliable Results.
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.2}>
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-navy/10 pt-10 sm:flex-row">
          <div>
            <h3 className="text-2xl font-bold">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm text-navy/50">
              Let's discuss your plumbing requirements.
            </p>
          </div>

          <a
            href="https://wa.me/260974533514"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-royal hover:shadow-xl hover:shadow-royal/20"
          >
            Discuss Your Project
            <span className="text-sun">↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
