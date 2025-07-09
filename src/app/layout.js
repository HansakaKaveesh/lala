"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/home/Header";
import { Footer } from "./components/home/Footer";
import { NextAuthProvider } from './provider';
import { FaComments, FaTimes } from "react-icons/fa";

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
  const [showChat, setShowChat] = useState(false);

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
          <>
            <Header />
            {children}
            <Footer />

<button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center
          animate-pulse-slow hover:animate-none hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]
          active:scale-90"
        aria-label="Open Chatbot"
        title="Chat with us!"
      >
        <FaComments size={28} />
      </button>

            {/* Chatbot Modal */}
            {showChat && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-4 relative">
                  <button
                    onClick={() => setShowChat(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                    aria-label="Close Chatbot"
                  >
                    <FaTimes size={20} />
                  </button>
                  <h2 className="text-xl font-semibold mb-2">LaLa Studio Chatbot</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    How can we assist you today?
                  </p>
                  {/* Replace this iframe with your chatbot embed or component */}
                  <iframe
                    src="https://example.com/chatbot"
                    className="w-full h-64 border rounded"
                    title="Chatbot"
                  ></iframe>
                </div>
              </div>
            )}
          </>
        )}
      </body>
    </html>
  );
}
