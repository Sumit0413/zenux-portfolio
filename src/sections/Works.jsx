import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

const Works = () => {
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  return (
    <section id="work" className="flex flex-col bg-[#080808] border-t border-[#111111]">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-[#f5f0e8]"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col w-full px-4 md:px-10 pb-20 gap-8 mt-10">
        {projects.map((project, index) => {
          const hasLink = Boolean(project.href?.trim());

          return (
            <div
              key={project.id}
              className="relative w-full h-[50vh] md:h-[80vh] flex flex-col justify-end p-4 sm:p-6 md:p-12 overflow-hidden border border-[#222] bg-[#111111] group cursor-pointer transition-all duration-500 hover:border-[#c9a84c] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(201,168,76,0.15)]"
              onClick={() => {
                if (!hasLink) return;
                window.open(project.href, "_blank", "noopener,noreferrer");
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={project.bgImage}
                  alt={`${project.name} background`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />

              {/* Arrow link */}
              <div className="absolute top-4 right-4 md:top-10 md:right-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#f5f0e8]/20 flex items-center justify-center text-[#f5f0e8] group-hover:bg-[#c9a84c] group-hover:text-[#080808] group-hover:border-[#c9a84c] transition-all duration-300">
                <Icon icon="lucide:arrow-up-right" width={20} height={20} className="md:w-[24px] md:h-[24px]" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2 md:gap-4 text-[#f5f0e8]">
                <span className="text-[#c9a84c] font-mono tracking-widest text-xs md:text-base">
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase">
                  {project.name}
                </h2>
                <p className="text-sm sm:text-base md:text-xl text-[#f5f0e8]/80 max-w-2xl font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-4">
                  {project.frameworks.map((fw) => (
                    <span 
                      key={fw.id} 
                      className="px-3 py-1.5 md:px-4 md:py-2 border border-[#f5f0e8]/20 text-[10px] md:text-sm tracking-widest uppercase bg-[#080808]/50 backdrop-blur-md text-[#f5f0e8] group-hover:border-[#c9a84c]/50 transition-colors"
                    >
                      {fw.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;

