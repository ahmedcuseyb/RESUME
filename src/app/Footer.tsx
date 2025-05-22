'use client'; // Ensure it's a client component

import { FaWhatsapp, FaFacebookMessenger, FaPhoneAlt, FaArrowUp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-gray-300 py-4 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left: Copyright */}
        <div className="text-sm text-center md:text-left">
          © {currentYear} All Rights Reserved
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 mt-2 md:mt-0">
          {/* Social Media Links can go here if needed */}
        </div>
      </div>

      {/* Floating Buttons (Fixed) */}
      <div className="fixed right-4 bottom-8 flex flex-col space-y-4">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/252613174074"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:bg-green-600 transition"
        >
          <FaWhatsapp className="w-6 h-6 text-white" />
        </a>

        {/* Messenger Icon (Updated with Messenger link) */}
        <a
          href="https://www.facebook.com/ahmedbicir.ohirsi" // Replace with your Messenger link
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition"
        >
          <FaFacebookMessenger className="w-6 h-6 text-white" />
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+252613174074"
          className="block md:hidden w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition"
        >
          <FaPhoneAlt className="w-6 h-6 text-white" />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://https://www.linkedin.com/in/ahmed-cuseyb/" // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center shadow-md hover:bg-blue-800 transition"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </a>

       

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition"
        >
          <FaArrowUp className="w-6 h-6 text-white" />
        </button>
      </div>
    </footer>
  );
}
