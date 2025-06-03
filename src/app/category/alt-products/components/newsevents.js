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
    <section className="px-8 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">News Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {updates.map((update, index) => (
          <motion.div
            key={update.id}
            className="bg-white p-4 rounded shadow hover:shadow-md "
            initial="hidden"
            whileInView="visible"
            variants={fadeUpVariant}
          >
            <img
              src={update.image}
              alt={update.title}
              className="mb-4 w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{update.title}</h3>
            <p className="text-gray-600 text-sm">{update.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
