import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    const text = `Passionate about clean architecture
    We build scalable, high-performance solutions
    from prototype to production`;
    
    // Using simple html instead of string to allow gold highlights in the text lines directly,
    // but AnimatedTextLines might just take a string. I will add a styled div below it for the bullets.
    
    const aboutText = `At Arkeno, we turn ideas into fast, secure, and scalable digital products—combining modern UI, robust backends, and cloud infrastructure.`;
    
    const imgRef = useRef(null);
    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: 1,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current, once: true },
        });
    });
    return (
        <section id="about" className="min-h-screen bg-[#080808] border-t border-[#111111] py-10">
            <AnimatedHeaderSection
                subTitle={"Code with purpose, Built to scale"}
                title={"About"}
                text={text}
                textColor={"text-[#f5f0e8]"}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-start justify-between gap-10 md:gap-16 px-6 md:px-10 pb-16 text-lg md:text-2xl lg:text-3xl font-light tracking-wide lg:flex-row text-[#f5f0e8]/80">
                <img
                    ref={imgRef}
                    src="images/Arkenobaw.webp"
                    alt="man"
                    className="w-full lg:w-1/2 rounded-none border border-[#c9a84c]/20 object-cover"
                    style={{ aspectRatio: '4/5' }}
                />
                
                <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-10">
                    <AnimatedTextLines text={aboutText} className={"w-full leading-relaxed"} />
                    
                    <div className="flex flex-col gap-4 md:gap-6 text-base md:text-xl lg:text-2xl mt-2 md:mt-4">
                        <p className="text-[#c9a84c] tracking-widest uppercase text-xs md:text-sm font-bold">When we're not building:</p>
                        <ul className="flex flex-col gap-4 list-none p-0 m-0">
                            <li className="flex items-start gap-4">
                                <span className="text-[#c9a84c]">⚡</span>
                                <span>Experimenting with new <span className="text-[#c9a84c]">technologies</span> and refining our workflows.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-[#c9a84c]">🎥</span>
                                <span>Sharing knowledge with the developer community through <span className="text-[#c9a84c]">content and insights</span>.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-[#c9a84c]">🚀</span>
                                <span>Optimizing <span className="text-[#c9a84c]">performance, scalability,</span> and system reliability.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-[#c9a84c]">🎯</span>
                                <span>Continuously improving to deliver better, faster, and smarter solutions.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
