"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import 'animate.css';

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/ad2.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-45"></div>

      <div className="w-full h-full flex items-center justify-center py-10 relative z-10">
        <div className="text-center lg:w-fit">
          <div className="sm:text-7xl xs:text-8xl text-white font-sans font-bold uppercase">
            <h1>Get in Clothes</h1>
            
            
            <h1>Today</h1>
          </div>

          {/* New "Shop Now" Button Style */}
          <div className="w-full flex items-center justify-center mt-6 py-3 px-8 uppercase bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 text-white rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold">Shop Now</h3>
          </div>

          <p className="text-md text-black bg-white/30 font-semibold mt-1 capitalize rounded-lg p-2">
            25% Discount
          </p>
        </div>

        <div className="absolute bottom-12 w-full flex justify-center">
          <ul className="text-3xl text-white space-x-6 flex">
            <li className="flex justify-center items-center p-1 bg-black/40 rounded-full hover:text-blue-500 transition-colors">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className="flex justify-center items-center p-1 bg-black/40 rounded-full hover:text-pink-500 transition-colors">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className="flex justify-center items-center p-1 bg-black/40 rounded-full hover:text-green-500 transition-colors">
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </li>
            <li className="flex justify-center items-center p-1 bg-black/40 rounded-full hover:text-blue-600 transition-colors">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li className="flex justify-center items-center p-1 bg-black/40 rounded-full hover:text-red-500 transition-colors">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
