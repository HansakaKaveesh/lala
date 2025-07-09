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

    {/* Red Spinner with bounce effect */}
<div className="absolute inset-3 border-[7px] border-t-transparent border-red-500 rounded-full animate-spin-spring drop-shadow-sm"></div>

{/* Orange Spinner */}
<div className="absolute inset-5 border-[7px] border-t-transparent border-orange-500 rounded-full animate-spin-bounce drop-shadow-sm"></div>

{/* Yellow Spinner */}
<div className="absolute inset-7 border-[7px] border-t-transparent border-yellow-400 rounded-full animate-spin-spring drop-shadow-sm"></div>

{/* Green Spinner */}
<div className="absolute inset-9 border-[7px] border-t-transparent border-green-500 rounded-full animate-spin-bounce drop-shadow-sm"></div>

{/* Blue Spinner */}
<div className="absolute inset-11 border-[7px] border-t-transparent border-blue-500 rounded-full animate-spin-spring drop-shadow-sm"></div>

{/* Indigo Spinner */}
<div className="absolute inset-[52px] border-[7px] border-t-transparent border-indigo-500 rounded-full animate-spin-bounce drop-shadow-sm"></div>

{/* Violet Spinner */}
<div className="absolute inset-[58px] border-[7px] border-t-transparent border-purple-500 rounded-full animate-spin-spring drop-shadow-sm"></div>


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
