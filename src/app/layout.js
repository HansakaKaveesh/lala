"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/home/Header";
import SocialMediaBar from "./components/home/SocialMediaBar";

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
          // Loading Page
          <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="relative w-24 h-24">
    {/* Outer Spinner */}
    <div className="absolute inset-0 border-8 border-t-transparent border-red-500 rounded-full animate-spin"></div>
    {/* Middle Spinner */}
    <div className="absolute inset-4 border-4 border-t-transparent border-yellow-500 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
    {/* Inner Spinner */}
    <div className="absolute inset-8 border-2 border-t-transparent border-green-500 rounded-full animate-[spin_2s_linear_infinite]"></div>
    {/* Center Dot */}
    
  </div>
</div>

        ) : (
          // Main Content
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
