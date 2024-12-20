// components/ProductShowcase.js
export function ProductShowcase() {
  return (
    <section id="products" className="py-8 bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {/* Product 1 */}
        <div className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-xl overflow-hidden max-w-xs mx-auto">
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-md z-10">
            New
          </div>
          <img
            src="/home/featured/pro1.jpeg"
            alt="Product 1"
            className="w-full h-40 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name 1</h3>
          <p className="text-sm font-semibold text-blue-600 mb-3">$49.99</p>
          <a
            href="#"
            className="block mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-500 transition-all duration-300"
          >
            View Details
          </a>
        </div>

        {/* Product 2 */}
        <div className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-xl overflow-hidden max-w-xs mx-auto">
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-md z-10">
            Sale
          </div>
          <img
            src="/home/featured/pro3.jpeg"
            alt="Product 2"
            className="w-full h-40 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name 2</h3>
          <p className="text-sm font-semibold text-blue-600 mb-3">$59.99</p>
          <a
            href="#"
            className="block mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-500 transition-all duration-300"
          >
            View Details
          </a>
        </div>

        {/* Product 3 */}
        <div className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-xl overflow-hidden max-w-xs mx-auto">
          <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-md z-10">
            Hot
          </div>
          <img
            src="/home/featured/pro6.jpeg"
            alt="Product 3"
            className="w-full h-40 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name 3</h3>
          <p className="text-sm font-semibold text-blue-600 mb-3">$39.99</p>
          <a
            href="#"
            className="block mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-500 transition-all duration-300"
          >
            View Details
          </a>
        </div>

        {/* Product 4 */}
        <div className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-xl overflow-hidden max-w-xs mx-auto">
          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-md z-10">
            Featured
          </div>
          <img
            src="/home/featured/pro10.jpeg"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name 4</h3>
          <p className="text-sm font-semibold text-blue-600 mb-3">$39.99</p>
          <a
            href="#"
            className="block mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-500 transition-all duration-300"
          >
            View Details
          </a>
        </div>

        {/* Product 5 */}
        <div className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-xl overflow-hidden max-w-xs mx-auto">
          <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-bold py-1 px-2 rounded-md z-10">
            Limited
          </div>
          <img
            src="/home/featured/pro5.jpeg"
            alt="Product 5"
            className="w-full h-40 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name 5</h3>
          <p className="text-sm font-semibold text-blue-600 mb-3">$39.99</p>
          <a
            href="#"
            className="block mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-500 transition-all duration-300"
          >
            View Details
          </a>
        </div>

        {/* Product 6 */}
        <div className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-xl overflow-hidden max-w-xs mx-auto">
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-md z-10">
            Trending
          </div>
          <img
            src="/home/featured/pro7.jpeg"
            alt="Product 6"
            className="w-full h-40 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name 6</h3>
          <p className="text-sm font-semibold text-blue-600 mb-3">$39.99</p>
          <a
            href="#"
            className="block mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-500 transition-all duration-300"
          >
            View Details
          </a>
        </div>

        {/* Add additional products as needed */}
      </div>
    </section>
  );
}
