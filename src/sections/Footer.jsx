import React from "react";

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span className="text-[#f5f0e8]">YOU DREAM IT, I CODE IT</span> <span className="text-[#c9a84c]">✦</span>
    <span className="text-[#c9a84c]">YOU DREAM IT, I CODE IT</span> <span className="text-[#f5f0e8]">✦</span>
    <span className="text-[#f5f0e8]">YOU DREAM IT, I CODE IT</span> <span className="text-[#c9a84c]">✦</span>
    <span className="text-[#c9a84c]">YOU DREAM IT, I CODE IT</span> <span className="text-[#f5f0e8]">✦</span>
  </div>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex flex-col justify-between overflow-hidden bg-[#080808] text-[#f5f0e8] min-h-[80vh] border-t border-[#111111]">
      {/* CSS Only Marquee at the Top */}
      <div className="w-full overflow-hidden border-y border-[#c9a84c]/20 bg-[#111111] py-4 md:py-6 z-10 flex whitespace-nowrap">
        <div className="flex w-max animate-marquee text-lg sm:text-2xl md:text-4xl font-black tracking-widest uppercase">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>

      {/* Giant background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black tracking-tighter text-transparent select-none pointer-events-none z-0"
           style={{ WebkitTextStroke: "1px rgba(201,168,76,0.05)" }}>
        ARKENO
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-10 md:mt-20 w-full max-w-5xl mx-auto py-12 md:py-20">
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-10 md:mb-16 text-center text-[#f5f0e8]">
          Ready to begin?
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full max-w-md sm:max-w-none">
          <a href="#" className="w-full sm:w-auto justify-center px-10 py-4 md:py-5 rounded-full bg-[#c9a84c] text-[#080808] font-bold text-lg md:text-xl flex items-center gap-3 hover:bg-[#e0be63] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)]">
            Contact Me
          </a>

          <a href="#" className="w-full sm:w-auto justify-center px-10 py-4 md:py-5 rounded-full border border-[#c9a84c] text-[#c9a84c] font-bold text-lg md:text-xl flex items-center gap-3 hover:bg-[#c9a84c] hover:text-[#080808] hover:scale-105 transition-all duration-300">
            My Resume
          </a>
        </div>
      </div>

      {/* Bottom Bar / Credits */}
      <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#111111] pt-8 bg-[#080808]">
        <div className="text-[#f5f0e8]/50 text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
          © 2026 Arkeno. All rights reserved.
        </div>

        <div className="flex items-center gap-2 order-1 md:order-2">
          <span className="text-[#f5f0e8]/50 text-xs font-bold uppercase tracking-widest">Crafted with</span>
          <span className="text-[#c9a84c] text-sm">✦</span>
          <span className="text-[#f5f0e8]/50 text-xs font-bold uppercase tracking-widest">by</span>
          <span className="text-[#f5f0e8] font-black text-sm uppercase tracking-widest">Arkeno</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-[#c9a84c]/50 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#080808] transition-all duration-300 group order-3"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
