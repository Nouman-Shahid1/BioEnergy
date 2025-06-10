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
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Renewable Energy", href: "/renewable-energy" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Order", href: "/order" },
  ];

  return (
    <header className="w-full">
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

      <nav className="bg-white shadow-md text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/logo-bg remove.jpg"
              alt="Pak Bioenergy"
              className="h-16 w-auto"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-black">SINDH BIOENERGY</h1>
              <p className="text-sm text-gray-700">
                Clean and Cost-Effective Energy Solution

              </p>
            </div>
          </a>
          <ul
            className={`hidden md:flex space-x-8 text-base font-normal ${poppins.className}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`capitalize transition-colors duration-200 ${
                    pathname === link.href ? "text-green-600" : "text-black"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <ul
          className={`md:hidden px-4 md:px-8 pb-4 space-y-2 font-medium transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block hover:text-green-600 ${
                  pathname === link.href ? "text-green-600" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
