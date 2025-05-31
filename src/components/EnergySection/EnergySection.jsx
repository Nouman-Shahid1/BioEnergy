"use client";
import Image from "next/image";

import React from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ChevronRight } from "lucide-react";

const EnergySection = () => {
  return (
    <>
      {/* Organic Waste Energy Section (Now First) */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full h-auto">
            <img
              src="/images/" // Replace with your image path
              alt="Using Organic Waste"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Text Content */}
          <div className="text-left">
            <hr className="w-16 border-2 border-green-400 mb-4" />
            <h2 className="text-3xl font-bold text-green-500 mb-4">
              Using Organic Waste To Generate Energy
            </h2>
            <p className="text-gray-700 text-base mb-6">
              Our products are 100% natural. Made up of pure agriculture, bio, and industrial
              organic wastes. Ensuring you clean alternate energy sources at an affordable price.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition duration-300">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Premium Pellets Section (Now Lower Side) */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-green-500 mb-4">
              PREMIUM PELLETS
            </h2>
            <p className="text-gray-700 text-base mb-6">
              Wood Pellets are a type of solid fuel made from compressed organic material like
              saw dust and other agricultural wastes. Pellets are categorized by their heating
              value, moisture and ash content, and dimensions. They can be used as fuels for power
              generation, commercial or residential heating, and cooking.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Image with Overlaid Text */}
          <div className="relative w-full h-auto">
            <img
              src="/images/pellets.png" // Ensure this image exists in your public/images directory
              alt="Pellets"
              className="w-full h-auto object-cover rounded-md"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-6 flex flex-col justify-center">
              <hr className="w-16 border-2 border-white mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Manufacturing Biomass Fuels To Provide Cheaper, Safe And Eco-Friendly Solutions
              </h3>
            </div> */}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default EnergySection;
