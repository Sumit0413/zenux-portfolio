import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import FlowingMenu from './FlowingMenu';

const menuItems = [
  { link: 'home', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: 'services', text: 'Services', image: 'https://picsum.photos/600/400?random=2' },
  { link: 'about', text: 'About', image: 'https://picsum.photos/600/400?random=3' },
  { link: 'work', text: 'Work', image: 'https://picsum.photos/600/400?random=4' },
  { link: 'contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5' }
];

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-6 md:px-10 uppercase bg-[#080808]/95 backdrop-blur-xl text-[#f5f0e8] py-24 md:py-16 gap-y-10 md:w-1/2 md:left-1/2 border-l border-[#c9a84c]/20 shadow-2xl"
      >
        <div ref={(el) => (linksRef.current[0] = el)} className="relative flex-1">
          <FlowingMenu 
            items={menuItems}
            speed={15}
            textColor="#f5f0e8"
            bgColor="transparent"
            marqueeBgColor="#c9a84c" 
            marqueeTextColor="#080808"
            borderColor="rgba(201,168,76,0.2)"
          />
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-[#f5f0e8]/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty hover:text-[#c9a84c] transition-colors cursor-pointer">
              Arkeno.dev@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-[#f5f0e8]/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Top Navbar Header (Desktop) */}
      <div className="fixed top-0 left-0 w-full z-40 px-6 md:px-10 py-4 md:py-6 flex justify-between items-center bg-[#080808]/80 backdrop-blur-md border-b border-[#111111] transition-transform duration-300 pointer-events-none">
          <div className="text-[#c9a84c] font-black text-xl md:text-2xl tracking-widest pointer-events-auto cursor-pointer">
            ARKENO.DEV
          </div>
      </div>

      {/* Burger Menu Button */}
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-[#c9a84c] rounded-full cursor-pointer w-12 h-12 md:w-16 md:h-16 top-3 md:top-4 right-6 md:right-10 hover:bg-[#e0be63] shadow-[0_0_20px_rgba(201,168,76,0.3)] border border-[#e0be63]"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)", transform: "scale(0.8)", opacity: 0 }
        }
      >
        <span
          ref={topLineRef}
          className="block w-5 md:w-6 h-0.5 bg-[#080808] rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-5 md:w-6 h-0.5 bg-[#080808] rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
