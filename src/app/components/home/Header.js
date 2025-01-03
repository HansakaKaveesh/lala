"use client";
import { useState, useEffect } from "react";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-gradient-to-r from-white via-blue-50 to-white shadow-lg py-3 px-6 flex items-center justify-between transition-all duration-300 ease-in-out ${
        isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-xl" : ""
      }`}
    >
      {/* Logo Image */}
      <a href="/" className="flex items-center">
        <img
          src="/logo.jpg" // Replace with your actual logo image path
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
      </a>

      {/* Navigation Links */}
      <nav
        className={`lg:flex lg:items-center lg:gap-8 ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-center lg:text-left transition-all duration-300 ease-in-out">
          <li>
            <a
              href="/"
              className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-300 ease-in-out"
              onClick={toggleDropdown}
            >
              Categories
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-6 left-0 bg-white shadow-lg border rounded-md py-2 w-40 text-left z-10 transition-all duration-300 ease-in-out">
                <li>
                  <a
                    href="#electronics"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#fashion"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    Denim
                  </a>
                </li>
                <li>
                  <a
                    href="/tops"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    Tops
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <a
          href="/login"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-300 ease-in-out"
        >
          <FaUser size={20} />
        </a>
        <a
          href="#cart"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-300 ease-in-out relative"
        >
          <FaShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </a>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes size={24} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 ease-in-out" />
        ) : (
          <FaBars size={24} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 ease-in-out" />
        )}
      </div>
    </header>
  );
}
