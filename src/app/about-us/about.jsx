"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Economica, Poppins, Oxygen } from "next/font/google";
import sustain from "../../../public/images/C-scaled.png";
import handshake from "../../../public/images/handshake.png";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";
const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const economica = Economica({
  weight: ["700"],
  subsets: ["latin"],
});

const slides = [
  "http://bioenergy.com.pk/wp-content/uploads/2023/10/volumetric-drop-with-ecosystem-inside-generative-ai-scaled.jpg",
  "http://bioenergy.com.pk/wp-content/uploads/2023/10/abstract-creative-3d-sphere-with-vegetation-scaled.jpg",
  "http://bioenergy.com.pk/wp-content/uploads/2023/10/biomass-pellet.jpg",
  "http://bioenergy.com.pk/wp-content/uploads/2023/10/C-scaled.webp",
];

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[78vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slides.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1
            className={`
          text-white uppercase text-center tracking-tight
          ${economica.className}
          text-[5rem] leading-[5rem] 
          sm:text-[6rem] sm:leading-[6rem]
          md:text-[7rem] md:leading-[7rem]
          lg:text-[8rem] lg:leading-[8rem]
          xl:text-[9rem] xl:leading-[9rem]
          2xl:text-[10rem] 2xl:leading-[10rem]
        `}
            style={{ wordBreak: "break-word" }}
          >
            ABOUT US
          </h1>
        </div>
      </section>

      <section className="w-full px-4 md:px-16 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="relative mb-6">
              <span className="block w-14 h-1 bg-green-500 rounded-sm mb-2"></span>
            </div>
            <p
              className={`text-gray-800 text-left leading-relaxed mb-4 ${poppins.className} text-base sm:text-lg md:text-xl`}
            >
              Sindh Bio Energy is committed to providing environmentally
              friendly and cost-effective energy solutions through high-quality
              wood pellets, reducing reliance on fossil fuels, and promoting a
              cleaner, greener future. We strive to be a leading provider of
              biomass energy solutions, recognized for our commitment to
              environmental stewardship, quality, and customer satisfaction.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="https://bioenergy.com.pk/wp-content/uploads/2023/11/view-graphic-3d-earth-globe-scaled.jpg"
              alt="Eco Earth"
              width={600}
              height={500}
              className="rounded-lg shadow-lg max-w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://bioenergy.com.pk/wp-content/uploads/2023/10/noah-buscher-x8ZStukS2PM-unsplash-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e20]/70 to-[#2E86AB]/60 z-0" />
        <div className="relative z-10 max-w-4xl px-6 sm:px-8 md:px-20 py-20 sm:py-32 md:py-48 text-left">
          <p
            className={`text-white text-sm sm:text-base font-medium leading-[1.7] mb-6 ${poppins.className}`}
          >
            Sindh Bio Energy is a mass producer of biomass fuels...
          </p>
          <p
            className={`text-white text-sm sm:text-base font-medium leading-[1.7] ${poppins.className}`}
          >
            As the world is committing to an ambitious reduction...
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 mt-0 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <div className="w-full md:w-1/2 flex-shrink-0 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] relative rounded overflow-hidden shadow-md">
            <Image
              src={sustain}
              alt="Sustainable Energy"
              fill
              className="object-cover rounded"
              placeholder="blur"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative mb-6">
              <span className="block w-14 h-1 bg-green-500 rounded-sm mb-2"></span>
            </div>
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold capitalize text-[#61CE70] mb-4 ${oxygen.className}`}
            >
              Sustainable
            </h1>
            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed text-base sm:text-lg md:text-lg ${poppins.className}`}
            >
              Biomass energy fuels provide significant possibilities...
            </p>
            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed text-base sm:text-lg md:text-lg ${poppins.className}`}
            >
              Biomass resources can play a major role...
            </p>
            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed text-base sm:text-lg md:text-lg ${poppins.className}`}
            >
              With the continuous increase in the population...
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 mt-0 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex items-center">
            <div>
              <div className="relative mb-6">
                <span className="block w-14 h-1 bg-green-500 rounded-sm mb-2"></span>
              </div>
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl font-semibold capitalize text-[#61CE70] mb-4 ${oxygen.className}`}
              >
                Value to customers
              </h1>
              <p
                className={`text-gray-700 mb-4 text-justify leading-relaxed text-base sm:text-lg md:text-lg ${poppins.className}`}
              >
                Our alternate clean energy sources fulfill the rising demand...
              </p>
              <p
                className={`text-gray-700 mb-4 text-justify leading-relaxed text-base sm:text-lg md:text-lg ${poppins.className}`}
              >
                The commonly used sources of heat energy are fossils...
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex-shrink-0 min-h-[250px] sm:min-h-[300px] md:min-h-[500px] relative rounded overflow-hidden shadow-md">
            <Image
              src={handshake}
              alt="Sustainable Energy"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
