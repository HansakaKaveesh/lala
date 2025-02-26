"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ShopByCategory = () => {
  const categories = [
    {
      name: "New Arrivals",
      image: "/New.jpg",
      hoverImage: "/New.gif",
      link: "/category/new-arrivals",
    },
    {
      name: "Denim",
      image: "/Denim.jpg",
      hoverImage: "/Denim.gif",
      link: "/categories/denim",
    },
    {
      name: "Tops",
      image: "/Tops.jpg",
      hoverImage: "/Tops.gif",
      link: "/categories/tops",
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gray-900 after:rounded-full">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              href={category.link}
              key={index}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative block overflow-hidden rounded-xl transition-all duration-500 hover:z-10 hover:shadow-2xl"
              aria-label={`Explore ${category.name} collection`}
            >
              <Card className="relative rounded-xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-72 aspect-[3/4]">
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
                <CardContent className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold tracking-wide transform transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
                    {category.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-amber-400 transition-all duration-500 group-hover:w-full" />
                  </h3>
                </CardContent>
                <div className="absolute inset-0 hidden group-hover:block animate-pulse-slow">
                  <div className="absolute inset-0 border-2 border-white/30 rounded-xl pointer-events-none" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;