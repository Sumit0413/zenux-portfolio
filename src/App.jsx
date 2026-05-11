import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import MarqueeBelt from "./sections/MarqueeBelt";
import Services from "./sections/Services";
import Works from "./sections/Works";
import About from "./sections/About";
import ServiceSummary from "./sections/ServiceSummary";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  // Global scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all .reveal elements that aren't already visible
    const observe = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial observe + re-observe after a tick to catch all sections
    observe();
    const t = setTimeout(observe, 500);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBelt />
        <Services />
        <Works />
        <About />
        <ServiceSummary />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
