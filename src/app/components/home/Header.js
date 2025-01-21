"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full lg:px-16 px-4 flex flex-wrap items-center py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-4xl text-gray-900 font-extrabold">
          LALA
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
        <FaBars className="text-gray-600 text-2xl" />
      </label>
      <input className="hidden peer" type="checkbox" id="menu-toggle" />

      {/* Navigation Menu */}
      <div
        className="hidden peer-checked:flex md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav className="flex items-center justify-between w-full">
          <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-gray-800" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-gray-800" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-gray-800" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-gray-800" href="#">
                Contact
              </a>
            </li>
          </ul>
          {/* Right Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-all duration-300"
            >
              <FaSearch className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-all duration-300"
            >
              <FaUserCircle className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-all duration-300"
            >
              <FaShoppingCart className="text-xl" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
