import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroRef = useRef(null);
  const orbRef = useRef(null);

  useGSAP(() => {
    // Simple fade in for orb
    gsap.from(orbRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "power2.out",
      delay: 0.5
    });
  }, []);

  const text = `We help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col justify-end min-h-screen bg-[#080808] overflow-hidden"
    >
      {/* Pure CSS Gradient Orb Background */}
      <div ref={orbRef} className="hero-orb"></div>
      
      <div className="relative z-10 w-full">
        <AnimatedHeaderSection
          title={"Arkeno.dev"}
          text={text}
          textColor={"text-[#f5f0e8]"}
          titleClassName={"leading-[0.92] sm:leading-[0.95] text-[#c9a84c] tracking-tighter drop-shadow-lg"}
        />
      </div>
    </section>
  );
};

export default Hero;

