// components/ProductShowcase.js
export function ProductShowcase() {
  const products = [
    {
      img: "/home/featured/pro1.jpeg",
      alt: "Product 1",
      title: "Product Name 1",
      price: "$49.99",
      label: "New",
      labelColor: "bg-red-500",
    },
    {
      img: "/home/featured/pro3.jpeg",
      alt: "Product 2",
      title: "Product Name 2",
      price: "$59.99",
      label: "Sale",
      labelColor: "bg-green-500",
    },
    {
      img: "/home/featured/pro6.jpeg",
      alt: "Product 3",
      title: "Product Name 3",
      price: "$39.99",
      label: "Hot",
      labelColor: "bg-yellow-500",
    },
    {
      img: "/home/featured/pro10.jpeg",
      alt: "Product 4",
      title: "Product Name 4",
      price: "$39.99",
      label: "Featured",
      labelColor: "bg-blue-500",
    },
    {
      img: "/home/featured/pro5.jpeg",
      alt: "Product 5",
      title: "Product Name 5",
      price: "$39.99",
      label: "Limited",
      labelColor: "bg-purple-500",
    },
    {
      img: "/home/featured/pro7.jpeg",
      alt: "Product 6",
      title: "Product Name 6",
      price: "$39.99",
      label: "Trending",
      labelColor: "bg-orange-500",
    },
  ];

  return (
    <section id="products" className="py-8 bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-xl overflow-hidden max-w-xs mx-auto"
          >
            <div className={`absolute top-2 left-2 ${product.labelColor} text-white text-xs font-bold py-1 px-2 rounded-md z-10`}>
              {product.label}
            </div>
            <img
              src={product.img}
              alt={product.alt}
              className="w-full h-40 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-sm font-semibold text-blue-600 mb-3 truncate">{product.price}</p>
            <a
              href="#"
              className="block mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-500 transition-all duration-300"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
