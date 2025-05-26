"use client"
import { useState } from 'react';
import Header from "../../components/HeaderAll";
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



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
<div className="w-full lg:w-80 space-y-8" role="region" aria-label="Product Filters">
  <Card className="shadow-lg hover:shadow-xl transition-shadow border border-gray-50">
    <CardHeader className="flex justify-between items-center mb-2 p-6 pb-0">
      <CardTitle className="text-2xl font-serif">Filter Products</CardTitle>
      <Button
        variant="link"
        className="text-rose-600 hover:text-rose-700 p-0 h-auto text-sm font-medium transition-transform active:scale-95"
        onClick={() => {
          setSearch('');
          setCategoryFilter('');
          setPriceFilter([0, 100]);
          setColorFilter('');
        }}
        title="Clear all filters"
        aria-label="Clear all filters"
      >
        Clear All
      </Button>
    </CardHeader>

    <CardContent className="p-6 pt-2 space-y-8">

      {/* Search */}
      <div>
        <Label htmlFor="search" className="mb-2 block text-sm font-medium text-gray-700">Search</Label>
        <Input
          id="search"
          placeholder="Type to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-describedby="searchHelp"
        />
        <p id="searchHelp" className="mt-1 text-xs text-gray-500">Search products by name or description</p>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-wide">Product Category</h3>
        <div className="space-y-2">
          {['Bag', 'Tops', 'Accessories'].map((cat) => (
            <Button
              key={cat}
              variant="ghost"
              onClick={() => setCategoryFilter(cat === categoryFilter ? '' : cat)}
              className={`w-full justify-between text-left rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 ${
                categoryFilter === cat ? 'bg-blue-500 text-white hover:bg-blue-600' : ''
              }`}
              aria-pressed={categoryFilter === cat}
              title={`Filter by category: ${cat}`}
            >
              <span>{cat}</span>
              {categoryFilter === cat && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </Button>
          ))}
        </div>
      </div>

{/* Color Filter */}
<div>
  <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-wide">Color</h3>
  <div className="flex flex-wrap gap-2">
    {products.length === 0 ? (
      <p className="text-gray-500 text-sm italic">No colors available</p>
    ) : (
      [...new Set(products.map((product) => product.color).filter(Boolean))].map((color) => (
        <Button
          key={color}
          variant="outline"
          onClick={() => setColorFilter(color === colorFilter ? '' : color)}
          className={`w-8 h-8 p-0 rounded-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 flex items-center justify-center ${
            colorFilter === color
              ? 'bg-blue-100 border-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]'
              : 'bg-muted border-gray-300 hover:bg-gray-100'
          }`}
          aria-pressed={colorFilter === color}
          aria-label={`${color} color filter ${colorFilter === color ? 'selected' : 'not selected'}`}
          title={`Filter by color: ${color}`}
        >
          <span
            className="w-5 h-5 rounded-full border border-gray-300 transition-colors duration-300 hover:border-blue-500"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
        </Button>
      ))
    )}
  </div>
</div>



      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4 tracking-wide">Price Range</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <Label htmlFor="price-min" className="sr-only">Minimum Price</Label>
            <Input
              id="price-min"
              type="number"
              min="0"
              max={priceFilter[1]}
              value={priceFilter[0]}
              onChange={(e) => {
                let val = Math.min(Math.max(Number(e.target.value), 0), priceFilter[1]);
                setPriceFilter([val, priceFilter[1]]);
              }}
              className="w-20"
              aria-describedby="priceRangeHelp"
            />
          </div>
          <span aria-hidden="true">-</span>
          <div className="flex flex-col">
            <Label htmlFor="price-max" className="sr-only">Maximum Price</Label>
            <Input
              id="price-max"
              type="number"
              min={priceFilter[0]}
              max="100"
              value={priceFilter[1]}
              onChange={(e) => {
                let val = Math.max(Math.min(Number(e.target.value), 100), priceFilter[0]);
                setPriceFilter([priceFilter[0], val]);
              }}
              className="w-20"
              aria-describedby="priceRangeHelp"
            />
          </div>
        </div>
        <p id="priceRangeHelp" className="mt-1 text-xs text-gray-500">Set minimum and maximum price between $0 and $100</p>
      </div>

    </CardContent>
  </Card>
</div>



        {/* Products Display */}
<div
  className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
  role="list"
>
  {filteredProducts.map((product) => (
    <Card
      key={product.id}
      role="listitem"
      className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 focus-within:ring-2 focus-within:ring-blue-500"
      tabIndex={0}
      aria-label={`${product.name} product card`}
    >
      <div className="overflow-hidden">
        <img
          src={product.image || '/fallback-image.png'}
          alt={product.name}
          title={product.name}
          className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/fallback-image.png';
          }}
        />
      </div>

      {product.stock === 0 && (
        <span
          className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg select-none"
          aria-label="Out of stock"
        >
          Out of Stock
        </span>
      )}

      <CardContent className="p-5 bg-white">
        <CardTitle className="text-xl font-semibold text-gray-900 mb-1 truncate" title={product.name}>
          {product.name}
        </CardTitle>

        <CardDescription className="text-gray-700 text-base mb-2">
          ${product.price.toFixed(2)}
        </CardDescription>

        <p
          className={`mb-3 font-medium ${
            product.stock > 0 ? 'text-green-600' : 'text-red-600'
          }`}
          aria-live="polite"
        >
          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
        </p>

        <Button
          onClick={() => handleAddToBag(product.id)}
          disabled={product.stock === 0}
          aria-disabled={product.stock === 0}
          title={product.stock === 0 ? 'This product is currently out of stock' : 'Add to Bag'}
          className={`w-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          variant={product.stock > 0 ? 'default' : 'secondary'}
        >
          Add to Bag
        </Button>
      </CardContent>
    </Card>
  ))}
</div>



        </div>
      </div>
    </div>
  );
}
