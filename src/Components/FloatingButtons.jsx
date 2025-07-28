import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col rounded-l-3xl z-50 space-y-2"
      aria-label="Contact buttons"
    >
      {/* WhatsApp Button */}
      <button
        className="group flex items-center h-20 w-20 hover:w-36 transition-all duration-300 pl-4 pr-6 bg-[#2ecc71] text-white font-semibold text-lg rounded-l-3xl overflow-hidden"
        aria-label="WhatsApp contact button"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button
        className="group flex items-center h-20 w-20 hover:w-36 transition-all duration-300 pl-4 pr-6 bg-[#6a1b7d] text-white font-semibold text-lg rounded-l-3xl overflow-hidden"
        aria-label="Phone contact button"
      >
        <FaPhoneAlt className="text-3xl" />
        <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Phone
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
