'use client'; // This marks the component as a client component

import React from 'react';

const saleProducts = [
  { id: 1, name: 'Product 1', image: '/home/featured/pro1.jpeg', originalPrice: 50, discountedPrice: 30 },
  { id: 2, name: 'Product 2', image: '/home/featured/pro2.jpeg', originalPrice: 100, discountedPrice: 60 },
  { id: 3, name: 'Product 3', image: '/home/featured/pro3.jpeg', originalPrice: 75, discountedPrice: 50 },
  { id: 4, name: 'Product 1', image: '/home/featured/pro4.jpeg', originalPrice: 50, discountedPrice: 30 },
  { id: 5, name: 'Product 2', image: '/home/featured/pro5.jpeg', originalPrice: 100, discountedPrice: 60 },
  { id: 6, name: 'Product 3', image: '/home/featured/pro6.jpeg', originalPrice: 75, discountedPrice: 50 },
  { id: 7, name: 'Product 1', image: '/home/featured/pro7.jpeg', originalPrice: 50, discountedPrice: 30 },
  { id: 8, name: 'Product 2', image: '/home/featured/pro10.jpeg', originalPrice: 100, discountedPrice: 60 },
];

const SaleProducts = () => {
  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
    // Add logic to add product to cart
  };

  const handleBuyNow = (productId) => {
    console.log(`Product ${productId} purchased`);
    // Add logic for checkout or immediate purchase
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">Sale Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">{product.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
                <span className="text-xl font-bold text-red-500">${product.discountedPrice}</span>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleProducts;
