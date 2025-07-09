"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import { Package, ShoppingBag, Boxes } from "lucide-react";
import { motion } from "framer-motion";

// Reusable Counter component
const Counter = ({ value, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = value / steps;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setCount(Number(current.toFixed(decimals)));
    }, stepTime);

    return () => clearInterval(interval);
  }, [value, decimals]);

  return (
    <motion.span
      className="font-bold text-3xl sm:text-5xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {count}
    </motion.span>
  );
};

const Hero = () => {
  const [fannyCount] = useState(10);
  const [toteCount] = useState(12);
  const totalStock = fannyCount * 0.5 + toteCount * 0.5;

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/ad2.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

      <div className="w-full h-full flex flex-col items-center justify-center py-10 relative z-10 px-4 mt-2">

{/* Stock Display */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="w-full max-w-6xl mx-auto mt-0 sm:mt-20 text-white text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-center grid grid-cols-1 sm:grid-cols-3 gap-2 overflow-hidden px-12"
>
  {/* Fanny Packs */}
  <motion.div
    className="flex flex-col items-center gap-1 cursor-default px-2 py-4 sm:px-4 sm:py-6 min-h-full hover:bg-white/10 transition duration-300 ease-in-out rounded-xl shadow-lg backdrop-blur-sm"
  >
    <div className="rounded-full p-1 sm:p-2">
      <Package className="text-pink-400 w-5 h-5 sm:w-7 sm:h-7" />
    </div>
    <span className="text-xs sm:text-sm">Fanny Packs:</span>
    <Counter value={fannyCount} />
  </motion.div>

  {/* Tote Bags */}
  <motion.div
    className="flex flex-col items-center gap-1 cursor-default px-2 py-4 sm:px-4 sm:py-6 min-h-full hover:bg-white/10 transition duration-300 ease-in-out rounded-xl shadow-lg backdrop-blur-sm"
  >
    <div className="rounded-full p-1 sm:p-2">
      <ShoppingBag className="text-blue-400 w-5 h-5 sm:w-7 sm:h-7" />
    </div>
    <span className="text-xs sm:text-sm">Tote Bags:</span>
    <Counter value={toteCount} />
  </motion.div>

  {/* Total Stock */}
  <motion.div
    className="flex flex-col items-center gap-1 cursor-default px-2 py-4 sm:px-4 sm:py-6 min-h-full hover:bg-white/10 transition duration-300 ease-in-out rounded-xl shadow-lg backdrop-blur-sm"
  >
    <div className="rounded-full p-1 sm:p-2">
      <Boxes className="text-green-400 w-5 h-5 sm:w-7 sm:h-7" />
    </div>
    <span className="text-xs sm:text-sm">No. of KG's wasted upcycle:</span>
    <div className="flex items-end justify-center gap-1">
      <Counter value={totalStock} decimals={1} />
      <span className="text-sm">KG</span>
    </div>
  </motion.div>
</motion.div>

{/* Social Links */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="absolute bottom-16 w-full flex justify-center"
>
  <ul className="flex space-x-4 sm:space-x-6 mb-8">
    {[
      { icon: <FaFacebook />, hover: "group-hover:text-blue-500", name: "Facebook" },
      { icon: <FaInstagram />, hover: "group-hover:text-pink-500", name: "Instagram" },
      { icon: <FaWhatsapp />, hover: "group-hover:text-green-400", name: "WhatsApp" },
      { icon: <FaLinkedin />, hover: "group-hover:text-blue-400", name: "LinkedIn" },
      { icon: <FaYoutube />, hover: "group-hover:text-red-500", name: "YouTube" },
    ].map((item, index) => (
      <motion.li
        key={index}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 + index * 0.1 }}
      >
        <a
          href="#"
          className={`flex justify-center items-center p-3 rounded-full bg-white/10 backdrop-blur-sm text-white ${item.hover} hover:bg-white/20 transition-all duration-300 text-xl sm:text-2xl`}
        >
          {item.icon}
        </a>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded-full">
            {item.name}
          </span>
        </div>
      </motion.li>
    ))}
  </ul>
</motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 inset-x-0 mx-auto flex flex-col items-center"
      >
        <div className="animate-bounce w-8 h-8 flex items-center justify-center">
          <FaChevronDown className="text-white/80 text-xl" />
        </div>
        <span className="text-white/60 text-sm mt-0">Scroll Down</span>
      </motion.div>
    </div>
  );
};

export default Hero;
