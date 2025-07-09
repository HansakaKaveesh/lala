"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DescriptionSection() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 sm:px-8 lg:px-24 rounded-lg">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={child}
          className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-600 bg-amber-100 rounded-full shadow-sm"
        >
          Trusted by Thousands
        </motion.div>

        <motion.h2
          variants={child}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
        >
          Why Choose Our Product
        </motion.h2>

        <motion.p
          variants={child}
          className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10"
        >
          Experience unparalleled performance and simplicity. Designed to fit your lifestyle, our product focuses on what truly matters: reliability, innovation, and user-first design — all in one seamless package.
        </motion.p>

        <motion.div variants={child}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300 shadow-lg group"
          >
            Learn More
            <ArrowRight className="w-5 h-5 transition transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}