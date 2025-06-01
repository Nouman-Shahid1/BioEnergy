"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Economica } from "next/font/google";
import { Poppins } from "next/font/google";
import sustain from "../../../public/images/C-scaled.png";
import handshake from "../../../public/images/handshake.png";

import { Oxygen } from "next/font/google";
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
          <h1
            className={`text-[113.611px] leading-[113.611px] text-white uppercase text-center tracking-tight ${economica.className}`}
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

            <p
              className={`text-gray-800 text-justify leading-relaxed mb-6 ${poppins.className}`}
            >
              We are the mass producer of biomass fuels. We are specialized in
              biomass pellet making and manufacturing of domestic stoves,
              commercial and industrial burners. With our strong research and
              development, we provide complete consultancy and end-to-end
              support to our customers. We ensure the reliability of supply,
              sustainable production, and quality of the product. Our focus is
              to provide a cost-saving alternate heat energy solution to our
              clients.
            </p>
            <p className="text-gray-800 text-justify leading-relaxed">
              The world is committing to an ambitious reduction in carbon
              emissions. Our products are designed to replace the use of fossils
              and wood, lessening burden over declining natural resources. We
              ensure a carbon-neutral cycle in our energy production processes.
            </p>
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
            className={`text-white text-[15px] md:text-base font-medium leading-[1.7] mb-6  ${poppins.className}`}
          >
            Pak Bioenergy is a mass producer of biomass fuels. We are
            specialized in pellet making and supply domestic stoves and
            commercial and industrial burners. With our strong research and
            development, we provide complete consultancy and end-to-end support
            to our customers. We ensure the reliability of supply, sustainable
            production, and quality of the product. Our focus is to provide a
            cost-saving alternate heat solution to our clients.
          </p>
          <p
            className={`text-white text-[15px] md:text-base font-medium leading-[1.7] ${poppins.className}`}
          >
            As the world is committing to an ambitious reduction in carbon
            emissions. Our products are designed to replace the use of fossils
            and wood. Lessening burden over declining natural resources. We
            ensure a carbon-neutral cycle in our energy solution.
          </p>
        </div>
      </section>
      <section className="w-full bg-white py-12 mt-16 px-6 md:px-16">
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
              Biomass energy fuels provide significant possibilities for
              reducing greenhouse gas emissions due to their immense potential
              to replace fossil fuels in energy production. Biomass reduces
              emissions and enhances carbon sequestration since short-rotation
              crops or forests established on abandoned agricultural land
              accumulate carbon in the soil. Biomass energy usually provides an
              irreversible mitigation effect by reducing carbon dioxide at
              source, however, it may emit more carbon per unit of energy than
              fossil fuels unless biomass fuels are produced sustainably.
            </p>
            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
            >
              Biomass resources can play a major role in reducing the reliance
              on fossil fuels by making use of thermo-chemical conversion
              technologies. In addition, the increased utilization of
              biomass-based fuels will be instrumental in safeguarding the
              environment, generating new job opportunities, sustainable
              development, and health improvements in rural areas.
            </p>
            <p
              className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
            >
              With the continuous increase in the population, there will be a
              time when fossil fuels will become inadequate or unaffordable.
              Only the sustainable way in the future to meet the continuously
              rising demand for energy is to shift over to biomass fuels.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 mt-16 px-6 md:px-16">
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
                Our alternate clean energy sources fulfill the rising demand of
                energy at the time of declining natural resources. Our biomass
                fuels are reliable, cost efficient, safer, eco-friendly and easy
                to use.
              </p>
              <p
                className={`text-gray-700 mb-4 text-justify leading-relaxed ${poppins.className}`}
              >
                The commonly used sources of heat energy are fossils. They are
                not only going inadequate but also expensive. Our biomass fuel
                helps to save cost and attain the desired heat level to our
                valuable customers. We get you out of worries of load shedding,
                low pressure and high bills. We give complete end to end heat
                energy solutions with 24/7 consultancy.
              </p>
            </div>
          </div>

          {/* Image Section - Taller */}
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
      <Footer/>
    </>
  );
};

export default AboutPage;
