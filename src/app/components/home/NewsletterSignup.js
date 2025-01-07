// src/components/DenimRecycleAd.js
import React from 'react';
import { FaRecycle } from 'react-icons/fa'; // Import the recycle icon

const DenimRecycleAd = () => {
  return (
    <section
      className="denim-recycle-ad text-center py-10 relative"
      style={{
        backgroundImage: 'url(/denimBK.jpg)', // Add your image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keep background fixed while scrolling
        backgroundColor: '#000', // Fallback color
      }}
    >
      {/* Overlay with transparent black */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          Recycle Your Denim!
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mb-6">
          Help reduce waste and promote sustainable fashion by recycling your old denim with us.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <FaRecycle className="text-4xl sm:text-5xl lg:text-6xl text-green-500" />
          <p className="text-base sm:text-lg md:text-xl text-white text-center sm:text-left">
            Join the movement for a sustainable future!
          </p>
        </div>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            aria-label="Learn More about Denim Recycling"
          >
            Learn More
          </button>
          <button
            className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
            aria-label="Join Denim Recycling Program"
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DenimRecycleAd;
