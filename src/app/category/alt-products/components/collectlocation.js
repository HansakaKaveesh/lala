// components/CollectLocation.js
export default function CollectLocation() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat mb-12"
      style={{ backgroundImage: "url('/images/location.jpeg')" }} // Replace with your image
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

      {/* Content on top */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Premium Collection Center</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          You can collect your exclusive fashion items at our premium location in Colombo City Center.
        </p>
        <a
          href="https://maps.google.com/?q=Colombo+City+Center" // Use actual location
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          View Location on Map
        </a>
      </div>
    </section>
  );
}
