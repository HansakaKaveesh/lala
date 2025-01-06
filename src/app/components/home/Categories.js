"use client"
import Image from "next/image";
import { useState } from "react";

const ShopByCategory = () => {
  const categories = [
    {
      name: "New Arrivals",
      image: "/New.jpg", // Replace with your default image path
      hoverImage: "/New.gif", // Replace with your hover image path
      link: "/categories/new-arrivals",
    },
    {
      name: "Denim",
      image: "/Denim.jpg", // Replace with your default image path
      hoverImage: "/Denim.gif", // Replace with your hover image path
      link: "/categories/denim",
    },
    {
      name: "Tops",
      image: "/Tops.jpg", // Replace with your default image path
      hoverImage: "/Tops.gif", // Replace with your hover image path
      link: "/categories/tops",
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-sans-serif text-gray-800 text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              href={category.link}
              key={index}
              className="group relative block rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative h-72">
                <Image
                  src={
                    hoveredCategory === index ? category.hoverImage : category.image
                  }
                  alt={category.name}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
