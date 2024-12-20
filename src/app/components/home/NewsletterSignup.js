// components/NewsletterSignup.js
export function NewsletterSignup() {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 animate-fade-in">
        <h2 className="text-3xl font-semibold mb-4 drop-shadow-lg">Stay Updated</h2>
        <p className="text-sm mb-6 leading-relaxed">
          Sign up for exclusive deals, updates, and exciting offers. Join the community!
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full sm:w-2/3 rounded-md shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs opacity-80">
          We value your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
