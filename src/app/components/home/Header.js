"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full lg:px-16 px-4 flex flex-wrap items-center py-4 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo and Name */}
      <div className="flex-1 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/LALA LOGO AW FINAL.png" // Replace with the path to your logo
            alt="Logo"
            className="h-14" // Adjust the height as needed
          />
          <span className="ml-3 text-xl font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-300">
            LaLa Studio
          </span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <label
        htmlFor="menu-toggle"
        className="cursor-pointer md:hidden block"
        onClick={toggleMenu} // Toggle menu state when clicked
      >
        <FaBars className="text-gray-600 text-2xl hover:text-gray-800 transition-colors duration-300" />
      </label>
      <input className="hidden peer" type="checkbox" id="menu-toggle" />

      {/* Navigation Menu */}
      <div
        className={`hidden peer-checked:flex md:flex md:items-center md:w-auto w-full ${
          isMenuOpen ? "" : ""
        }`} // Apply background color when menu is open
        id="menu"
      >
        <nav className="flex items-center justify-between w-full">
          <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
            <li>
              <a
                className="md:p-4 py-3 px-0 block hover:text-blue-500 transition-colors duration-300"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block hover:text-blue-500 transition-colors duration-300"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block hover:text-blue-500 transition-colors duration-300"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block hover:text-blue-500 transition-colors duration-300"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FaSearch className="text-xl" />
            </button>
            <a
              href="/login"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FaUserCircle className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FaShoppingCart className="text-xl" />
            </a>
          </div>
        </nav>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full right-0 w-50 bg-white shadow-md p-4 z-50 rounded-md">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={toggleSearch}
              className="ml-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
