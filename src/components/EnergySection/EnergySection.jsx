"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const EnergySection = () => {
  return (
    <>
      {/* Organic Waste Energy Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src="/images/image 2.png"
              alt="Using Organic Waste"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-left">
            <hr className="w-20 border-4 border-green-500 mb-6 rounded" />
            <h2 className="text-4xl font-extrabold text-green-600 mb-6 leading-tight">
              Using Organic Waste To Generate Energy
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-xl leading-relaxed">
              Our products are 100% natural, made from pure agriculture, bio,
              and industrial organic wastes. We ensure clean alternate energy
              sources at an affordable price.
            </p>
            <button className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300">
              Learn More
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Premium Pellets Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left order-2 md:order-1">
            <hr className="w-20 border-4 border-green-500 mb-6 rounded" />
            <h2 className="text-4xl font-extrabold text-green-600 mb-6 leading-tight">
              Premium Pellets
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-xl leading-relaxed">
              Wood Pellets are a type of solid fuel made from compressed organic
              material like sawdust and agricultural wastes. Categorized by
              heating value, moisture, ash content, and size, they are ideal for
              power generation, commercial or residential heating, and cooking.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300">
              Learn More
            </button>
          </div>

          {/* Image with subtle overlay text (commented for now) */}
          <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg order-1 md:order-2 hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src="/images/image1.png"
              alt="Pellets"
              className="w-full h-full object-cover"
            />
            {/* Uncomment and customize if you want overlay text */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-8 flex flex-col justify-center rounded-lg">
              <hr className="w-20 border-2 border-white mb-4 rounded" />
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
