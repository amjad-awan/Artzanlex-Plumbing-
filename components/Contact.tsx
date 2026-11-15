
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Wrench,
} from "lucide-react";
import { PHONE_DISPLAY, WA } from "@/lib";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "General Plumbing",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hello ARTZANLEX,

I'd like to enquire about your services.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}

Project Details:
${form.message}

Please get back to me. Thank you.`;

    const separator = WA.includes("?") ? "&" : "?";
    const whatsappUrl = `${WA}${separator}text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#f5f7fa] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-royal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-royal">
            <span className="h-2 w-2 rounded-full bg-sun" />
            Let's Talk About Your Project
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Need a Plumbing
            <span className="text-royal"> Expert?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-navy/60 md:text-base">
            Whether it's a repair, installation, or a new plumbing project,
            ARTZANLEX is ready to hear from you. Tell us what you need and
            let's discuss the next steps.
          </p>
        </div>

        {/* Main Contact Layout */}
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(15,35,70,0.08)] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Contact Panel */}
          <div className="relative overflow-hidden bg-navy p-8 text-white sm:p-10 lg:p-12">

            {/* Decorative Elements */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-white/[0.04]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[35px] border-white/[0.04]" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sun">
                Contact ARTZANLEX
              </span>

              <h3 className="mt-5 max-w-sm text-3xl font-extrabold leading-tight sm:text-4xl">
                Let's get your plumbing project moving.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                Have a question or need assistance? Reach out directly.
                We're happy to discuss your requirements.
              </p>

              {/* Contact Details */}
              <div className="mt-12 space-y-7">

                {/* Phone */}
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}`}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sun transition-colors group-hover:bg-sun group-hover:text-navy">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white/45">
                      Call Us
                    </p>
                    <p className="mt-1 font-bold transition-colors group-hover:text-sun">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sun transition-colors group-hover:bg-sun group-hover:text-navy">
                    <MessageCircle size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white/45">
                      WhatsApp Enquiries
                    </p>
                    <p className="mt-1 font-bold transition-colors group-hover:text-sun">
                      Chat With Our Team
                    </p>
                  </div>
                </a>

                {/* Service Type */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sun">
                    <Wrench size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white/45">
                      What We Do
                    </p>
                    <p className="mt-1 font-bold">
                      Plumbing & Sanitary Works
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-sun px-6 py-3.5 text-sm font-bold text-navy transition-all hover:-translate-y-1 hover:bg-white"
              >
                <MessageCircle size={18} />
                Start a WhatsApp Chat
                <ArrowUpRight size={17} />
              </a>

              {/* Brand Statement */}
              <div className="mt-14 border-t border-white/15 pt-7">
                <p className="text-sm font-bold tracking-wide">
                  ARTZANLEX
                  <span className="text-sun">.</span>
                </p>
                <p className="mt-2 text-xs tracking-wide text-white/50">
                  Clean Water | Safe Systems | Better Living
                </p>
              </div>
            </div>
          </div>

          {/* Right Enquiry Form */}
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-royal">
                Send An Enquiry
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
                Tell us what you need
              </h3>

              <p className="mt-3 text-sm leading-6 text-navy/55">
                Share a few details about your requirements. Your enquiry
                will be sent directly to us through WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name and Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-bold text-navy"
                  >
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full rounded-xl border border-navy/10 bg-[#f8f9fb] px-4 py-3.5 text-sm text-navy outline-none transition-all placeholder:text-navy/35 focus:border-royal focus:bg-white focus:ring-4 focus:ring-royal/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs font-bold text-navy"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Your contact number"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full rounded-xl border border-navy/10 bg-[#f8f9fb] px-4 py-3.5 text-sm text-navy outline-none transition-all placeholder:text-navy/35 focus:border-royal focus:bg-white focus:ring-4 focus:ring-royal/10"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-xs font-bold text-navy"
                >
                  Service Required *
                </label>

                <select
                  id="contact-service"
                  required
                  value={form.service}
                  onChange={(e) => updateField("service", e.target.value)}
                  className="w-full rounded-xl border border-navy/10 bg-[#f8f9fb] px-4 py-3.5 text-sm text-navy outline-none transition-all focus:border-royal focus:bg-white focus:ring-4 focus:ring-royal/10"
                >
                  <option>General Plumbing</option>
                  <option>Plumbing Installation</option>
                  <option>Plumbing Repairs</option>
                  <option>Pipe Fitting</option>
                  <option>Drainage Solutions</option>
                  <option>Water Tank Installation</option>
                  <option>Sanitary Installation</option>
                  <option>Other Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-bold text-navy"
                >
                  Project Details *
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Describe the plumbing work or assistance you need..."
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full resize-none rounded-xl border border-navy/10 bg-[#f8f9fb] px-4 py-3.5 text-sm text-navy outline-none transition-all placeholder:text-navy/35 focus:border-royal focus:bg-white focus:ring-4 focus:ring-royal/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-navy px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal hover:shadow-lg"
              >
                Send Enquiry via WhatsApp
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-navy/45">
                Your enquiry will open in WhatsApp for you to review and send.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <CheckCircle2 size={17} className="text-royal" />
          <p className="text-xs font-medium text-navy/55">
            Clear communication. Practical solutions. Quality workmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
