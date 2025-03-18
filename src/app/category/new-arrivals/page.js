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
        <div className="w-full lg:w-80 space-y-8">
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900 font-serif">Filter Products</h2>
      <button 
        onClick={() => { setSearch(''); setCategoryFilter(''); setPriceFilter([0, 100]) }}
        className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors"
      >
        Clear All
      </button>
    </div>

    {/* Search Bar */}
    <div className="mb-8">
      <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg 
            className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
          placeholder="Type to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>

    {/* Category Filter */}
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-wide">Product Category</h3>
      <div className="space-y-2">
        {['Bag', 'Denim', 'Tops', 'Accessories'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat === categoryFilter ? '' : cat)}
            className={`w-full px-4 py-2.5 text-left rounded-lg flex items-center justify-between transition-all 
              ${categoryFilter === cat 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}
          >
            <span>{cat}</span>
            {categoryFilter === cat && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>

    {/* Price Filter */}
    <div>
      <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4 tracking-wide">Price Range</h3>
      <div className="bg-blue-50 p-4 rounded-xl">
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>${priceFilter[0]}</span>
          <span>${priceFilter[1]}</span>
        </div>
        <div className="relative">
          <div className="h-1 bg-blue-100 rounded-full">
            <div 
              className="h-full bg-blue-500 rounded-full absolute" 
              style={{ 
                left: `${(priceFilter[0]/100)*100}%`, 
                right: `${100 - (priceFilter[1]/100)*100}%` 
              }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={priceFilter[0]}
            onChange={(e) => setPriceFilter([+e.target.value, priceFilter[1]])}
            className="absolute w-full h-1 appearance-none pointer-events-none opacity-0"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={priceFilter[1]}
            onChange={(e) => setPriceFilter([priceFilter[0], +e.target.value])}
            className="absolute w-full h-1 appearance-none pointer-events-none opacity-0"
          />
          <div className="relative">
            <div 
              className="absolute h-4 w-4 bg-blue-500 rounded-full -top-1.5 transform -translate-x-1/2 shadow-lg"
              style={{ left: `${(priceFilter[0]/100)*100}%` }}
            />
            <div 
              className="absolute h-4 w-4 bg-blue-500 rounded-full -top-1.5 transform -translate-x-1/2 shadow-lg"
              style={{ left: `${(priceFilter[1]/100)*100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Products Grid */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredProducts.map((product) => (
      <div 
        key={product.id} 
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1.5"
      >
        <div className="relative aspect-square overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform transition-all duration-500 ease-in-out group-hover:scale-105" 
          />
          {product.isNew && (
            <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-rose-600 rounded-full shadow-sm">
              New Arrival
            </span>
          )}
        </div>
        
        <div className="p-6">
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {product.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 truncate mb-2 font-serif">
            {product.name}
          </h3>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-gray-400">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <button
              onClick={() => handleAddToBag(product.id)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-[1.03] active:scale-95 shadow-sm hover:shadow-md"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Bag
            </button>
          </div>
          
          {product.stockStatus && (
            <div className="mt-3 flex items-center text-sm text-gray-500">
              <span className={`inline-block w-2 h-2 rounded-full mr-2 ${product.stockStatus === 'In Stock' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              {product.stockStatus}
            </div>
          )}
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