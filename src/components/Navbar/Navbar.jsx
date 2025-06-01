"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0c1525] text-white text-sm flex justify-between items-center px-4 md:px-8 py-2">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+92 3003316071</span>
        </div>
        <div className="flex space-x-4">
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-md text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
         <a href="/" className="flex items-center gap-2 cursor-pointer">
  <img
    src="/images/logo-bg remove.jpg"
    alt="Pak Bioenergy"
    className="h-16 w-auto"
  />
  <div className="leading-tight">
    <h1 className="text-xl font-bold text-black">SINDH BIOENERGY</h1>
    <p className="text-sm text-gray-700">Clean and Cost-Effective Energy Solution
</p>
  </div>
</a>


          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <a href="/about-us" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-green-600">
                Products
              </a>
            </li>
            <li>
              <a href="/renewable-energy" className="hover:text-green-600">
                Renewable Energy
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-green-600">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden px-4 md:px-8 pb-4 space-y-2 font-medium transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="/about-us" className="block hover:text-green-600">
              About Us
            </a>
          </li>
          <li>
            <a href="/products" className="block hover:text-green-600">
              Products
            </a>
          </li>
          <li>
            <a href="/renewable-energy" className="block hover:text-green-600">
              Renewable Energy
            </a>
          </li>
          <li>
            <a href="/contact-us" className="block hover:text-green-600">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
