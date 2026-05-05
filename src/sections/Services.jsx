import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const text = `We build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  return (
    <section id="services" className="bg-[#080808]">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-[#f5f0e8]"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="sticky px-6 md:px-10 pt-6 pb-8 md:pb-12 text-[#f5f0e8] bg-[#080808] border-t border-[#c9a84c]/30 group hover:border-[#c9a84c] transition-colors duration-500"
          style={
            isDesktop
              ? { top: `calc(4rem + ${index * 3}rem)` }
              : { top: `calc(3rem + ${index * 2}rem)` }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-4 md:gap-6 w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl group-hover:text-[#c9a84c] transition-colors duration-500">{service.title}</h2>
              <p className="text-lg md:text-xl leading-relaxed tracking-widest lg:text-2xl text-[#f5f0e8]/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-xl md:text-2xl sm:gap-4 lg:text-3xl text-[#f5f0e8]/80 mt-2">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex items-center hover:text-[#c9a84c] transition-colors duration-300">
                      <span className="mr-6 md:mr-12 text-base md:text-lg text-[#c9a84c]/50">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-3 md:my-4 bg-[#c9a84c]/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
