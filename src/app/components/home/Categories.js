// components/Categories.js
export function Categories() {
  return (
    <section id="categories" className="py-8 bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-12 ">
  {[
    {
      img: "New.jpg",
      alt: "New Arrivals",
      title: "New Arrivals",
      color: "text-blue-600",
      description: "Check out the latest collections and trends.",
    },
    {
      img: "Denim.jpg",
      alt: "Denim",
      title: "Denim",
      color: "text-indigo-600",
      description: "Explore our premium denim selection for every style.",
    },
    {
      img: "Tops.jpg",
      alt: "Tops",
      title: "Tops",
      color: "text-teal-600",
      description: "Find stylish tops for any occasion.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out p-8 rounded-2xl text-center w-80 mx-auto"
    >
      <img
        src={item.img} // Replace with your image URL
        alt={item.alt}
        className="w-28 h-28 mx-auto mb-5 object-cover rounded-full border-4 border-gray-200"
      />
      <h3 className={`text-2xl font-bold ${item.color} mb-4`}>{item.title}</h3>
      <p className="text-gray-500 text-base">{item.description}</p>
    </div>
  ))}
</div>

    </section>
  );
}
