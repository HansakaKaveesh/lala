"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaShoppingBag, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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

  return (
    <header
  className={`fixed top-0 left-0 w-full lg:px-16 px-4 flex flex-wrap items-center py-4 z-50 transition-all duration-300 ${
    isScrolled || isMenuOpen ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
  }`}
>
  {/* Logo and Name */}
  <div className="flex-1 flex items-center justify-between ">
    <a href="/" className="flex items-center  ">
      <img
        src="/LALA LOGO AW FINAL.png"
        alt="Logo"
        className="h-14 "
      />
    </a>
  </div>

  <div className="absolute inset-0 flex items-center justify-center">
  <span
    className={`text-5xl md:text-6xl lg:text-7xl font-serif transition-transform duration-1000 ease-in-out ${
      isScrolled
        ? 'text-gray-600 scale-50 md:scale-75 translate-y-0'
        : 'text-white scale-150 md:scale-200 translate-y-24 tracking-widest'
    }`}
  >
    LALA STUDIO
  </span>
</div>



 {/* Mobile Menu Toggle */}
  <label
    htmlFor="menu-toggle"
    className="cursor-pointer md:hidden block relative"
    onClick={() => setIsMenuOpen((prev) => !prev)}
  >
    <FaBars className="text-gray-600 text-2xl hover:text-gray-800 transition-colors duration-300" />
  </label>
  <input className="hidden peer" type="checkbox" id="menu-toggle" />

  {/* Navigation Menu */}
  <div
    className={`hidden peer-checked:flex md:flex md:items-center md:w-auto w-full`}
    id="menu"
  >
    <nav className="flex items-center justify-between w-full">
      <ul className="md:flex items-center justify-between text-base text-gray-800 pt-4 md:pt-0">
        <li>
          <a
            className="md:p-4 py-3 px-0 block hover:text-blue-500 transition-colors duration-300 cursor-pointer relative"
            href="/"
          >
            Home
          </a>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsCategoryOpen(true)}
          onMouseLeave={() => setIsCategoryOpen(false)}
        >
          <a
            className="md:p-4 py-3 px-0 block hover:text-blue-500 transition-colors duration-300 cursor-pointer"
          >
            Category
          </a>
          {isCategoryOpen && (
            <div className="absolute top-9 left-0 bg-white shadow-md mt-2 w-48">
              <ul className="flex flex-col text-gray-700">
                <li>
                  <a
                    href="/category/new-arrivals"
                    className="block px-4 py-2 hover:bg-yellow-100 transition-colors duration-300"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="/category/denim"
                    className="block px-4 py-2 hover:bg-yellow-100 transition-colors duration-300"
                  >
                    Denim
                  </a>
                </li>
                <li>
                  <a
                    href="/category/tops"
                    className="block px-4 py-2 hover:bg-yellow-100 transition-colors duration-300"
                  >
                    Tops
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        
        <li>
          <a
            className="md:p-4 py-3 px-0 block hover:text-blue-500 transition-colors duration-300 cursor-pointer relative"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0 cursor-pointer relative">
        <button
          onClick={toggleSearch}
          className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
        >
          <FaSearch className="text-xl" />
        </button>
        <a
          href="/login"
          className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
        >
          <FaUserCircle className="text-xl" />
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
        >
          <FaShoppingBag className="text-xl" />
        </a>
      </div>
    </nav>
  </div>

  {/* Search Bar */}
  {isSearchOpen && (
    <div className="absolute top-[110%] right-0 w-80 bg-white shadow-xl rounded-xl transform origin-top-right transition-all duration-300 ease-out backdrop-blur-sm border border-gray-100">
    <div className="p-3 flex items-center gap-2 group">
      <div className="flex-1 relative">
        <svg 
          className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400 text-gray-700"
        />
      </div>
      <button
        onClick={toggleSearch}
        className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 group-hover:rotate-90"
        aria-label="Close search"
      >
        <svg 
          className="w-5 h-5 text-gray-500 hover:text-gray-700" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  )}
</header>

  );
}
