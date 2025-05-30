'use client';

import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0c1525] text-white text-sm flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>03453777766</span>
        </div>
        <div className="flex space-x-4">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 cursor-pointer">
            <img src="/logo.png" alt="Pak Bioenergy" className="h-10" />
            <div>
              <h1 className="text-lg font-bold">PAK BIOENERGY</h1>
              <p className="text-xs text-gray-600">Clean Heat Energy Solutions</p>
            </div>
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="/about-us" className="hover:text-green-600">About Us</a></li>
            <li><a href="/products" className="hover:text-green-600">Products</a></li>
            <li><a href="/renewable-energy" className="hover:text-green-600">Renewable Energy</a></li>
            <li><a href="/contact-us" className="hover:text-green-600">Contact Us</a></li>
          </ul>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Always render, just toggle visibility */}
        <ul
          className={`md:hidden px-4 pb-4 space-y-2 font-medium transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <li><a href="/about-us" className="block hover:text-green-600">About Us</a></li>
          <li><a href="/products" className="block hover:text-green-600">Products</a></li>
          <li><a href="/renewable-energy" className="block hover:text-green-600">Renewable Energy</a></li>
          <li><a href="/contact-us" className="block hover:text-green-600">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
