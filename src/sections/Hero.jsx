import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const heroRef = useRef(null);
  const contextLostRef = useRef(false);
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let wasVisible = true;

    // Watch for hero re-entering the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        // If re-entering viewport AND context was lost → remount Canvas
        if (isVisible && !wasVisible && contextLostRef.current) {
          contextLostRef.current = false;
          setCanvasKey((k) => k + 1);
        }
        wasVisible = isVisible;
      },
      { threshold: 0.01 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleCanvasCreated = ({ gl }) => {
    // Prevent default to allow context restoration
    gl.domElement.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      contextLostRef.current = true;
    });
    // If browser restores context on its own, remount to re-init R3F state
    gl.domElement.addEventListener("webglcontextrestored", () => {
      contextLostRef.current = false;
      setCanvasKey((k) => k + 1);
    });
  };

  const text = `We help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col justify-end min-h-screen"
    >
      <AnimatedHeaderSection
        title={"Arkeno.dev"}
        text={text}
        textColor={"text-black"}
        titleClassName={"leading-[0.92] sm:leading-[0.95]"}
      />
      <figure
        className="absolute -z-50"
        style={{
          top: "-12vh",
          left: 0,
          width: "100vw",
          height: "112vh",
        }}
      >
        <Canvas
          key={canvasKey}
          shadows={false}
          frameloop="always"
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: true,
          }}
          camera={{ position: [0, 0.8, -10], fov: 20, near: 1, far: 20 }}
          onCreated={handleCanvasCreated}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 1.0 : 1.4} />
          </Float>
          <Environment resolution={64}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer form={"circle"} intensity={2} position={[0, 5, -9]} scale={10} />
              <Lightformer form={"circle"} intensity={2} position={[0, 3, 1]} scale={10} />
              <Lightformer form={"circle"} intensity={2} position={[-5, -1, -1]} scale={10} />
              <Lightformer form={"circle"} intensity={2} position={[10, 1, 0]} scale={16} />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;

