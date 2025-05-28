"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ShopByCategory = () => {
  const categories = [
    {
      name: "New Arrivals",
      description: "Discover the latest trends and fresh styles for every season.",
      image: "/New.jpg",
      hoverImage: "/New.gif",
      link: "/category/new-arrivals",
    },
    {
      name: "Denim",
      description: "Classic and contemporary denim wear to elevate your look.",
      image: "/Denim.jpg",
      hoverImage: "/Denim.gif",
      link: "/categories/denim",
    },
    {
      name: "Tops",
      description: "Stylish and comfortable tops for casual and formal wear.",
      image: "/Tops.jpg",
      hoverImage: "/Tops.gif",
      link: "/categories/tops",
    },
    {
      name: "ALT Products",
      description: "Alternative products for unique style and personality.",
      image: "/ALT.png",
      hoverImage: "/ALT.gif",
      link: "/categories/alt-products",
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gray-900 after:rounded-full">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.a
              href={category.link}
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative block overflow-hidden rounded-lg transition-all duration-500 hover:z-10 hover:shadow-2xl"
              aria-label={`Explore ${category.name} collection`}
            >
              <Card className="relative rounded-lg overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 aspect-[3/4]">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover w-full h-full transition-opacity duration-500"
                        style={{
                          opacity: hoveredCategory === index ? 0 : 1,
                        }}
                      />
                      <Image
                        src={category.hoverImage}
                        alt={category.name}
                        fill
                        className="object-cover w-full h-full transition-opacity duration-500"
                        style={{
                          opacity: hoveredCategory === index ? 1 : 0,
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  </div>
                </CardHeader>
                <CardContent className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold tracking-wide transform transition-all duration-500 translate-y-0 group-hover:-translate-y-1 relative">
                    {category.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-amber-400 transition-all duration-500 group-hover:w-full" />
                  </h3>
                  <p className="mt-1 text-sm opacity-90 max-w-xs">
                    {category.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 hidden group-hover:block animate-pulse-slow">
                  <div className="absolute inset-0 border-2 border-white/30 rounded-lg pointer-events-none" />
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
