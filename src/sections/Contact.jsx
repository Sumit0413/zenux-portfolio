import React from "react";
import { socials } from "../constants";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative px-5 py-10 md:py-28 md:px-4 overflow-hidden"
      style={{ background: "#FF3366" }}
      aria-labelledby="cta-heading"
    >
      {/* Floating shapes */}
      <div
        className="float-anim absolute top-8 left-8 w-24 h-24 bg-navy opacity-20 pointer-events-none"
        style={{ border: "4px solid #0F172A", transform: "rotate(15deg)" }}
      />
      <div
        className="float-anim absolute bottom-8 right-8 w-16 h-16 bg-orange opacity-30 rounded-full pointer-events-none"
        style={{ border: "4px solid #0F172A", animationDelay: "-5s" }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Giant heading */}
        <h2
          id="cta-heading"
          className="heading-xl text-white mb-8 reveal"
          style={{
            fontSize: "clamp(3.5rem, 11vw, 7rem)",
            textShadow: "8px 8px 0px #0F172A",
            lineHeight: 0.9,
          }}
        >
          LET'S
          <br />
          BUILD
          <br />
          <span style={{ WebkitTextStroke: "4px white", color: "transparent" }}>
            TOGETHER.
          </span>
        </h2>

        <p
          className="slab-text text-white/80 text-xl max-w-xl mx-auto mb-12 reveal"
          style={{ lineHeight: 1.6 }}
        >
          Ready to make something that actually matters? We've got the team, the
          tools, and the taste to pull it off.
        </p>



        {/* CTA Buttons — order: WhatsApp, Email Me, Call, Instagram */}
        <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4 justify-center items-center reveal">

          {/* 1. WhatsApp */}
          <a
            href="https://wa.me/919229556207"
            id="cta-whatsapp-btn"
            className="nb-btn bg-white text-navy px-10 py-5 text-xl group w-full md:w-auto flex justify-center"
            style={{ boxShadow: "8px 8px 0px 0px #0F172A" }}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="group-hover:scale-125 transition-transform text-green-500"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          {/* 2. Email Me */}
          <a
            href="mailto:Arkeno.dev@gmail.com"
            id="cta-email-btn"
            className="nb-btn bg-navy text-white px-10 py-5 text-xl group w-full md:w-auto flex justify-center"
            style={{ boxShadow: "8px 8px 0px 0px #0F172A" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:scale-125 transition-transform"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Me
          </a>

          {/* 3. Call */}
          <a
            href="tel:+919229556207"
            id="cta-call-btn"
            className="nb-btn bg-teal text-navy px-10 py-5 text-xl group w-full md:w-auto flex justify-center"
            style={{ boxShadow: "8px 8px 0px 0px #0F172A" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:scale-125 transition-transform"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call
          </a>

          {/* 4. Instagram only (no LinkedIn) */}
          <a
            href="https://www.instagram.com/Arkeno.dev/"
            id="cta-instagram-btn"
            className="nb-btn bg-orange text-white px-10 py-5 text-xl group w-full md:w-auto flex justify-center"
            style={{ boxShadow: "8px 8px 0px 0px #0F172A" }}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:scale-125 transition-transform"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>

        </div>
      </div>
    </section>
  );
}
