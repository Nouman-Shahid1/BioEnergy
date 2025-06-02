"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const EnergySection = () => {
  return (
    <>
      {/* Organic Waste Energy Section */}
      <section className="py-16 px-4 sm:px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Image */}
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src="/images/image2.png"
              alt="Using Organic Waste"
              className="w-full max-w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-left px-2 sm:px-0">
            <hr className="w-20 border-4 border-green-500 mb-6 rounded" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-6 leading-tight">
              Using Organic Waste To Generate Energy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Our products are 100% natural, made from pure agriculture, bio,
              and industrial organic wastes. We ensure clean alternate energy
              sources at an affordable price.
            </p>
            <button className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-5 sm:px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 text-sm sm:text-base">
              Learn More
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Premium Pellets Section */}
      <section className="py-16 px-4 sm:px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left px-2 sm:px-0 order-2 md:order-1">
            <hr className="w-20 border-4 border-green-500 mb-6 rounded" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-6 leading-tight">
              Premium Pellets
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Woodi Pellets stand at the forefront of renewable energy
              solutions. Made from 100% renewable resources, they are designed
              to offer a sustainable alternative to conventional fuels. With
              their high energy density, Woodi Pellets provide maximum
              efficiency, ensuring that users gain more energy per unit. Coupled
              with their low moisture content, these pellets ensure a cleaner
              burn, which contributes to lower emissions and a healthier
              environment. This slide will delve into the unique features that
              make Woodi Pellets an exceptional choice for energy consumption.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 text-sm sm:text-base">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg order-1 md:order-2 hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src="/images/image1.png"
              alt="Pellets"
              className="w-full max-w-full h-auto object-cover"
            />
            {/* Overlay commented out */}
          </div>
        </div>
      </section>
    </>
  );
};

export default EnergySection;
