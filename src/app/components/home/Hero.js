"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/ad2.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingVariants}
            animate="float"
            className="absolute bg-white/10 w-24 h-24 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </motion.div>

      <div className="w-full h-full flex flex-col items-center justify-center py-10 relative z-10 px-4 mt-2">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl backdrop-blur-sm rounded-2xl p-8 bg-black/20 border border-white/10"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <span className="text-white/80 font-semibold tracking-widest text-sm uppercase border-l-2 border-pink-500 pl-3">
              New Collection 2024
            </span>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-7xl font-bold uppercase"
            >
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Get in Clothes
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"
            />
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl font-bold text-white uppercase mt-4"
            >
              <span className="text-stroke">Today</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              Shop Now
            </button>
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
              { icon: <FaFacebook />, color: "text-blue-500", name: "Facebook" },
              { icon: <FaInstagram />, color: "text-pink-500", name: "Instagram" },
              { icon: <FaWhatsapp />, color: "text-green-400", name: "WhatsApp" },
              { icon: <FaLinkedin />, color: "text-blue-400", name: "LinkedIn" },
              { icon: <FaYoutube />, color: "text-red-500", name: "YouTube" },
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
                  className={`flex justify-center items-center p-3 rounded-full bg-white/10 backdrop-blur-sm ${item.color} hover:bg-white/20 transition-all duration-300 text-xl sm:text-2xl`}
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

      {/* Scrolling Indicator */}
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

      <style jsx global>{`
        .text-stroke {
          -webkit-text-stroke: 2px rgba(255,255,255,0.8);
          color: transparent;
          position: relative;
          display: inline-block;
        }
        .text-stroke::after {
          content: 'Today';
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(45deg, #f472b6, #c084fc);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 0;
          clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
          animation: text-reveal 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1s;
        }
        @keyframes text-reveal {
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          }
        }
      `}</style>
    </div>
  );
}