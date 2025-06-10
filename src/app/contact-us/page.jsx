"use client";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import { Economica, Poppins, Oxygen } from "next/font/google";



const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const economica = Economica({ subsets: ['latin'], weight: ['400', '700'] });

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
        {/* Hero Section */}
       <section
  className="relative h-[600px] flex items-center justify-center text-white text-5xl font-bold bg-cover bg-center"
  style={{
    backgroundImage: `url("https://bioenergy.com.pk/wp-content/uploads/2023/10/noah-buscher-x8ZStukS2PM-unsplash-scaled.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* Text */}
 <h1
  className={`text-4xl md:text-[113.611px] leading-tight md:leading-[113.611px] text-white uppercase text-center tracking-tight font-bold relative z-10 ${economica.className}`}
>  
    CONTACT US</h1>
</section>


        {/* Contact Info Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Office Address */}
              <div className="bg-white p-6 rounded-lg border border-black shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600 group">
                <FaMapMarkerAlt className="text-green-600 text-3xl mb-3 transition duration-300 group-hover:text-green-800" />
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Office Address
                </h2>
                <p className="text-gray-600">
                  Site Sindh Bio Energy Lakhat Road Tando Muhammad Khan
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg border border-black shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600 group">
                <FaEnvelope className="text-green-600 text-3xl mb-3 transition duration-300 group-hover:text-green-800" />
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Email Address
                </h2>
                <p className="text-gray-600">Sindhbioenergy.pk@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-lg border border-black shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600 group">
                <FaPhoneAlt className="text-green-600 text-3xl mb-3 transition duration-300 group-hover:text-green-800" />
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Mobile No
                </h2>
                <p className="text-gray-600">+92 300 3316071 Syed Arif Ali Kazmi</p>
                <p className="text-gray-600">+92 320 4797676 Muhammad Ramzan</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
