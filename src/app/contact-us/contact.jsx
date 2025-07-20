"use client";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import { Economica, Poppins, Oxygen } from "next/font/google";
import Head from "next/head";
import SEO from "@/components/SEO";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const economica = Economica({ subsets: ["latin"], weight: ["400", "700"] });

const ContactPage = () => {
  return (
   <>
     <SEO
  title="Our Products | Sindh Bio Energy"
  description="Explore our eco-friendly bioenergy products like wood pellets and biomass fuel. Perfect for industrial heating and sustainable energy solutions in Pakistan."
  keywords="wood pellets pakistan, biomass fuel, bioenergy products, industrial heating fuel, clean fuel alternative, sindh wood fuel, boiler fuel, لکڑی کی گولیاں, بایوماس فیول, متبادل ایندھن, صنعتی ایندھن, صاف توانائی کے حل, سندھ میں لکڑی کا ایندھن"
/>
<div className="flex flex-col min-h-screen">
  <main className="flex-grow">
    <section
      className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-white font-bold bg-cover bg-center px-4"
      style={{
        backgroundImage:
          'url("https://bioenergy.com.pk/wp-content/uploads/2023/10/noah-buscher-x8ZStukS2PM-unsplash-scaled.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <h1
        className={`relative z-10 text-center uppercase tracking-tight text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] leading-tight ${economica.className}`}
      >
        CONTACT US
      </h1>
    </section>

    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 rounded-lg border border-black shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600 group">
            <FaMapMarkerAlt className="text-green-600 text-4xl mb-3 transition duration-300 group-hover:text-green-800" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Office Address
            </h2>
            <p className="text-gray-600">
              Site Sindh Bio Energy Lakhat Road Tando Muhammad Khan
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-black shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600 group">
            <FaEnvelope className="text-green-600 text-4xl mb-3 transition duration-300 group-hover:text-green-800" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Email Address
            </h2>
            <p className="text-gray-600">Sindhbioenergy.pk@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-black shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600 group">
            <FaPhoneAlt className="text-green-600 text-4xl mb-3 transition duration-300 group-hover:text-green-800" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Mobile No
            </h2>
            <p className="text-gray-600">
              +92 300 3316071 Syed Arif Ali Kazmi
            </p>
            <p className="text-gray-600">+92 320 4797676 Muhammad Ramzan</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>

</>
  );
};

export default ContactPage;
