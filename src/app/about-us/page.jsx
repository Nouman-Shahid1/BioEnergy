"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Economica, Poppins, Oxygen } from "next/font/google";
import sustain from "../../../public/images/C-scaled.png";
import handshake from "../../../public/images/handshake.png";
import Footer from "@/components/Footer/Footer";

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
      <section className="relative h-[78vh] w-full overflow-hidden">
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

        <div className="relative z-10 flex items-center justify-center h-full">
          {/* <h1
            className={`text-[113.611px] leading-[113.611px] text-white uppercase text-center tracking-tight ${economica.className}`}
          > */}
          <h1
  className={`text-4xl md:text-[113.611px] leading-tight md:leading-[113.611px] text-white uppercase text-center tracking-tight font-bold relative z-10 ${economica.className}`}
>
            ABOUT US
          </h1>
        </div>
      </section>

      <section className="w-full px-4 md:px-16 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative mb-6">
              <span className="block w-14 h-1 bg-green-500 rounded-sm mb-2"></span>
            </div>
            {/* <p
              className={`text-gray-800 text-justify leading-relaxed mb-6 ${poppins.className}`}
            >
              Sindh Bio Energy is committed to providing environmentally
              friendly and cost-effective energy solutions through high-quality
              wood pellets, reducing reliance on fossil fuels, and promoting a
              cleaner, greener future. We strive to be a leading provider of
              biomass energy solutions, recognized for our commitment to
              environmental stewardship, quality, and customer satisfaction.
            </p> */}
            <p className={`text-gray-800 text-left leading-normal mb-4 ${poppins.className}`}>
  Sindh Bio Energy is committed to providing environmentally friendly and cost-effective energy solutions through high-quality wood pellets, reducing reliance on fossil fuels, and promoting a cleaner, greener future. We strive to be a leading provider of biomass energy solutions, recognized for our commitment to environmental stewardship, quality, and customer satisfaction.
</p>

            {/* <p className="text-gray-800 text-justify leading-relaxed">
              The world is committing to an ambitious reduction in carbon
              emissions...
            </p> */}
          </div>

          <div className="flex justify-center">
            <Image
              src="https://bioenergy.com.pk/wp-content/uploads/2023/11/view-graphic-3d-earth-globe-scaled.jpg"
              alt="Eco Earth"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
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
        <div className="relative z-10 max-w-4xl px-8 md:px-20 py-32 md:py-48 text-left">
          <p
            className={`text-white text-[15px] md:text-base font-medium leading-[1.7] mb-6 ${poppins.className}`}
          >
            Pak Bioenergy is a mass producer of biomass fuels...
          </p>
          <p
            className={`text-white text-[15px] md:text-base font-medium leading-[1.7] ${poppins.className}`}
          >
            As the world is committing to an ambitious reduction...
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 mt-0 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src={sustain}
                alt="Sustainable Energy"
                fill
                className="object-cover shadow-md"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative mb-6">
              <span className="block w-14 h-1 bg-green-500 rounded-sm mb-2"></span>
            </div>
            <h1
              className={`text-[40px] font-semibold capitalize text-[#61CE70] mb-4 ${oxygen.className}`}
            >
              Sustainable
            </h1>

            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
            >
              Biomass energy fuels provide significant possibilities...
            </p>
            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
            >
              Biomass resources can play a major role...
            </p>
            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
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
                className={`text-[40px] font-semibold capitalize text-[#61CE70] mb-4 ${oxygen.className}`}
              >
                Value to customers
              </h1>

              <p
                className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
              >
                Our alternate clean energy sources fulfill the rising demand...
              </p>
              <p
                className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
              >
                The commonly used sources of heat energy are fossils...
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[500px]">
              <Image
                src={handshake}
                alt="Sustainable Energy"
                fill
                className="object-cover shadow-md"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
