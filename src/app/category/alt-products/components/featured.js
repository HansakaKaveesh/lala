"use client"
import { useEffect, useState } from "react";

import { FaRegStar, FaStar } from 'react-icons/fa'; // Font Awesome icons


export default function PremiumHero() {
  const messages = [
    {
      title: "Explore Our Premium ALT Collection",
      subtitle: "Discover timeless designs crafted for elegance and luxury.",
    },
    {
      title: "Luxury Meets Style",
      subtitle: "Handpicked pieces to elevate every space you step into.",
    },
    {
      title: "Exquisite Craftsmanship",
      subtitle: "Blending innovation with tradition in every detail.",
    },
    {
      title: "Live Premium, Live Beautiful",
      subtitle: "Curated selections that reflect your refined taste.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
         setLeftIndex((prev) => (prev + 1) % leftImages.length);
        setRightIndex((prev) => (prev + 1) % rightImages.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

   // Arrays of image URLs for each side
  const leftImages = ["/images/featured1.jpg", "/images/featured1.1.jpeg"];
  const rightImages = ["/images/featured2.jpg", "/images/featured2.1.jpeg"];

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);


   
   
 
  const featuredImages = [
    {
      id: 1,
      src: '/images/premium1.jpeg',
      hoverSrc: '/images/premium1.1.jpeg',
      title: 'ALT 15',
      price: '$199.00',
    },
    {
      id: 2,
      src: '/images/premium2.jpeg',
      hoverSrc: '/images/premium2.1.jpeg',
      title: 'ALT 16',
      price: '$49.00',
    },
    {
      id: 3,
      src: '/images/premium3.jpeg',
      hoverSrc: '/images/premium3.1.jpeg',
      title: 'ALT 17',
      price: '$149.00',
    },
    {
      id: 4,
      src: '/images/premium4.jpeg',
      hoverSrc: '/images/premium4.1.jpeg',
      title: 'ALT 18',
      price: '$89.00',
    },
    {
      id: 5,
      src: '/images/premium5.jpeg',
      hoverSrc: '/images/premium5.1.jpeg',
      title: 'ALT 19',
      price: '$89.00',
    },
    {
      id: 6,
      src: '/images/premium6.jpeg',
      hoverSrc: '/images/premium6.1.jpeg',
      title: 'ALT 20',
      price: '$89.00',
    },
    {
      id: 7,
      src: '/images/premium7.jpeg',
      hoverSrc: '/images/premium7.1.jpeg',
      title: 'ALT 21',
      price: '$89.00',
    },
    {
      id: 8,
      src: '/images/premium8.jpeg',
      hoverSrc: '/images/premium8.1.jpeg',
      title: 'ALT 22',
      price: '$89.00',
    },
    {
      id: 9,
      src: '/images/premium9.jpeg',
      hoverSrc: '/images/premium9.1.jpeg',
      title: 'ALT 23',
      price: '$89.00',
    },
    {
      id: 10,
      src: '/images/premium10.jpeg',
      hoverSrc: '/images/premium10.1.jpeg',
      title: 'ALT 24',
      price: '$89.00',
    },
    {
      id: 11,
      src: '/images/premium11.jpeg',
      hoverSrc: '/images/premium11.1.jpeg',
      title: 'ALT 25',
      price: '$89.00',
    },
    {
      id: 12,
      src: '/images/premium12.jpeg',
      hoverSrc: '/images/premium12.1.jpeg',
      title: 'ALT 26',
      price: '$89.00',
    },
  ];

  const [hovered, setHovered] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
   <section id= "featured">
    <div className="w-full bg-white py-10 px-4 md:px-16 mt-20 sm:mt-50">
    <div className="mt-4 sm:mt-20 md:mt-0 flex flex-col lg:flex-row items-stretch gap-6">


      {/* Left Image */}
      <div className="flex-1 overflow-hidden">
        <img
          src={leftImages[leftIndex]}
          alt="Left Promo"
          className={`w-full h-full object-cover rounded-md transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Center Promo Content */}
      <div className="flex flex-col justify-center text-center lg:w-[30%] p-6 bg-gray-50 rounded-md shadow-md text-black">
        <h2 className="text-xl font-semibold mb-2">SPEND & SAVE</h2>
        <p className="text-sm mb-2">Ends Sunday</p>
        <p className="text-lg font-bold">$50 OFF</p>
        <p className="text-sm mb-2">when you spend $150</p>
        <p className="text-lg font-bold">$100 OFF</p>
        <p className="text-sm mb-4">when you spend $300</p>
        <p className="mb-4 text-sm">
  <span className="bg-yellow-300 text-black px-2 py-1 rounded">
    📍 In-store purchases only
  </span>
</p>

         <p className="text-sm font-bold">🧥 Explore our Collections & Alt Collections </p>
         <p className="text-sm mb-2">Visit Us Today!</p>
        <a href="#" className="text-xs text-gray-500 mt-2 underline">
          View conditions
        </a>
      </div>

      {/* Right Image */}
      <div className="flex-1 overflow-hidden">
        <img
          src={rightImages[rightIndex]}
          alt="Right Promo"
          className={`w-full h-full object-cover rounded-md transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>

{/* Bottom Featured Grid */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

  {/* Card 1 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[500px]">
      <img
        src="/images/premium1.jpeg"
        alt="Elegant Dress"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium1.1.jpeg"
        alt="Elegant Dress Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 01</h3>
      <p className="text-gray-800">$120.00</p>
    </div>
  </div>

  {/* Card 2 - Two stacked cards */}
 <div className="flex flex-col gap-4 mt-0">
  {/* Top Image */}
  <div className="relative bg-white rounded-md shadow-md overflow-visible group w-full max-w-[300px] mx-auto">
  <div className="relative w-full h-[200px]">
    {/* Default image */}
    <img
      src="/images/hero1.1.jpeg"
      alt="Summer Top"
      className="w-full h-full object-fix transition-opacity duration-300 group-hover:opacity-0 rounded-md"
    />
    {/* Hover image */}
    <img
      src="/images/hero4.1.jpeg"
      alt="Summer Top Hover"
      className="w-full h-full object-fix absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
    />
  </div>
  <div className="absolute top-2 right-2 z-30">
    <button className="text-yellow-400 text-xl">&#9733;</button>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-black">ALT 02</h3>
    <p className="text-gray-800">$45.00</p>
  </div>
</div>


  {/* Bottom Image */}
  <div className="relative bg-white rounded-md shadow-md overflow-visible group w-full max-w-[300px] mx-auto">
  <div className="relative w-full h-[200px]">
    {/* Default image */}
    <img
      src="/images/alt2.jpeg"
      alt="Summer Top"
      className="w-full h-full object-fix transition-opacity duration-300 group-hover:opacity-0 rounded-md"
    />
    {/* Hover image */}
    <img
      src="/images/alt2.1.jpeg"
      alt="Summer Top Hover"
      className="w-full h-full object-fix absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
    />
  </div>
  <div className="absolute top-2 right-2 z-30">
    <button className="text-yellow-400 text-xl">&#9733;</button>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-black">ALT 03</h3>
    <p className="text-gray-800">$45.00</p>
  </div>
</div>

</div>


  {/* Card 3 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[500px]">
      <img
        src="/images/premium3.jpeg"
        alt="Premium Gown"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium3.1.jpeg"
        alt="Premium Gown Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 04</h3>
      <p className="text-gray-800">$150.00</p>
    </div>
  </div>

</div>


<div className="flex flex-col lg:flex-row gap-4 mt-10">
  {/* Left Side - One Tall Image */}
 <div className="w-full lg:w-2/4 p-0 m-0">
  <video
    src="/videos/88b06fc36930fdaf8ea3d162259cc2ef.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[400px] lg:h-[800px] object-cover rounded-md transition duration-500 block"
  >
    Your browser does not support the video tag.
  </video>
</div>



  {/* Right Side - 3x2 Grid of Images */}
  <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-4">
  {/* Image 1 Card */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium9.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium9.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 09</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  


  {/* Image 2 */}
 <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium10.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium10.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 10</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  

  {/* Image 3 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium11.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium11.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 11</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  
  {/* Image 4 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium5.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium5.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 12</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  

  {/* Image 5 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium11.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium11.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 13</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  

  {/* Image 6 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium2.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium2.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 14</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  
</div>

</div>


</div>

    <div className="relative  overflow-hidden m-0 p-0 mb-20">
      {/* Background image */}
<img
  src="/images/hero_06.jpeg"
  alt="Premium Products"
  className="w-screen h-[300px] md:h-auto object-fill"
/>
  
  {/* Text content */}
     <div className="absolute top-32 md:top-[150px] left-4 md:left-10 z-10">

  <div
    className={`transition-opacity duration-1000 ${
      fade ? "opacity-100" : "opacity-0"
    }`}
  >
    <h1 className="text-white text-xl md:text-5xl font-bold mb-2 md:mb-3">
      {messages[currentIndex].title}
    </h1>
    <p className="text-white text-sm md:text-xl max-w-xs md:max-w-lg">
      {messages[currentIndex].subtitle}
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row gap-4 mt-10">
  {/* Left Side - One Tall Image */}
 <div className="w-full md:w-2/4">
 <img
        src="/images/3cbd035d1fc1f73b17d04d7ee9fc7e6d-removebg-preview.png"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
   
</div>


  {/* Right Side - 2x2 Grid of Images */}
 <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
  {/* Image 1 Card */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium9.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium9.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 09</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  {/* Image 2 */}
 <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium10.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium10.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 10</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  {/* Image 3 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium11.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium11.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 11</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>

  
  {/* Image 4 */}
  <div className="relative bg-white rounded-md shadow-md overflow-hidden group">
    <div className="relative w-full h-[300px]">
      <img
        src="/images/premium5.jpeg"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/images/premium5.1.jpeg"
        alt="Classic Blouse Hover"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"
      />
    </div>
    <div className="absolute top-2 right-2 z-10">
      <button className="text-yellow-400 text-xl">&#9733;</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black">ALT 12</h3>
      <p className="text-gray-800">$89.00</p>
    </div>
  </div>


</div>
  <div className="w-full md:w-2/4">
 <img
        src="/images/6e252793a97ddec1971d0519ebe2dc57-removebg-preview.png"
        alt="Classic Blouse"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
   
</div>
</div>

{/* All Featured Products Grid */}
<div className="mt-16 px-4 md:px-16">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {featuredImages.map((item) => (
      <div
        key={item.id}
        className="relative bg-white text-blackrounded-md shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setHovered(item.id)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Toggleable star icon */}
        <div className="absolute top-2 right-2 z-10 cursor-pointer text-yellow-400 text-xl">
          {favorites.includes(item.id) ? (
            <FaStar onClick={() => toggleFavorite(item.id)} />
          ) : (
            <FaRegStar onClick={() => toggleFavorite(item.id)} />
          )}
        </div>

        {/* Product Image */}
        <img
          src={hovered === item.id ? item.hoverSrc : item.src}
          alt={item.title}
          className="w-full h-64 object-cover transition-all duration-300"
        />

        {/* Product Info */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-black">{item.title}</h3>
          <p className="text-gray-600">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>

    </section>
  );
}

