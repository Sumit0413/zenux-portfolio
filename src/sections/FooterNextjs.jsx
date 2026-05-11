import React from "react";
import Link from "next/link";
import { socials } from "../constants";

const FOOTER_LINKS = {
  Services: [
    { label: "Web Design", href: "/services/web-design" },
    { label: "Branding", href: "/services/branding" },
    { label: "Motion", href: "/services/motion" },
    { label: "Development", href: "/services/development" }
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" }
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
    { label: "Sitemap", href: "/sitemap" }
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F172A",
        borderTop: "8px solid #0F172A",
      }}
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-5 py-10 md:px-4 md:pt-20 md:pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <div>
              <span
                className="heading-xl text-white block"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1 }}
              >
                ZEN
                <span className="logo-dot text-pink">.</span>
                <br />
                UX
              </span>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Bold creative studio. We build digital legends.
            </p>

            {/* Status Badge */}
            <div
              className="nb-card inline-flex items-center gap-2 px-4 py-2 bg-teal self-start"
              style={{
                transform: "rotate(2deg)",
                boxShadow: "4px 4px 0px 0px white",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                color: "#0F172A",
              }}
            >
              <span className="status-dot" />
              Available for Projects
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h3
                className="heading-xl text-orange"
                style={{ fontSize: "1rem" }}
              >
                {heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom bar */}
        <div className="border-t-4 border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            © {new Date().getFullYear()} Arkeno Studio. All rights reserved.
          </p>
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Designed with ❤️ and ☕ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
