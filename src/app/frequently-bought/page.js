"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from "../components/HeaderAll";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
   {
    id: 1,
    name: 'Pro 01',
    price: 50,
    image: '/products/new/id-1 book.jpeg',
    images: [
      '/products/new/id-1 book.jpeg',
      '/products/new/id-2 book.jpeg',
      '/products/new/id-3 book.jpeg'
    ],
    category: 'Accessories'
  },
  {
    id: 2,
    name: 'Pro 02',
    price: 70,
    image: '/products/new/id-2 book.jpeg',
    images: [
      '/products/new/id-2 book.jpeg',
      '/products/new/id-3 book.jpeg',
      '/products/new/id-4 book.jpeg'
    ],
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Pro 03',
    price: 40,
    image: '/products/new/id-3 book.jpeg',
    images: [
      '/products/new/id-3 book.jpeg',
      '/products/new/id-4 book.jpeg',
      '/products/new/id-5 book.jpeg'
    ],
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Pro 04',
    price: 80,
    image: '/products/new/id-4 book.jpeg',
    images: [
      '/products/new/id-4 book.jpeg',
      '/products/new/id-5 book.jpeg',
      '/products/new/id-1 book.jpeg'
    ],
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'Pro 05',
    price: 50,
    image: '/products/new/id-5 book.jpeg',
    images: [
      '/products/new/id-5 book.jpeg',
      '/products/new/id-1 book.jpeg',
      '/products/new/id-2 book.jpeg'
    ],
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Pro 06',
    price: 70,
    image: '/products/new/id-6 bag.jpeg',
    images: [
      '/products/new/id-6 bag.jpeg',
      '/products/new/id-7 bag.jpeg',
      '/products/new/id-8 bag.jpeg'
    ],
    category: 'Bag'
  },
  {
    id: 7,
    name: 'Pro 07',
    price: 40,
    image: '/products/new/id-7 bag.jpeg',
    images: [
      '/products/new/id-7 bag.jpeg',
      '/products/new/id-8 bag.jpeg',
      '/products/new/id-9 bag.jpeg'
    ],
    category: 'Bag'
  },
  {
    id: 8,
    name: 'Pro 08',
    price: 80,
    image: '/products/new/id-8 bag.jpeg',
    images: [
      '/products/new/id-8 bag.jpeg',
      '/products/new/id-9 bag.jpeg',
      '/products/new/id-10 bag.jpeg'
    ],
    category: 'Bag'
  },
  {
    id: 9,
    name: 'Pro 09',
    price: 50,
    image: '/products/new/id-9 bag.jpeg',
    images: [
      '/products/new/id-9 bag.jpeg',
      '/products/new/id-10 bag.jpeg',
      '/products/new/id-6 bag.jpeg'
    ],
    category: 'Bag'
  },
  {
    id: 10,
    name: 'Pro 10',
    price: 70,
    image: '/products/new/id-10 bag.jpeg',
    images: [
      '/products/new/id-10 bag.jpeg',
      '/products/new/id-6 bag.jpeg',
      '/products/new/id-7 bag.jpeg'
    ],
    category: 'Bag'
  },
  {
    id: 11,
    name: 'Pro 11',
    price: 40,
    image: '/products/tops/id-11 top.jpg',
    images: [
      '/products/tops/id-11 top.jpg',
      '/products/tops/id-12 top.jpg',
      '/products/tops/id-13 top.jpg'
    ],
    category: 'Tops'
  },
  {
    id: 12,
    name: 'Pro 12',
    price: 80,
    image: '/products/tops/id-12 top.jpg',
    images: [
      '/products/tops/id-12 top.jpg',
      '/products/tops/id-13 top.jpg',
      '/products/tops/id-14 top.jpg'
    ],
    category: 'Tops'
  },
  {
    id: 13,
    name: 'Pro 13',
    price: 50,
    image: '/products/tops/id-13 top.jpg',
    images: [
      '/products/tops/id-13 top.jpg',
      '/products/tops/id-14 top.jpg',
      '/products/tops/id-15 top.jpg'
    ],
    category: 'Tops'
  },
  {
    id: 14,
    name: 'Pro 14',
    price: 70,
    image: '/products/tops/id-14 top.jpg',
    images: [
      '/products/tops/id-14 top.jpg',
      '/products/tops/id-15 top.jpg',
      '/products/tops/id-11 top.jpg'
    ],
    category: 'Tops'
  },
  {
    id: 15,
    name: 'Pro 15',
    price: 40,
    image: '/products/tops/id-15 top.jpg',
    images: [
      '/products/tops/id-15 top.jpg',
      '/products/tops/id-11 top.jpg',
      '/products/tops/id-12 top.jpg'
    ],
    category: 'Tops'
  }
];

export default function FrequentlyBought() {
  const searchParams = useSearchParams();
  const productId = parseInt(searchParams.get('id'));
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
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
    setMainImage(selectedProduct?.image || '');
  }, [productId]);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Header />

      <div className="mt-10 md:mt-14 p-4 md:p-8 max-w-6xl mx-auto space-y-6 md:space-y-8">
        <Card className="hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-8">
            {/* Product Image + Thumbnails */}
            <div className="w-full md:w-auto">
              <div className="relative group">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-64 md:w-96 md:h-96 object-contain rounded-xl border-2 border-gray-100 p-4 transform group-hover:scale-105 transition-transform duration-200"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-100"
                >
                  ❤️
                </Button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 justify-center flex-wrap">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImage(img)}
                    className={`w-16 h-16 object-contain border rounded-lg cursor-pointer transition ${
                      mainImage === img ? 'border-blue-500' : 'hover:border-blue-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-6">
              <div>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 mb-2">
                  {product.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <div className="flex items-center space-x-2 mb-3">
                  ⭐⭐⭐⭐⭐
                  <span className="text-sm text-gray-500">(128 reviews)</span>
                </div>
                <p className="text-4xl font-bold text-blue-600">
                  ${product.price}
                  <span className="text-lg text-gray-500 ml-2">+ FREE Shipping</span>
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                  <li>👖 Premium quality denim</li>
                  <li>🌱 Sustainably sourced fabric</li>
                  <li>🛡️ Durable & long-lasting</li>
                  <li>🎨 Available in multiple washes</li>
                  <li>🚚 Fast & free shipping</li>
                </ul>
              </div>

              {/* Quantity */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div>
                  <span className="text-lg font-semibold text-gray-700">Quantity</span>
                  <p className="text-sm text-gray-500">Available in stock: 15</p>
                </div>
                <div className="flex items-center gap-3 mt-3 md:mt-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleDecrement}
                    disabled={quantity === 1}
                    className={quantity === 1 ? "cursor-not-allowed opacity-50" : ""}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center text-xl font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleAddToBag}>
                  🛍️ Add to Bag
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90" onClick={handleBuyNow}>
                  ⚡ Buy Now
                </Button>
              </div>

              {/* Footer Note */}
              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Secure checkout guaranteed. 30-day return policy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
