"use client"
import { useState } from 'react';
import Header from "../../components/HeaderAll";
import { useRouter } from 'next/navigation';

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

export default function NewArrivals() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState([0, 100]);
  const router = useRouter();
  const handleAddToBag = (productId) => {
    router.push(`/frequently-bought?id=${productId}`);
  };

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === '' || product.category === categoryFilter) &&
      product.price >= priceFilter[0] && product.price <= priceFilter[1]
    );
  });

  return (
    <div>
      <Header />
    <div className=" min-h-screen bg-gray-50">
      
       {/* Advertisement Section */}
       <div className="relative bg-gray-50 overflow-hidden ">
        <div className=" mt-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Summer Sale!
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Get up to 50% off on selected items. Limited time offer!
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                    Shop Now
                  </button>
                  <button className="px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:border-white/50 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img
                  src="https://cdn.create.vista.com/downloads/70904e7d-cf8f-4ef0-8521-d4e20a5980ac_1024.jpeg" // Replace with your advertisement image
                  alt="Summer Sale"
                  className="w-full max-w-md mx-auto transform rotate-6 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-72 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg 
                  className="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-3">Category</h3>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Bag">Bags</option>
                <option value="Denim">Denim</option>
                <option value="Tops">Tops</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceFilter[0]}</span>
                  <span>${priceFilter[1]}</span>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceFilter[0]}
                    onChange={(e) => setPriceFilter([+e.target.value, priceFilter[1]])}
                    className="w-full h-1 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceFilter[1]}
                    onChange={(e) => setPriceFilter([priceFilter[0], +e.target.value])}
                    className="w-full h-1 bg-blue-100 rounded-lg appearance-none cursor-pointer mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square overflow-hidden rounded-t-xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-blue-600 uppercase">{product.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <button
                      onClick={() => handleAddToBag(product.id)}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                        >
                        Add to Bag
                        </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}