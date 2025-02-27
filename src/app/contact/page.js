// app/contact/page.jsx
import Header from "../components/HeaderAll";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
    return (
      <div>
        <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="text-center mb-12 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-5xl font-extrabold text-blue-600 mb-4 flex items-center justify-center">
              Get in Touch
            </h1>
                <p className="text-lg text-gray-700 ">We'd love to hear from you. Let's start a conversation!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Business Street<br/>New York, NY 10001</p>
                  </div>
                </div>
  
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567<br/>Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
  
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">support@company.com<br/>info@company.com</p>
                  </div>
                </div>
              </div>
  
              {/* Social Media Links */}
              <div className="pt-8 border-t border-gray-200">
    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
      <svg 
        className="w-5 h-5 mr-2 text-gray-700" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      Connect With Us
    </h3>
    <div className="flex space-x-4">
      {[
        { 
          name: 'facebook',
          icon: FaFacebook,
          url: 'https://www.facebook.com/yourpage',
          color: 'text-[#1877F2]',
          hoverColor: 'hover:text-[#1877F2]/90'
        },
        {
          name: 'twitter',
          icon: FaTwitter,
          url: 'https://twitter.com/yourhandle',
          color: 'text-[#1DA1F2]',
          hoverColor: 'hover:text-[#1DA1F2]/90'
        },
        {
          name: 'linkedin',
          icon: FaLinkedinIn,
          url: 'https://www.linkedin.com/company/yourcompany',
          color: 'text-[#0A66C2]',
          hoverColor: 'hover:text-[#0A66C2]/90'
        },
        {
          name: 'instagram',
          icon: FaInstagram,
          url: 'https://www.instagram.com/yourprofile',
          color: 'text-[#E1306C]',
          hoverColor: 'hover:text-[#E1306C]/90'
        }
      ].map((social) => (
        <a 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-gray-50 hover:bg-${social.color.split('-')[1].slice(1, -1)}/10 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md`}
          aria-label={`Follow us on ${social.name}`}
        >
          <social.icon 
            className={`w-6 h-6 ${social.color} ${social.hoverColor} transition-colors`}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  </div>
            </div>
  
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
  
          {/* Map Section */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428752!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bd3ae54773%3A0x15c8c11f3f3a458a!2s123%20Business%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1629781001459!5m2!1sen!2s"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
    );
  }