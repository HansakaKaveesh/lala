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
      }}
    >
      {/* Overlay with transparent black */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2
          className="text-3xl sm:text-2xl lg:text-5xl font-bold text-white mb-4"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          Recycle Your Denim!
        </h2>
        <p className="text-lg text-white mb-6">
          Help reduce waste and promote sustainable fashion by recycling your old denim with us.
        </p>
        <div className="flex justify-center items-center mb-6">
          <FaRecycle className="text-6xl text-green-500 mr-4" />
          <p className="text-xl text-white">Join the movement for a sustainable future!</p>
        </div>
        <div className="space-x-4">
          <button className="px-8 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
          <button className="px-8 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DenimRecycleAd;
