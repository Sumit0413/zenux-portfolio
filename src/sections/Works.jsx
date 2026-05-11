import React from "react";
import { projects } from "../constants";

export default function Works() {
  return (
    <section
      id="portfolio"
      className="px-5 py-10 md:py-24 md:px-4"
      style={{ background: "#2EC4B6" }}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <span
              className="text-navy text-sm uppercase tracking-widest"
              style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
            >
              Selected Work
            </span>
            <h2
              id="portfolio-heading"
              className="heading-xl mt-2 text-navy"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              OUR
              <br />
              <span
                style={{
                  WebkitTextStroke: "3px #0F172A",
                  color: "transparent",
                  fontFamily: "Cabinet Grotesk, sans-serif",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                }}
              >
                PORTFOLIO
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="nb-btn bg-navy text-white px-8 py-4 text-base self-start md:self-end"
          >
            Start a Project
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const hasLink = Boolean(project.href?.trim());
            return (
              <div
                key={project.id}
                className="nb-card relative overflow-hidden cursor-pointer reveal group"
                style={{
                  aspectRatio: "16/9",
                  animationDelay: `${i * 80}ms`,
                  background: "#0F172A",
                }}
                onClick={() => {
                  if (!hasLink) return;
                  window.open(project.href, "_blank", "noopener,noreferrer");
                }}
              >
                {/* Background image */}
                {project.bgImage && (
                  <img
                    src={project.bgImage}
                    alt={project.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  />
                )}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, #0F172A 30%, transparent 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                  <div className="flex flex-col gap-2">
                    {/* Counter */}
                    <span
                      className="text-orange text-xs tracking-widest"
                      style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
                    >
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>

                    <h3
                      className="heading-xl text-white"
                      style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
                    >
                      {project.name}
                    </h3>

                    <p
                      className="text-white/70"
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 400,
                        fontSize: "0.8rem",
                        lineHeight: 1.5,
                        maxWidth: "28ch",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Framework tags */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.frameworks.map((fw) => (
                        <span
                          key={fw.id}
                          className="nb-card px-2 py-1 text-xs text-white"
                          style={{
                            background: "rgba(15,23,42,0.7)",
                            fontFamily: "Satoshi, sans-serif",
                            fontWeight: 700,
                            boxShadow: "3px 3px 0px 0px #FF6B35",
                            border: "2px solid #F8FAFC",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          {fw.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow link badge */}
                  {hasLink && (
                    <span
                      className="nb-card bg-orange text-white px-3 py-2 text-xs flex-shrink-0 self-end"
                      style={{
                        fontFamily: "Cabinet Grotesk, sans-serif",
                        fontWeight: 900,
                      }}
                    >
                      ↗
                    </span>
                  )}
                </div>


              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
