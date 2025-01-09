import React from "react";
import { Button } from "@/components/ui/button"; // shadcn-ui button component
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const SaleProducts = () => {
  const products = [
    {
      id: 1,
      name: "Pro 1",
      price: "$120",
      discountPrice: "$100",
      image: "/home/featured/pro1.jpeg",
      description: "Stay warm and stylish this winter.",
    },
    {
      id: 2,
      name: "Pro 2",
      price: "$85",
      discountPrice: "$70",
      image: "/home/featured/pro7.jpeg",
      description: "Perfect for your daily runs.",
    },
    {
      id: 3,
      name: "Pro 3",
      price: "$200",
      discountPrice: "$180",
      image: "/home/featured/pro8.jpeg",
      description: "Track your fitness goals.",
    },
    {
      id: 4,
      name: "Pro 4",
      price: "$200",
      discountPrice: "$180",
      image: "/home/featured/pro4.jpeg",
      description: "Track your fitness goals.",
    },
    {
      id: 5,
      name: "Pro 5",
      price: "$200",
      discountPrice: "$180",
      image: "/home/featured/pro10.jpeg",
      description: "Track your fitness goals.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-10">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Sale Products</h2>
        <p className="text-gray-600 mb-5 text-sm">Shop the latest deals on our top-selling products.</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-white rounded-md shadow-sm transform transition duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-t-md rounded-b-md"
                />
                {/* Sale Tag */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-sm shadow-md">
                  Sale
                </div>
              </CardHeader>
              <CardContent className="p-1">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mb-1">{product.description}</p>
                <p className="text-sm text-gray-400 line-through">{product.price}</p>
                <p className="text-base font-semibold text-red-500">{product.discountPrice}</p>
              </CardContent>
              <CardFooter className="flex justify-center p-5">
                <Button className="bg-red-500 text-white px-3 py-1 rounded-sm text-xs hover:bg-red-600 hover:shadow-sm transition duration-300">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleProducts;
