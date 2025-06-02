"use client";

import React from "react";

const SustainableSection = () => {
  return (
    <section
      className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://bioenergy.com.pk/wp-content/uploads/2023/10/noah-buscher-x8ZStukS2PM-unsplash-scaled.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30 flex items-center">
        <div className="max-w-4xl px-4 sm:px-8 md:px-24 mx-auto">
          <hr className="w-14 sm:w-16 border-2 border-green-400 mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            SUSTAINABLE
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-xl">
            Biomass fuels are made up of agriculture residues. Their production
            cycle is carbon neutral, no any extra carbons are extracted from the
            earth core in the generation of biomass fuels.
          </p>
          <button className="bg-white text-green-600 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded hover:bg-green-100 transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SustainableSection;
