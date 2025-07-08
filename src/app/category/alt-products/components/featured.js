// 📁 PremiumHero.jsx or PremiumHero.tsx if using TypeScript
"use client";

import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

// 🧩 ProductCard Component (no price displayed)
function ProductCard({ id, title, src, hoverSrc, isFavorite, onToggleFavorite }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-xl shadow-lg group hover:shadow-2xl transition duration-300 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ⭐ Favorite Icon */}
      <div
        role="button"
        tabIndex={0}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        onClick={() => onToggleFavorite(id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onToggleFavorite(id);
          }
        }}
        className="absolute top-3 right-3 z-10 text-yellow-400 text-xl cursor-pointer drop-shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-transform transform hover:scale-110"
      >
        {isFavorite ? (
          <FaStar className="transition-transform duration-200" />
        ) : (
          <FaRegStar className="transition-transform duration-200" />
        )}
      </div>

      {/* 📷 Product Image */}
      <img
        src={hovered ? hoverSrc : src}
        alt={`${title} image`}
        className="w-full h-64 object-cover transition duration-500"
        loading="lazy"
      />

      {/* 📝 Product Title */}
      <div className="p-5 text-center bg-white">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

// 🏆 PremiumHero Section
export default function PremiumHero() {
  const messages = [
    {
      title: "Explore Our Premium ALT Collection",
      subtitle: "Discover timeless designs crafted for elegance and luxury.",
    },
    {
      title: "Luxury Meets Style",
      subtitle: "Handpicked pieces to elevate every space you step into.",
    },
    {
      title: "Exquisite Craftsmanship",
      subtitle: "Blending innovation with tradition in every detail.",
    },
    {
      title: "Live Premium, Live Beautiful",
      subtitle: "Curated selections that reflect your refined taste.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  // 🧠 Load from localStorage once on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  // ⏱️ Auto-rotate messaging + images
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setLeftIndex((prev) => (prev + 1) % leftImages.length);
        setRightIndex((prev) => (prev + 1) % rightImages.length);
        setFade(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const leftImages = ["/images/featured1.jpg", "/images/featured1.1.jpeg"];
  const rightImages = ["/images/featured2.jpg", "/images/featured2.1.jpeg"];

  const featuredImages = [
    { id: 1, title: "ALT 15", src: "/images/premium1.jpeg", hoverSrc: "/images/premium1.1.jpeg" },
    { id: 2, title: "ALT 16", src: "/images/premium2.jpeg", hoverSrc: "/images/premium2.1.jpeg" },
    { id: 3, title: "ALT 17", src: "/images/premium3.jpeg", hoverSrc: "/images/premium3.1.jpeg" },
    { id: 4, title: "ALT 18", src: "/images/premium4.jpeg", hoverSrc: "/images/premium4.1.jpeg" },
    { id: 5, title: "ALT 19", src: "/images/premium5.jpeg", hoverSrc: "/images/premium5.1.jpeg" },
    { id: 6, title: "ALT 20", src: "/images/premium6.jpeg", hoverSrc: "/images/premium6.1.jpeg" },
    { id: 7, title: "ALT 21", src: "/images/premium7.jpeg", hoverSrc: "/images/premium7.1.jpeg" },
    { id: 8, title: "ALT 22", src: "/images/premium8.jpeg", hoverSrc: "/images/premium8.1.jpeg" },
    { id: 9, title: "ALT 23", src: "/images/premium9.jpeg", hoverSrc: "/images/premium9.1.jpeg" },
    { id: 10, title: "ALT 24", src: "/images/premium10.jpeg", hoverSrc: "/images/premium10.1.jpeg" },
    { id: 11, title: "ALT 25", src: "/images/premium11.jpeg", hoverSrc: "/images/premium11.1.jpeg" },
    { id: 12, title: "ALT 26", src: "/images/premium12.jpeg", hoverSrc: "/images/premium12.1.jpeg" },
  ];

  return (
    <section id="featured" className="bg-white py-16 px-5 md:px-20">
      {/* 🔄 Main Promo Section */}
      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left Image */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-xl">
          <img
            src={leftImages[leftIndex]}
            alt="Left Promo"
            className={`w-full h-72 sm:h-96 object-cover rounded-md transition-all duration-1000 ease-in-out ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>

        {/* Center Promo Section */}
        <div className="lg:w-[30%] bg-gradient-to-tr from-white to-gray-100 p-8 rounded-xl shadow-xl text-center flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 tracking-wide">
            🎉 SPEND & SAVE
          </h2>
          <p className="text-sm text-gray-600 mb-4">🍂 Offer Ends Sunday</p>
          <div className="space-y-4">
            <div>
              <p className="text-xl font-bold text-red-600">$50 OFF</p>
              <p className="text-sm text-gray-700">when you spend $150</p>
            </div>
            <div>
              <p className="text-xl font-bold text-red-600">$100 OFF</p>
              <p className="text-sm text-gray-700">when you spend $300</p>
            </div>
          </div>
          <p className="mt-6">
            <span className="bg-yellow-200 text-black px-4 py-1 rounded-full font-medium text-sm">
              📍 In-store purchases only
            </span>
          </p>
          <p className="text-sm font-semibold mt-4 text-gray-700">
            🧥 Discover <span className="underline">Collections</span> &{" "}
            <span className="underline">Alt Styles</span>
          </p>
          <a
            href="#"
            className="mt-3 text-xs text-blue-600 underline hover:text-blue-800"
          >
            View full terms & conditions
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-xl">
          <img
            src={rightImages[rightIndex]}
            alt="Right Promo"
            className={`w-full h-72 sm:h-96 object-cover rounded-md transition-all duration-1000 ease-in-out ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>

      {/* 🎯 Rotating Messaging Banner */}
      <div className="relative mt-20 mb-12">
        <img
          src="/images/hero_06.jpeg"
          alt={`Hero background for ${messages[currentIndex].title}`}
          className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center">
          <div className="pl-6 md:pl-12 text-white max-w-xl transition-opacity duration-1000 ease-in-out">
            <h1
              className={`text-2xl md:text-5xl font-bold mb-3 transition-opacity duration-1000 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {messages[currentIndex].title}
            </h1>
            <p
              className={`text-sm md:text-xl transition-opacity duration-1000 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {messages[currentIndex].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* 🛍 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {featuredImages.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            src={product.src}
            hoverSrc={product.hoverSrc}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}