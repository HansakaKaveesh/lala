'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const advertisements = [
  {
    id: 1,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/260054191729481.Y3JvcCwxMjc4LDEwMDAsMTIwLDA.jpg',
    title: 'Special Discount!',
    description: 'Get up to 50% off on selected items.',
  },
  {
    id: 2,
    image: 'https://social.thearvindstore.com/data/fb_images/arvindmenswearofficial/450010019840754.jpg',
    title: 'New Arrivals!',
    description: 'Check out our latest collection now.',
  },
  {
    id: 3,
    image: 'https://bearthriftathens.com/wp-content/uploads/2024/05/denim-decades071-e1704985092377.jpg.webp',
    title: 'Limited Offer!',
    description: 'Hurry up! This deal expires soon.',
  },
];

export default function AdvertisementSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % advertisements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden p-4">
      <motion.div
        key={advertisements[currentIndex].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        <img
          src={advertisements[currentIndex].image}
          alt={advertisements[currentIndex].title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-4">{advertisements[currentIndex].title}</h2>
        <p className="text-gray-600 mt-2">{advertisements[currentIndex].description}</p>
      </motion.div>
    </div>
  );
}
