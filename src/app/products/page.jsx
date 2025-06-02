"use client";

import React from "react";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section */}
      <section
  className="relative h-[600px] bg-cover bg-center z-10"
  style={{
    backgroundImage: "url('/images/product.png')",
  }}
>
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider uppercase">
      PRODUCTS
    </h1>
  </div>
</section>

      {/* Premium Pellets Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-stretch md:space-x-12">
          {/* Image with overlay text */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg max-w-xl mx-auto">
            <img
              src="/images/primium.png"
              alt="Premium Pellets"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/6B7280/FFFFFF?text=Image+Not+Found";
              }}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-4xl font-semibold">
                Premium Pellets
              </h2>
            </div>
          </div>

          {/* Text content with background pattern */}
          <div className="w-full md:w-1/2 p-6 bg-[url('/images/.png')] bg-cover bg-no-repeat bg-center rounded-lg shadow-lg text-gray-800 space-y-5 leading-relaxed text-lg">
            <p>
              We are one of Pakistan’s leading biomass pellet producers. Our
              premium pellets are highly compressed ensuring the best quality.
              They provide you maximum temperature & minimum ash content.
            </p>
            <p>
              Pellets are small rounded, spherical, or cylindrical bodies. A
              kind of fuel typically made from compacted sawdust, agriculture,
              and industrial wastes. They are highly efficient, easy to use,
              renewable, and 100% organic.
            </p>
            <p>
              Pellet fuel appliances are almost always less expensive than most
              of fossil fuels, LPG, LNG, electric heating, oil, and
              propane-fueled appliances and even the natural gas in various
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Domestic, Commercial, and Industrial Solutions Section */}
      <section className="bg-gray-100 px-4 py-16 md:py-24 rounded-md">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-16"
          >
            DOMESTIC COMMERCIAL{" "}
            <span className="text-green-600">
              <Typewriter
                words={["AND INDUSTRIAL SOLUTIONS"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          {/* Domestic Stoves */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg overflow-hidden shadow-lg max-h-[400px]">
              <img
                src="/images/Domestic Stove.jpg"
                alt="Domestic Stoves"
                className="w-full h-full object-cover rounded-lg max-h-[400px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 border-b-2 border-green-400 pb-1 inline-block">
                Domestic Stoves
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Biomass stoves are designed for home use, making it easy to cook
                and heat your home with renewable energy. They include
                mechanisms for airflow and ash handling and boast thermal
                efficiency above 90%.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Eco-friendly, smoke-free, and cost-efficient, they are a great
                alternative where natural gas is unavailable or during gas
                shortages in winter.
              </p>
            </div>
          </div>

          {/* Commercial Burners */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-12 mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg overflow-hidden shadow-lg max-h-[400px]">
              <img
                src="/images/commercial burners.png"
                alt="Commercial Burners"
                className="w-full h-full object-cover rounded-lg max-h-[400px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/D1D5DB/374151?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 border-b-2 border-green-400 pb-1 inline-block">
                Commercial Burners
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ideal for bakeries, restaurants, and resorts. These burners
                offer high efficiency, lower costs, and are perfect for
                medium-sized commercial use.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our engineering team offers free consultancy for your business
                to ensure optimal heat energy solutions using biomass fuel.
              </p>
            </div>
          </div>

          {/* Industrial Burners */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg overflow-hidden shadow-lg max-h-[400px]">
              <img
                src="/images/ind burner.jpg"
                alt="Industrial Burners"
                className="w-full h-full object-cover rounded-lg max-h-[400px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/BCC0C7/374151?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 border-b-2 border-green-400 pb-1 inline-block">
                Industrial Burners
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our industrial solutions include boilers and burners customized
                for industries like paper, cement, textiles, and chemicals. We
                provide design, consultancy, and competitive pricing.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                These systems use biomass fuels like pellets to reduce
                environmental impact and offer long-term energy sustainability,
                with excellent efficiency and low maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
