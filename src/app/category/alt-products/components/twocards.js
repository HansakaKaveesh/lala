'use client';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function SaleBanner() {
  return (
    <section className="absolute left-0 w-full z-20 transform -translate-y-24">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full px-2 sm:px-4 max-w-4xl mx-auto">

        {/* New Arrivals */}
        <motion.div
          className="relative h-40 sm:h-64 overflow-hidden shadow-lg group"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
        >
          <img
            src="/images/card1.jpeg"
            alt="New Arrivals"
            className="w-full h-full object-fill transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gray-500/50 p-2 sm:p-4 flex flex-col justify-center items-start w-full">
            <h3 className="text-black text-xs sm:text-xl font-semibold mb-2 w-full">
              New Arrivals
            </h3>
            <p className="text-black text-xs sm:text-base mb-4 w-full">
              Discover the latest trends!
            </p>
            <button className="bg-yellow-600 text-white text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-yellow-800 transition mt-1">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* Hot Sale */}
        <motion.div
          className="relative h:40 sm:h-64 overflow-hidden shadow-lg group"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
        >
          <img
            src="/images/card2.jpg"
            alt="Hot Sale"
            className="w-full h-full object-fill transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gray-500/50 p-2 sm:p-4 flex flex-col justify-center items-start w-full">
            <h3 className="text-black text-xs sm:text-xl font-semibold mb-2 w-full">
              Hot Sale
            </h3>
            <p className="text-black text-xs sm:text-base mb-4 w-full">
              Limited time offers!
            </p>
            <button className="bg-yellow-600 text-white text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-yellow-800 transform hover:scale-105 transition mt-1">
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
