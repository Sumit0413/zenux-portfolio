import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep dive into your brand, audience, and competitive landscape to uncover real opportunities.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Craft bold visual concepts and interactive prototypes with rapid, iterative feedback loops.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Engineer pixel-perfect, performant code with modern frameworks and zero compromise.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Ship fast, monitor closely, iterate intelligently. We don't just deliver — we make it land.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-grid px-5 py-10 md:py-24 md:px-4"
      style={{ background: "#F8FAFC" }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal">
          <span
            className="text-orange text-sm uppercase tracking-widest"
            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
          >
            How we work
          </span>
          <h2
            id="process-heading"
            className="heading-xl mt-2"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#0F172A" }}
          >
            THE
            <br />
            <span className="heading-stroke">PROCESS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Steps */}
          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="process-step flex gap-6 items-start pb-8 reveal group cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Number */}
                <div
                  className="process-number flex-shrink-0"
                  style={{ minWidth: "5rem" }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div className="pt-4 border-t-4 border-navy flex-1">
                  <h3
                    className="heading-xl mb-2 group-hover:text-orange transition-colors"
                    style={{ fontSize: "1.75rem", color: "#0F172A" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{ fontFamily: "Satoshi, sans-serif", color: "#0F172A", opacity: 0.65, lineHeight: 1.6 }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image Container */}
          <div className="flex justify-center items-start pt-8 reveal">
            <div
              className="process-img-wrap nb-card overflow-hidden"
              style={{
                transform: "rotate(3deg)",
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "4/5",
                background: "#0F172A",
              }}
            >
              {/* Gradient artwork */}
              <div
                className="process-img w-full h-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #FF6B35 0%, #FF3366 40%, #0F172A 100%)",
                }}
              >
                <div className="text-center p-8">
                  <div
                    className="heading-xl text-white mb-4"
                    style={{ fontSize: "6rem", lineHeight: 1 }}
                  >
                    AK
                  </div>
                  <div
                    className="text-white/60"
                    style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1.25rem", fontStyle: "italic" }}
                  >
                    "Bold by design."
                  </div>
                </div>
              </div>

              {/* Hover label */}
              <div
                className="absolute bottom-4 left-4 right-4 nb-card bg-orange text-white text-center py-2"
                style={{ fontFamily: "Cabinet Grotesk, sans-serif", fontWeight: 900, fontSize: "0.875rem", textTransform: "uppercase" }}
              >
                Hover to Reveal Color →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
