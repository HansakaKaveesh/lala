"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Adjust this import path based on your setup

const ShopByCategory = () => {
  const categories = [
    {
      name: "New Arrivals",
      image: "/New.jpg",
      hoverImage: "/New.gif",
      link: "/categories/new-arrivals",
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
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              href={category.link}
              key={index}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Card className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative h-56">
                    <Image
                      src={
                        hoveredCategory === index
                          ? category.hoverImage
                          : category.image
                      }
                      alt={category.name}
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold">{category.name}</h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
