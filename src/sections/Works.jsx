import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

const Works = () => {
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <ScrollStack
        useWindowScroll
        itemDistance={140}
        itemScale={0.04}
        itemStackDistance={35}
        stackPosition="25%"
        baseScale={0.82}
        blurAmount={0}
      >
        {projects.map((project, index) => {
          const hasLink = Boolean(project.href?.trim());

          return (
            <ScrollStackItem key={project.id}>
              <div
                className="project-card"
                onClick={() => {
                  if (!hasLink) return;
                  window.open(project.href, "_blank", "noopener,noreferrer");
                }}
                onKeyDown={(e) => {
                  if (!hasLink) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.open(project.href, "_blank", "noopener,noreferrer");
                  }
                }}
                role={hasLink ? "link" : undefined}
                tabIndex={hasLink ? 0 : -1}
              >
                {/* Background image */}
                <div className="project-card__bg">
                  <img
                    src={project.bgImage}
                    alt={`${project.name} background`}
                    loading="lazy"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="project-card__overlay" />

                {/* Arrow link */}
                <div className="project-card__link">
                  <Icon icon="lucide:arrow-up-right" width={22} height={22} />
                </div>

                {/* Content */}
                <div className="project-card__content">
                  <span className="project-card__number">
                    {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <h2 className="project-card__title">{project.name}</h2>
                  <p className="project-card__description">
                    {project.description}
                  </p>
                  <div className="project-card__tags">
                    {project.frameworks.map((fw) => (
                      <span key={fw.id} className="project-card__tag">
                        {fw.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
};

export default Works;

