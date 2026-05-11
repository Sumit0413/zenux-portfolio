import React, { useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 flex items-center justify-center">
      <nav
        className="nb-card w-full max-w-6xl bg-white px-6 py-3 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-0 heading-xl text-2xl text-navy select-none">
          Arkeno
          <span className="logo-dot text-pink">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-black text-sm uppercase tracking-tight text-navy hover:text-orange transition-colors duration-200"
                style={{ fontFamily: "Cabinet Grotesk, sans-serif", fontWeight: 900 }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="nb-btn bg-teal text-white px-4 md:px-6 py-2 text-xs md:text-sm mr-2 md:mr-0"
          style={{ fontFamily: "Cabinet Grotesk, sans-serif", fontWeight: 900 }}
        >
          Let's Talk
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="hidden sm:inline-block">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden nb-btn bg-orange text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 nb-card bg-white p-6 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="heading-xl text-2xl text-navy hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="nb-btn bg-teal text-white px-6 py-3 text-base justify-center"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
