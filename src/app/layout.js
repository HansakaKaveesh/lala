"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/home/Header";

import { NextAuthProvider } from './provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Add metadata for the page */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="LaLa Studio - A place for creative expression and innovative design."
        />
        <meta name="author" content="LaLa Studio" />
        <meta name="theme-color" content="#4CAF50" />
        <link rel="icon" href="/favicon.ico" />
        <title>LaLa Studio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading ? (
<div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
  <div className="relative w-52 h-52 flex items-center justify-center">
    {/* Spinner 1 (Outer) */}
    <div className="absolute inset-0 border-4 border-t-transparent border-red-500 rounded-full animate-spin "></div>

    {/* Spinner 2 */}
    <div className="absolute inset-2 border-4 border-t-transparent border-orange-500 rounded-full animate-[spin_3s_linear_infinite] "></div>

    {/* Spinner 3 */}
    <div className="absolute inset-4 border-4 border-t-transparent border-yellow-400 rounded-full animate-[spin_2.5s_linear_infinite_reverse] "></div>

    {/* Spinner 4 */}
    <div className="absolute inset-6 border-4 border-t-transparent border-green-600 rounded-full animate-[spin_2s_linear_infinite]"></div>

    {/* Spinner 5 */}
    <div className="absolute inset-8 border-4 border-t-transparent border-blue-700 rounded-full animate-[spin_1.8s_linear_infinite_reverse] "></div>

    {/* Spinner 6 (Inner) */}
    <div className="absolute inset-10 border-4 border-t-transparent border-fuchsia-900 rounded-full animate-[spin_2.8s_linear_infinite] "></div>

    {/* Centered Logo */}
    <img
      src="/LALA LOGO AW FINAL.png"
      alt="LaLa Studio Logo"
      className="w-16 h-16 z-10 transition-transform duration-500 hover:scale-110"
    />
  </div>
</div>



        ) : (
          // Main Content
          <>
          
            {children}
    
            
            
          </>
        )}
      </body>
    </html>
  );
}
