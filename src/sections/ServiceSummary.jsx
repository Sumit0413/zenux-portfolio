import React from "react";

const TESTIMONIALS = [
  {
    initials: "SM",
    name: "Sanya Mehta",
    role: "CEO",
    quote: "From the first call to the final delivery, the process was seamless. The design was bold, modern, and exactly what we envisioned. Truly exceptional work.",
    color: "#FF6B35",
  },
  {
    initials: "RK",
    name: "Rishi Kumar",
    role: "Founder",
    quote: "Arkeno doesn't just design websites — they craft experiences. The attention to detail, the typography, the animations — everything was on another level.",
    color: "#2EC4B6",
  },
  {
    initials: "AP",
    name: "Anika Patel",
    role: "Head of Marketing",
    quote: "Fast turnaround, zero compromises on quality. Our website went from average to award-worthy. If you need a serious agency, this is it.",
    color: "#FF3366",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-5 py-10 md:py-24 md:px-4"
      style={{ background: "#0F172A" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 mb-16">
          <div className="reveal">
            <span
              className="text-orange text-sm uppercase tracking-widest"
              style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
            >
              Social Proof
            </span>
            <h2
              id="testimonials-heading"
              className="heading-xl mt-2 text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              WHAT THEY
              <br />
              <span style={{ WebkitTextStroke: "3px white", color: "transparent", fontFamily: "Cabinet Grotesk, sans-serif", fontWeight: 900, textTransform: "uppercase" }}>
                SAY
              </span>
            </h2>
          </div>

          {/* Rating Card */}
          <div
            className="nb-card bg-orange p-6 text-center flex-shrink-0 self-start reveal"
            style={{ transform: "rotate(-5deg)", minWidth: "140px", boxShadow: "8px 8px 0px 0px white" }}
          >
            <div
              className="heading-xl text-white"
              style={{ fontSize: "3.5rem" }}
            >
              5.0
            </div>
            <div className="text-white/80 text-2xl mt-1">★★★★★</div>
            <div
              className="text-white text-xs uppercase mt-2"
              style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
            >
              Client Rating
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`nb-card bg-white p-8 flex flex-col gap-6 reveal ${
                i === 2 ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:w-full" : ""
              }`}
              style={{ animationDelay: `${i * 120}ms`, boxShadow: `8px 8px 0px 0px ${t.color}` }}
            >
              {/* Quote */}
              <blockquote
                className="slab-text text-navy"
                style={{ fontSize: "1rem", lineHeight: 1.7, fontStyle: "italic" }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center nb-card flex-shrink-0"
                  style={{ background: t.color }}
                >
                  <span
                    className="text-white font-black text-sm"
                    style={{ fontFamily: "Cabinet Grotesk, sans-serif" }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div
                    className="font-black text-navy text-sm"
                    style={{ fontFamily: "Cabinet Grotesk, sans-serif", fontWeight: 900 }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-navy/50 text-xs"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
