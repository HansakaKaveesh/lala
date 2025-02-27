"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/ad2.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>

      <div className="w-full h-full flex flex-col items-center justify-center py-10 relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl backdrop-blur-sm rounded-2xl p-8 bg-black/20"
        >
          <div className="mb-4">
            <span className="text-white/80 font-semibold tracking-widest text-sm uppercase border-l-2 border-pink-500 pl-3">
              New Collection 2024
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold uppercase">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Get in Clothes
              </span>
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl font-bold text-white uppercase"
            >
              <span className="text-stroke">Today</span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-12 w-full flex justify-center"
        >
          <ul className="flex space-x-6 mb-8">
            {[
              { icon: <FaFacebook />, color: "text-blue-500" },
              { icon: <FaInstagram />, color: "text-pink-500" },
              { icon: <FaWhatsapp />, color: "text-green-400" },
              { icon: <FaLinkedin />, color: "text-blue-400" },
              { icon: <FaYoutube />, color: "text-red-500" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <a
                  href="#"
                  className={`flex justify-center items-center p-3 rounded-full bg-white/10 backdrop-blur-sm ${item.color} hover:bg-white/20 transition-all duration-300`}
                >
                  {item.icon}
                </a>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded-full">
                    {item.icon.type.name.replace("Fa", "")}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="animate-bounce w-6 h-6 border-2 border-white/50 rounded-full"></div>
      </div>

      <style jsx global>{`
        .text-stroke {
          -webkit-text-stroke: 2px #fff;
          color: transparent;
          position: relative;
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
          clip-path: inset(0 100% 0 0);
          animation: text-reveal 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1s;
        }
        @keyframes text-reveal {
          100% {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </div>
  );
}