import React from "react";

const SERVICES = [
  {
    icon: "⚡",
    iconColor: "#FF6B35",
    bg: "#FFF5F0",
    title: "Web Development",
    desc: "Blazing-fast, pixel-perfect sites built with modern frameworks. Performance is non-negotiable.",
    tag: "React · Next.js · Vite",
  },
  {
    icon: "✦",
    iconColor: "#2EC4B6",
    bg: "#F0FFFE",
    title: "Brand Identity",
    desc: "Logos, palettes, and type systems that make your brand impossible to ignore in any room.",
    tag: "Logo · Typography · Color",
  },
  {
    icon: "▲",
    iconColor: "#FF3366",
    bg: "#FFF0F4",
    title: "Motion & Animation",
    desc: "Silky smooth micro-interactions and scroll-driven experiences that feel alive and intentional.",
    tag: "GSAP · Framer · CSS",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-grid px-5 py-10 md:py-24 md:px-4"
      style={{ background: "#F8FAFC" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <span
              className="text-orange text-sm uppercase tracking-widest"
              style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
            >
              What we do
            </span>
            <h2
              id="services-heading"
              className="heading-xl mt-2"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#0F172A" }}
            >
              OUR
              <br />
              <span className="heading-stroke">SERVICES</span>
            </h2>
          </div>
          <p className="slab-text text-navy/60 text-lg max-w-sm">
            Every service we offer is crafted to move the needle — fast.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`nb-card flex flex-col gap-6 p-8 reveal ${
                i === 2 ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:w-full" : ""
              }`}
              style={{ background: svc.bg, animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 flex items-center justify-center nb-card"
                style={{ background: svc.iconColor, fontSize: "2.5rem" }}
              >
                {svc.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className="heading-xl"
                  style={{ fontSize: "1.75rem", color: "#0F172A" }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{ fontFamily: "Satoshi, sans-serif", fontSize: "1rem", color: "#0F172A", opacity: 0.7, lineHeight: 1.6 }}
                >
                  {svc.desc}
                </p>
              </div>

              {/* Tag */}
              <div
                className="nb-card inline-flex px-3 py-1 text-xs self-start"
                style={{ background: "#0F172A", color: "white", fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
              >
                {svc.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
