'use client';

import { motion } from 'framer-motion';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function NewsUpdates() {
  const updates = [
    {
      id: 1,
      title: "Premium Summer Collection 2025",
      image: "/images/download (1).jpeg",
      description:
        "Introducing our all-new Summer 2025 Collection – a luxurious blend of elegance, bold design, and breathable comfort...",
    },
    {
      id: 2,
      title: "Limited Edition Designer Drop",
      image: "/images/shop2.jpeg",
      description:
        "Exclusively available at our premium outlet shops, this curated collection of limited edition designer pieces is tailored...",
    },
    {
      id: 3,
      title: "New Arrivals: Luxe Essentials",
      image: "/images/shop3.jpeg",
      description:
        "Be the first to explore the newest discoveries in luxury fashion. Our Luxe Essentials collection features modern staples...",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
          📰 News <span className="text-yellow-500">Updates</span>
        </h2>
        <p className="text-gray-500 text-md max-w-xl mx-auto">
          Stay informed with the latest arrivals, drops, and curated ALT fashion stories.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {updates.map((update) => (
          <motion.div
            key={update.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            variants={fadeUpVariant}
          >
            <div className="overflow-hidden">
              <img
                src={update.image}
                alt={update.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col h-[220px] justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 leading-snug mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {update.description}
                </p>
              </div>
              <a
                href="#"
                className="text-sm mt-4 text-yellow-600 font-medium hover:underline transition"
              >
                Read more →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}