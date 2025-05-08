"use client"
import { useState } from 'react';
import Header from "../../components/HeaderAll";
import { useRouter } from 'next/navigation';

const products = [
  { id: 1, name: 'Pro 01', price: 50, image: '/products/new/id-1 book.jpeg', category: 'Accessories', color: '#FF0000', stock: 10 },
  { id: 2, name: 'Pro 02', price: 70, image: '/products/new/id-2 book.jpeg', category: 'Accessories', color: '#0000FF', stock: 0 },
  { id: 3, name: 'Pro 03', price: 40, image: '/products/new/id-3 book.jpeg', category: 'Accessories', color: '#008000', stock: 5 },
  { id: 4, name: 'Pro 04', price: 80, image: '/products/new/id-4 book.jpeg', category: 'Accessories', color: '#000000', stock: 0 },
  { id: 5, name: 'Pro 05', price: 50, image: '/products/new/id-5 book.jpeg', category: 'Accessories', color: '#FFFFFF', stock: 7 },
  { id: 6, name: 'Pro 06', price: 70, image: '/products/new/id-6 bag.jpeg', category: 'Bag', color: '#FF0000', stock: 3 },
  { id: 7, name: 'Pro 07', price: 40, image: '/products/new/id-7 bag.jpeg', category: 'Bag', color: '#0000FF', stock: 0 },
  { id: 8, name: 'Pro 08', price: 80, image: '/products/new/id-8 bag.jpeg', category: 'Bag', color: '#008000', stock: 4 },
  { id: 9, name: 'Pro 09', price: 50, image: '/products/new/id-9 bag.jpeg', category: 'Bag', color: '#000000', stock: 2 },
  { id: 10, name: 'Pro 10', price: 70, image: '/products/new/id-10 bag.jpeg', category: 'Bag', color: '#FFFFFF', stock: 0 },
  { id: 11, name: 'Pro 11', price: 40, image: '/products/tops/id-11 top.jpg', category: 'Tops', color: '#FF0000', stock: 9 },
  { id: 12, name: 'Pro 12', price: 80, image: '/products/tops/id-12 top.jpg', category: 'Tops', color: '#0000FF', stock: 0 },
  { id: 13, name: 'Pro 13', price: 50, image: '/products/tops/id-13 top.jpg', category: 'Tops', color: '#008000', stock: 6 },
  { id: 14, name: 'Pro 14', price: 70, image: '/products/tops/id-14 top.jpg', category: 'Tops', color: '#000000', stock: 3 },
  { id: 15, name: 'Pro 15', price: 40, image: '/products/tops/id-15 top.jpg', category: 'Tops', color: '#FFFFFF', stock: 0 },
];

export default function NewArrivals() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState([0, 100]);
  const [colorFilter, setColorFilter] = useState('');
  const router = useRouter();

  const handleAddToBag = (productId) => {
    router.push(`/frequently-bought?id=${productId}`);
  };

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === '' || product.category === categoryFilter) &&
      product.price >= priceFilter[0] && 
      product.price <= priceFilter[1] &&
      (colorFilter === '' || product.color === colorFilter)
    );
  });

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Advertisement Section */}
        <div className="relative bg-gray-50 overflow-hidden">
          <div className="mt-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-4xl font-bold text-white mb-4">Summer Sale!</h2>
                  <p className="text-lg text-blue-100 mb-6">Get up to 50% off on selected items. Limited time offer!</p>
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
                    src="https://cdn.create.vista.com/downloads/70904e7d-cf8f-4ef0-8521-d4e20a5980ac_1024.jpeg"
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
                  onClick={() => { 
                    setSearch(''); 
                    setCategoryFilter(''); 
                    setPriceFilter([0, 100]);
                    setColorFilter('');
                  }}
                  className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-8">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
                <input
                  type="text"
                  className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                  placeholder="Type to search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-wide">Product Category</h3>
                <div className="space-y-2">
                  {['Bag', 'Tops', 'Accessories'].map((cat) => (
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

              {/* Color Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-wide">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {[...new Set(products.map(product => product.color))].map((color) => (
                    <button
                      key={color}
                      onClick={() => setColorFilter(color === colorFilter ? '' : color)}
                      className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-2 border ${
                        colorFilter === color 
                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span 
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4 tracking-wide">Price Range</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={priceFilter[0]}
                    onChange={(e) => setPriceFilter([+e.target.value, priceFilter[1]])}
                    className="w-20 p-2 border rounded"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={priceFilter[1]}
                    onChange={(e) => setPriceFilter([priceFilter[0], +e.target.value])}
                    className="w-20 p-2 border rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Display */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filteredProducts.map((product) => (
    <div key={product.id} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-xl mb-4" />
      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
      <p className="text-gray-700 mb-1">${product.price}</p>

      <p className={`mb-2 font-medium ${
        product.stock > 0 ? 'text-green-600' : 'text-red-600'
      }`}>
        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
      </p>

      <button 
        onClick={() => handleAddToBag(product.id)}
        disabled={product.stock === 0}
        className={`px-4 py-2 rounded-full transition-colors ${
          product.stock > 0 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-400 text-white cursor-not-allowed'
        }`}
      >
        Add to Bag
      </button>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}
