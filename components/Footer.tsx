import { PHONE_DISPLAY } from "@/lib";


const Footer =()=>{
    return <footer className="m-2 overflow-hidden rounded-[2rem] bg-white text-navy shadow-sm md:m-3">
  <div className="px-7 py-12 md:px-14 md:py-16">
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">

      {/* Brand */}
      <div className="max-w-md">
        <a
          href="/"
          aria-label="ARTZANLEX Home"
          className="inline-flex items-center text-3xl font-black tracking-tight"
        >
          ARTZAN<span className="text-royal">LEX</span>
          <span className="ml-2 h-2 w-2 rounded-full bg-sun" />
        </a>

        <p className="mt-3 text-sm font-semibold tracking-wide text-navy/80">
          Plumbing and Sanitary Works
        </p>

        <p className="mt-4 max-w-sm text-sm leading-7 text-navy/60">
          Delivering practical plumbing, installation, and sanitary solutions
          with a focus on quality workmanship and dependable service.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy/[0.04] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs font-semibold text-navy/70">
            Ready to assist with your project
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy/40">
          Explore
        </h3>

        <nav
          aria-label="Footer navigation"
          className="mt-6 flex flex-col items-start gap-4 text-sm font-semibold"
        >
          {[
            ["Home", "/"],
            ["Our Services", "#services"],
            ["Our Projects", "#gallery"],
            ["Customer Reviews", "#reviews"],
            ["Contact Us", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-navy/70 transition-all duration-200 hover:translate-x-1 hover:text-royal"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy/40">
          Get in Touch
        </h3>

        <h4 className="mt-6 text-xl font-bold leading-snug">
          Need a plumbing expert?
        </h4>

        <p className="mt-3 text-sm leading-7 text-navy/60">
          Let's discuss your plumbing or sanitary requirements and find the
          right solution for your property.
        </p>

        <a
          href="https://wa.me/260974533514"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-royal hover:shadow-lg"
        >
          Chat on WhatsApp
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href="https://wa.me/260974533514"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-sm font-bold text-navy/70 transition-colors hover:text-royal"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>

    {/* Bottom section */}
    <div className="mt-14 border-t border-navy/10 pt-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-navy/50">
          © {new Date().getFullYear()} ARTZANLEX Plumbing and Sanitary Works.
          All rights reserved.
        </p>

        <p className="text-sm font-extrabold tracking-wide">
          We Fix It Right<span className="text-royal">!</span>
        </p>
      </div>
    </div>
  </div>
</footer>

}

export default Footer