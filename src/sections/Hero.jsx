import React, { useEffect, useRef } from "react";

const STATS = [
  { value: "150+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "4yrs", label: "Experience" },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Trigger reveal on mount
    const items = el.querySelectorAll(".reveal");
    const delays = [0, 100, 200, 350, 500];
    items.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, delays[i] || i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-grid min-h-[90vh] flex items-center px-5 py-10 md:px-4 md:pt-6 md:pb-20 overflow-x-hidden"
      style={{ background: "#F8FAFC" }}
      aria-label="Hero section"
    >
      {/* Floating background shape */}
      <div
        className="float-anim absolute top-20 right-10 w-32 h-32 bg-pink rounded-full opacity-20 pointer-events-none"
        style={{ border: "4px solid #0F172A" }}
      />
      <div
        className="float-anim absolute bottom-20 left-10 w-20 h-20 bg-teal opacity-30 pointer-events-none"
        style={{ border: "4px solid #0F172A", animationDelay: "-4s" }}
      />

      <div className="max-w-6xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="reveal">
            <span
              className="inline-flex items-center gap-2 nb-card bg-orange text-white px-4 py-2 text-sm"
              style={{ fontFamily: "Cabinet Grotesk, sans-serif", fontWeight: 900, textTransform: "uppercase" }}
            >
              <span className="w-2 h-2 bg-white rounded-full inline-block" />
              Creative Agency — Est. 2025
            </span>
          </div>

          {/* Giant Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="reveal heading-xl text-navy" style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}>
              WE BUILD
            </h1>
            <span
              className="reveal heading-stroke block"
              style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
            >
              DIGITAL
            </span>
            <span
              className="reveal heading-xl text-orange block"
              style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
            >
              LEGENDS.
            </span>
          </div>

          {/* Sub paragraph */}
          <p
            className="reveal slab-text text-navy/70 text-xl leading-relaxed max-w-md"
          >
            Bold brands. Unforgettable experiences. We are Arkeno — where design meets disruption.
          </p>

          {/* CTA Row */}
          <div className="reveal flex flex-col sm:flex-row flex-wrap gap-4 items-center w-full">
            <a
              href="#portfolio"
              className="nb-btn bg-navy text-white px-8 py-4 text-base md:text-lg w-full sm:w-auto text-center justify-center flex"
            >
              View Our Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="nb-btn bg-bg text-navy px-8 py-4 text-base md:text-lg w-full sm:w-auto text-center justify-center"
              style={{ background: "#F8FAFC" }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right: Visual Container */}
        <div className="relative flex justify-center items-center">
          {/* Main circular container */}
          <div
            className="relative nb-card bg-teal rounded-full flex items-center justify-center float-anim"
            style={{
              width: "clamp(280px, 40vw, 480px)",
              height: "clamp(280px, 40vw, 480px)",
            }}
          >
            {/* Inner graphic */}
            <div className="text-center select-none">
              <div
                className="heading-xl text-white"
                style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 1 }}
              >
                Ak
              </div>
              <div
                className="text-white/80 mt-2"
                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em" }}
              >
                Studio
              </div>
            </div>

            {/* Decorative rings */}
            <div
              className="absolute inset-[-12px] rounded-full pointer-events-none opacity-30"
              style={{ border: "2px dashed #0F172A" }}
            />
          </div>

          {/* Stat badges */}
          {STATS.map((stat, i) => {
            const positions = [
              { top: "5%", right: "-15%", rotate: "12deg" },
              { bottom: "15%", right: "-10%", rotate: "-8deg" },
              { bottom: "5%", left: "-10%", rotate: "5deg" },
            ];
            const bgColors = ["#FF6B35", "#FF3366", "#2EC4B6"];
            const textColors = ["#0F172A", "white", "#0F172A"];
            return (
              <div
                key={stat.label}
                className="nb-card absolute px-4 py-3 text-center"
                style={{
                  background: bgColors[i],
                  ...positions[i],
                  transform: `rotate(${positions[i].rotate})`,
                  minWidth: "100px",
                  zIndex: 10,
                }}
              >
                <div
                  className="heading-xl"
                  style={{ fontSize: "1.8rem", color: textColors[i] }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    color: textColors[i],
                    opacity: 0.8,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
