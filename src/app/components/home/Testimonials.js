"use client";

import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Amazing quality! I love my new clothes and the prices were unbeatable.",
      name: "Jessica P.",
      role: "Fashion Blogger",
      image: "https://via.placeholder.com/100",
      rating: 5,
    },
    {
      quote: "Exceptional service and the products exceeded my expectations.",
      name: "Michael R.",
      role: "Frequent Buyer",
      image: "https://via.placeholder.com/100",
      rating: 4,
    },
    {
      quote: "Superb customer support and timely delivery. Highly recommend!",
      name: "Emily W.",
      role: "Eco-Conscious Shopper",
      image: "https://via.placeholder.com/100",
      rating: 5,
    },
    {
      quote: "Top-notch quality and designs. I will definitely shop again!",
      name: "David L.",
      role: "Interior Designer",
      image: "https://via.placeholder.com/100",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50/30 to-white overflow-hidden">
      {/* Decorative blur circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-16 -left-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-4">
            <FaQuoteLeft className="inline-block mr-3 -mt-2 text-blue-500 animate-float" />
            Voices of Satisfaction
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our happy customers are saying about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group transition-transform duration-300"
            >
              <Card className="relative bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden h-full transition-all duration-300">
                {/* Hover glow effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100/20 to-emerald-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Rating Stars */}
                <div className="absolute top-4 right-4 flex gap-1 z-10 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 transition-opacity ${
                        i < testimonial.rating ? "opacity-100" : "opacity-30"
                      }`}
                    />
                  ))}
                </div>

                {/* Header */}
                <CardHeader className="pb-0 z-10 relative">
                  <div className="flex items-center gap-4 p-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} picture`}
                        className="w-14 h-14 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <FaCheckCircle className="absolute -bottom-1 -right-1 text-blue-600 bg-white rounded-full text-base shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>

                {/* Quote Content */}
                <CardContent className="px-6 pb-6 relative z-10">
                  <FaQuoteLeft className="text-3xl text-blue-400/30 mb-3 transition-transform group-hover:scale-110" />
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {testimonial.quote}
                  </p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="px-6 py-4 border-t bg-gray-50/50 z-10 relative">
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500" />
                    Verified Purchase · April 2024
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}