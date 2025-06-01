"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#003300] text-white pt-16 pb-8 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url("/images/image 2.png")' }}
        ></div>

        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Section 1: Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold">PAK BIOENERGY</span>
              </div>
              <p className="text-[#a3c93c] font-medium">
                Clean Heat Energy Solutions
              </p>
              <p className="text-sm max-w-xs">
                Fulfilling your heat energy demand reliably and efficiently
              </p>
              <div className="flex items-start text-sm mt-4">
                <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  {" "}
                  Site Sindh Bio Energy Lakhat Road Tando Muhammad Khan
                </span>
              </div>
              <div className="flex items-center text-sm mt-2">
                <FaPhoneAlt className="mr-2" />
                <span>03453777766</span>
              </div>
              <div className="flex items-center text-sm mt-2">
                <FaEnvelope className="mr-2" />
                <span>Sindhbioenergy.pk@gmail.com</span>
              </div>
            </div>

            {/* Section 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/about-us"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/renewable-energy"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Renewable Energy
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Section 3: Follow Us + Our Team */}
            <div className="space-y-4">
              {/* Follow Us */}
              <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a3c93c] transition-colors"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a3c93c] transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a3c93c] transition-colors"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
              </div>

              {/* Our Team */}
              <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 mt-6">
                Our Team
              </h3>
              <div className="flex space-x-4">
                <div className="text-center">
                  <img
                    src="/images/pic2.jpg"
                    alt="Founder"
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <p className="text-sm mt-2 font-semibold">Arif Ali Kazmi </p>
                  <p className="text-xs text-gray-400">CEO</p>
                </div>
                <div className="text-center">
                  <img
                    src="/images/pic1.jpg"
                    alt="CEO"
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <p className="text-sm mt-2 font-semibold">Muhammad Ramzan</p>
                  <p className="text-xs text-gray-400">Resident Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Separator */}
          <div className="border-t border-gray-600 my-8"></div>
        </div>
      </footer>

      {/* Black Copyright Bar */}
      <div className="bg-black text-white text-center py-4">
        <div className="container mx-auto">
          <p className="text-sm">© 2023. All rights reserved. Pak Bioenergy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
