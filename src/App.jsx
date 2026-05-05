import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import Footer from "./sections/Footer";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simple fast loader for CSS/Images to mount
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis
      root
      className="relative w-full min-h-screen overflow-x-hidden bg-[#080808]"
      options={{
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        duration: 1.2,
      }}
    >
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#080808] text-[#c9a84c] transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse font-bold">
            ARKENO.DEV
          </p>
          <div className="relative h-1 overflow-hidden rounded w-40 bg-[#111111]">
            <div className="absolute top-0 left-0 h-full transition-all duration-1000 bg-[#c9a84c] w-full animate-pulse"></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
