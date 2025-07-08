// components/CollectLocation.js
"use client";
import { FiMapPin } from "react-icons/fi"; // Importing a modern map pin icon

export default function CollectLocation() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[75vh] bg-cover bg-center bg-no-repeat mb-16 rounded-lg overflow-hidden shadow-xl"
      style={{ backgroundImage: "url('/images/location.jpeg')" }} // Replace with your actual image
    >
      {/* 🔲 Gradient & Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm"></div>

      {/* 🚩 Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide mb-5 drop-shadow-lg">
          Visit Our Premium <span className="text-yellow-400">Collection Center</span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8 text-white/90 font-light">
          Collect your exclusive fashion pieces from our flagship store at{" "}
          <strong>Colombo City Center</strong>.
        </p>

        {/* 📍 Button with Icon */}
        <a
          href="https://maps.google.com/?q=Colombo+City+Center"
          aria-label="View Colombo City Center on Google Maps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-sm md:text-base shadow hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
        >
          <FiMapPin className="text-xl" />
          View Location on Map
        </a>
      </div>
    </section>
  );
}