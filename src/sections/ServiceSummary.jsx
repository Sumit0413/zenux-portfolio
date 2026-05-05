import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-32 md:mb-42 contact-text-responsive text-[#f5f0e8] bg-[#080808] px-4 md:px-0">
      <div id="title-service-1" className="hover:text-[#c9a84c] transition-colors duration-500 cursor-default">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-3 translate-x-4 md:translate-x-16 hover:text-[#c9a84c] transition-colors duration-500 cursor-default"
      >
        <p className="font-normal">Development</p>
        <div className="w-6 h-1 md:w-32 bg-[#c9a84c] shrink-0" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-3 -translate-x-8 md:-translate-x-48 hover:text-[#c9a84c] transition-colors duration-500 cursor-default"
      >
        <p>APIs</p>
        <div className="w-6 h-1 md:w-32 bg-[#c9a84c] shrink-0" />
        <p className="italic">Frontends</p>
        <div className="w-6 h-1 md:w-32 bg-[#c9a84c] shrink-0 hidden sm:block" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-8 md:translate-x-48 hover:text-[#c9a84c] transition-colors duration-500 cursor-default">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
