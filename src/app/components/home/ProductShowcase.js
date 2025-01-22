import React from "react";
import { Button } from "@/components/ui/button"; // shadcn-ui button component
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const HotSaleSection = () => {
  const products = [
    {
      id: 1,
      name: "Pro 1",
      price: "$120",
      image: "/home/featured/pro1.jpeg",
      description: "Stay warm and stylish this winter.",
    },
    {
      id: 2,
      name: "Pro 2",
      price: "$85",
      image: "/home/featured/pro2.jpeg",
      description: "Perfect for your daily runs.",
    },
    {
      id: 3,
      name: "Pro 3",
      price: "$200",
      image: "/home/featured/pro3.jpeg",
      description: "Track your fitness goals.",
    },

    {
      id: 4,
      name: "Pro 4",
      price: "$200",
      image: "/home/featured/pro4.jpeg",
      description: "Track your fitness goals.",
    },

    {
      id: 5,
      name: "Pro 5",
      price: "$200",
      image: "/home/featured/pro5.jpeg",
      description: "Track your fitness goals.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-10">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Hot Sale</h2>
        <p className="text-gray-600 mb-5 text-sm">Get the best deals on our top products.</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-white rounded-md shadow-sm transform transition duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-t-md rounded-b-md"
                />
              </CardHeader>
              <CardContent className="p-1">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mb-1">{product.description}</p>
                <p className="text-base font-semibold text-red-500">{product.price}</p>
              </CardContent>
              <CardFooter className="flex justify-center p-5">
                <Button className="bg-yellow-300 text-black px-3 py-1 rounded-sm text-xs hover:bg-yellow-400 hover:shadow-sm transition duration-300">
                  Add to Bag
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotSaleSection;
