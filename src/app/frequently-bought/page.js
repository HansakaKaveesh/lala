"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from "../components/HeaderAll";

const products = [
    { id: 1, name: 'Pro 01', price: 50, image: '/products/new/id-1 book.jpeg', category: 'Accessories' },
  { id: 2, name: 'Pro 02', price: 70, image: '/products/new/id-2 book.jpeg', category: 'Accessories' },
  { id: 3, name: 'Pro 03', price: 40, image: '/products/new/id-3 book.jpeg', category: 'Accessories' },
  { id: 4, name: 'Pro 04', price: 80, image: '/products/new/id-4 book.jpeg', category: 'Accessories' },
  { id: 5, name: 'Pro 05', price: 50, image: '/products/new/id-5 book.jpeg', category: 'Accessories' },
  { id: 6, name: 'Pro 06', price: 70, image: '/products/new/id-6 bag.jpeg', category: 'Bag' },
  { id: 7, name: 'Pro 07', price: 40, image: '/products/new/id-7 bag.jpeg', category: 'Bag' },
  { id: 8, name: 'Pro 08', price: 80, image: '/products/new/id-8 bag.jpeg', category: 'Bag' },
  { id: 9, name: 'Pro 09', price: 50, image: '/products/new/id-9 bag.jpeg', category: 'Bag' },
  { id: 10, name: 'Pro 10', price: 70, image: '/products/new/id-10 bag.jpeg', category: 'Bag' },
  { id: 11, name: 'Pro 11', price: 40, image: '/products/tops/id-11 top.jpg', category: 'Tops' },
  { id: 12, name: 'Pro 12', price: 80, image: '/products/tops/id-12 top.jpg', category: 'Tops' },
  { id: 13, name: 'Pro 13', price: 50, image: '/products/tops/id-13 top.jpg', category: 'Tops' },
  { id: 14, name: 'Pro 14', price: 70, image: '/products/tops/id-14 top.jpg', category: 'Tops' },
  { id: 15, name: 'Pro 15', price: 40, image: '/products/tops/id-15 top.jpg', category: 'Tops' },
];

export default function FrequentlyBought() {
    const searchParams = useSearchParams();
    const productId = parseInt(searchParams.get('id'));
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
  
    const handleAddToBag = () => {
      console.log('Added to bag:', { ...product, quantity });
      alert(`Added ${quantity} item(s) to bag!`);
    };
  
    const handleBuyNow = () => {
      console.log('Buying now:', { ...product, quantity });
      alert(`Proceeding to checkout with ${quantity} item(s)...`);
    };
  
    const handleIncrement = () => {
      setQuantity(prev => prev + 1);
    };
  
    const handleDecrement = () => {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };
  
    useEffect(() => {
      const selectedProduct = products.find((p) => p.id === productId);
      setProduct(selectedProduct);
    }, [productId]);
  
    if (!product) return <p>Product not found</p>;
  
    return (
        <div>
  <Header />
  
  <div className="mt-10 md:mt-14 p-4 md:p-8 max-w-6xl mx-auto space-y-6 md:space-y-8">
    <div className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row gap-6 md:gap-10">
      {/* Product Image Section */}
      <div className="relative group w-full md:w-auto">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 md:w-96 md:h-96 object-contain rounded-lg md:rounded-xl border-2 border-gray-100 p-4 transform group-hover:scale-105 transition-transform duration-200"
        />
        <button className="absolute top-2 right-2 md:top-4 md:right-4 p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-100 transition-colors">
          ❤️
        </button>
      </div>
      
      {/* Product Info Section */}
      <div className="flex-1 space-y-4 md:space-y-6">
        <div>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 md:px-3 md:py-1 rounded-full mb-2">
            {product.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold text-gray-900 mb-2">{product.name}</h2>
          <div className="flex items-center space-x-2 mb-3">
            ⭐⭐⭐⭐⭐
            <span className="text-xs md:text-sm text-gray-500">(128 reviews)</span>
          </div>
          <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            ${product.price}
            <span className="text-base md:text-lg text-gray-500 ml-2">+ FREE Shipping</span>
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="pb-4 md:pb-6 border-b border-gray-100">
            <h3 className="text-md md:text-lg font-semibold mb-3 text-gray-700">Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-gray-600">
              {/* ... highlight items ... */}
              <li className="flex items-center">
  👖 Premium quality denim
</li>
<li className="flex items-center">
  🌱 Sustainably sourced fabric
</li>
<li className="flex items-center">
  🛡️ Durable & long-lasting
</li>
<li className="flex items-center">
  🎨 Available in multiple washes
</li>
<li className="flex items-center">
  🚚 Fast & free shipping
</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
            <div className="space-y-1 mb-3 md:mb-0">
              <span className="text-base md:text-lg font-semibold text-gray-700">Quantity</span>
              <p className="text-xs md:text-sm text-gray-500">Available in stock: 15</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              {/* ... quantity buttons ... */}
              <button
                onClick={handleDecrement}
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  quantity === 1 
                    ? 'bg-gray-100 cursor-not-allowed' 
                    : 'bg-white border-2 border-blue-200 hover:bg-blue-50'
                }`}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="w-12 text-center text-xl font-medium">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="w-10 h-10 rounded-lg bg-white border-2 border-blue-200 hover:bg-blue-50 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <button 
              className="h-12 md:h-14 bg-blue-600 text-white rounded-lg md:rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              🛍️ Add to Bag
            </button>
            <button 
              className="h-12 md:h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg md:rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90"
            >
              ⚡ Buy Now
            </button>
          </div>

          <div className="text-center pt-2 md:pt-4">
            <p className="text-xs md:text-sm text-gray-500">
              🔒 Secure checkout guaranteed. 30-day return policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }