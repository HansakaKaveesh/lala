// components/SocialMediaBar.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function SocialMediaBar() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 px-4 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex space-x-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Centered and Compact Search Bar */}
        <div className="flex items-center space-x-2 bg-gray-700 rounded-full px-2 py-1 w-full md:w-auto md:mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full md:w-48 text-sm"
          />
          <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
