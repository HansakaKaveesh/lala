"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/ad2.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
        <div className="lg:w-fit">
          <div className="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
            <h1>Get</h1>
            <h1>in</h1>
            <h1 className="bg-black/30 text-white rounded-sm px-1 shadow-sm shadow-white/50">
              Clothes
            </h1>
            <h1>Today</h1>
          </div>
          <div className="w-full flex items-center justify-between mt-6 py-1 px-4 uppercase bg-green-500 rounded-sm cursor-pointer">
            <h3 className="text-white text-lg font-semibold">Buy Now</h3>
            <div className="w-[40%] flex items-center text-gray-700 text-4xl gap-0">
              <hr className="w-full border border-gray-700 relative -right-3" />
              <ion-icon name="chevron-forward"></ion-icon>
            </div>
          </div>
          <p className="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">
            25% Discount
          </p>
        </div>

        <div>
          <ul className="text-3xl text-white space-y-2">
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
