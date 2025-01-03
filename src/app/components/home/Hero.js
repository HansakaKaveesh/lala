"use client";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentAd, setCurrentAd] = useState(0);
  const ads = [
    {
      title: "Biggest Sale of the Season",
      description: "Up to 50% off on all collections. Limited time offer!",
      link: "#shop-now",
      buttonText: "Shop Now",
      background: "url(/ad1.jpg)",
    },
    {
      title: "Exclusive Winter Collection",
      description: "Warm up with our latest winter arrivals.",
      link: "#shop-now",
      buttonText: "Shop Winter",
      background: "url(/ad2.jpg)",
    },
    {
      title: "Holiday Gifts for Everyone",
      description: "Find the perfect gift for your loved ones.",
      link: "#shop-now",
      buttonText: "Shop Gifts",
      background: "url(/ad3.jpg)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 6000); // Change ad every 6 seconds for better effect

    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <section
      className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] lg:h-[70vh] xl:h-[80vh] text-white flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: ads[currentAd].background,
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in-out", // smooth background transition
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>

      {/* Carousel content */}
      <div className="relative text-center max-w-2xl px-6 sm:px-8 md:px-12 animate-fade-in">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-shadow-xl animate-slide-up">
          {ads[currentAd].title}
        </h2>
        <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 text-shadow-sm animate-fade-in">
          {ads[currentAd].description}
        </p>
        <a
          href={ads[currentAd].link}
          className="bg-blue-500 text-white py-3 px-8 sm:py-4 sm:px-12 rounded-full shadow-xl transform hover:bg-blue-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:translate-y-1"
        >
          {ads[currentAd].buttonText}
        </a>
      </div>

      {/* Carousel Indicator (optional) */}
      <div className="absolute bottom-10 flex space-x-2">
        {ads.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${index === currentAd ? "bg-blue-500" : "bg-white/50"} transition-all duration-300`}
          ></div>
        ))}
      </div>
    </section>
  );
}
