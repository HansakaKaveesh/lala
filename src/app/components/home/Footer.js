// components/Footer.js
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-yellow-300 text-black py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold">LALA Studio</h2>
            <p className="mt-3 text-gray-600">
              Your one-stop shop for trendy clothing. Discover the latest
              fashion trends and elevate your wardrobe with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-white focus:outline-none focus:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-600 hover:text-white focus:outline-none focus:underline"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-600 hover:text-white focus:outline-none focus:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-white focus:outline-none focus:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Email:{" "}
              <a
                href="mailto:support@clothsale.com"
                className="hover:text-white focus:outline-none focus:underline"
              >
                support@clothsale.com
              </a>
            </p>
            <p className="mt-2 text-gray-600">Phone: +1 (555) 123-4567</p>
            <p className="mt-2 text-gray-600">
              Address: 123 Fashion Street, New York, NY, USA
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Stay updated on the latest trends and exclusive offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-yellow-100 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-700 rounded-md text-white font-medium hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
           {/* Payment Icons */}
           <div className="flex  space-x-6">
            <SiVisa className="text-yellow-900 text-3xl hover:text-white" />
            <SiMastercard className="text-yellow-900 text-3xl hover:text-white" />
            <SiAmericanexpress className="text-yellow-900 text-3xl hover:text-white" />
          </div>
        </div>

        {/* Middle Section - Social Media */}
        <div className="flex justify-center mt-10 space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-yellow-900 hover:text-white text-2xl focus:outline-none focus:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-yellow-900 hover:text-white text-2xl focus:outline-none focus:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-yellow-900 hover:text-white text-2xl focus:outline-none focus:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-yellow-900 hover:text-white text-2xl focus:outline-none focus:text-white"
          >
            <FaLinkedinIn />
          </a>
          
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10">
          <p className="text-black mb-4">
            &copy; {new Date().getFullYear()} ClothSale. All rights reserved.
          </p>

         
        </div>
      </div>
    </footer>
  );
}
