"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 0);

      if (Math.abs(currentY - lastScrollY.current) > 10) {
        setScrollDirection(currentY > lastScrollY.current ? "down" : "up");
        lastScrollY.current = currentY;
      }
    };

    const debouncedScroll = () => {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(handleScroll, 150);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  const showText = scrollDirection === "up" || !scrolled;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{
        backgroundImage: scrolled
          ? "url('/images/hero1.1.jpeg')"
          : "url('/images/hero.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div
        className={clsx(
          "relative z-10 text-center text-white px-6 transition-all duration-700 ease-in-out",
          showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        )}
      >
        <h2 className="text-sm sm:text-base md:text-xl font-light text-gray-200 tracking-wider mb-2 animate-fadeIn">
          ✨ Welcome to
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md animate-slideUp">
          Alt Products Gallery
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-300 tracking-wide animate-fadeInSlow">
          Discover exclusive fashion collections that redefine luxury and style.
        </p>

        {/* CTA with animated ring */}
        <div className="relative inline-block group">
          {/* Gradient Ring */}
          <span
            className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500
            group-hover:blur-md group-hover:opacity-100 opacity-70 transition-all duration-700 animate-slow-spin"
          />

          {/* Explore Now Button */}
          <button
            onClick={() => {
              const target = document.getElementById("featured");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative z-10 bg-white text-black px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold 
            flex items-center gap-2 shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-label="Scroll to Featured Products"
          >
            <Search className="w-5 h-5" />
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}