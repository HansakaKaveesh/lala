"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/home/Header";
import SocialMediaBar from "./components/home/SocialMediaBar";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon from React Icons

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
        <meta rel="icon" href="/favicon.ico" />
        <title>LaLa Studio</title>
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading ? (
          // Loading Page
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
              {/* Spinner Icon with Rainbow Animation */}
              <FaSpinner className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500 animate-spin mx-auto mb-4 rainbow-spinner" />
              <p className="text-sm sm:text-lg font-semibold text-gray-600">
                LaLa Studio, please wait...
              </p>
            </div>
          </div>
        ) : (
          // Main Content
          <>
            <SocialMediaBar />
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
