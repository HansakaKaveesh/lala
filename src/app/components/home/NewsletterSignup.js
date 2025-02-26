// src/components/DenimRecycleAd.js
import React from 'react';
import { FaRecycle, FaLeaf, FaHandsHelping } from 'react-icons/fa';

const DenimRecycleAd = () => {
  return (
    <section
      className="denim-recycle-ad text-center py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/denimBK.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: '#0a192f',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-emerald-900/70"></div>

      {/* Animated floating elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-16 right-32 w-16 h-16 bg-emerald-400/30 rounded-full animate-float-delayed"></div>

      <div className="relative z-10 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="inline-block mb-8 animate-fade-in-up">
          <FaRecycle className="text-6xl sm:text-7xl text-emerald-400 mb-4 transform hover:rotate-180 transition duration-700" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300 mb-6 leading-tight">
          Give Your Denim<br />A New Life!
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block animate-scale-in">
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-4">
            <FaLeaf className="inline-block mr-2 text-emerald-400" />
            Over 1 Million Pieces Recycled
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Every denim recycled saves 10,000 liters of water and prevents 15kg of CO2 emissions. 
          Join our circular fashion movement and earn rewards for your eco-efforts!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex items-center bg-white/10 p-3 rounded-lg">
            <FaHandsHelping className="text-3xl text-emerald-400 mr-3" />
            <span className="text-white font-medium">Community-Driven</span>
          </div>
          <div className="flex items-center bg-white/10 p-3 rounded-lg">
            <FaLeaf className="text-3xl text-emerald-400 mr-3" />
            <span className="text-white font-medium">Carbon Neutral</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30 flex items-center justify-center"
            aria-label="Join Denim Recycling Program"
          >
            <FaRecycle className="mr-2" />
            Start Recycling Now
          </button>
          <button
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-emerald-400 hover:bg-emerald-400/20 text-white font-bold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/10"
            aria-label="Learn More about Denim Recycling"
          >
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default DenimRecycleAd;