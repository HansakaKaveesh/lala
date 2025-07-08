"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/home/Header";
import { Footer } from "./components/home/Footer";
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
  <div className="relative w-32 h-32 flex items-center justify-center rounded-2xl">

    {/* Spinner 1 - Largest (faster) */}
    <div className="absolute inset-3 border-[7px] border-t-transparent border-red-600 rounded-full animate-[spin_0.6s_linear_infinite] drop-shadow-sm"></div>

    {/* Spinner 2 - Medium (faster) */}
    <div className="absolute inset-7 border-[7px] border-t-transparent border-green-700 rounded-full animate-[spin_0.8s_linear_infinite] drop-shadow-sm"></div>

    {/* Spinner 3 - Smallest (faster) */}
    <div className="absolute inset-11 border-[7px] border-t-transparent border-yellow-500 rounded-full animate-[spin_1s_linear_infinite] drop-shadow-sm"></div>

  </div>
</div>





        ) : (
          // Main Content
          <>
            
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
