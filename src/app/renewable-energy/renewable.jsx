"use client";
import Footer from "@/components/Footer/Footer";
import React from "react";
import { Economica, Poppins, Oxygen } from "next/font/google";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const economica = Economica({ subsets: ["latin"], weight: ["400", "700"] });

// Main Renewable component
const Renewable = () => {
  return (
    <div className="font-inter antialiased text-gray-800 bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white "
        style={{
          backgroundImage:
            "url('https://bioenergy.com.pk/wp-content/uploads/2023/10/C-scaled.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center p-4 ">
          <h1
            className={`text-[113.611px] leading-[113.611px] text-white uppercase text-center tracking-tight font-bold ${economica.className}`}
          >
            RENEWABLE ENERGY
          </h1>
          {/* <p className="text-xl">Helping World To Grow Sustainably</p> */}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Energy In World */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Energy In World
            </h2>
            <p className="text-gray-700 mb-4">
              It is power derived from the utilization of physical or chemical
              resources, especially to provide light and heat or to work
              machines. It is the basic need of every person, household, and
              industry.
            </p>
            <p className="text-gray-700">
              The world currently consumes about 100 million barrels of oil a
              day. While the IEA projects increasing use of renewables, improved
              energy efficiency, and a shift toward electric vehicles, solar
              energy, and biomass fuels
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/energy.jpg"
              alt="Energy Source"
              className="rounded-xl shadow-md"
            />
            <p className="text-gray-600 text-sm mt-2"></p>
          </div>
        </section>

        {/* Heat Energy */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img
              src="/images/energy3.png"
              alt="Heat Energy"
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Heat Energy
            </h2>
            <p className="text-gray-700 mb-4">
              Heat energy is a basic utility in everyday life. It is a must
              requirement in daily food preparation, industrial processing, and
              various manufacturing and commercial activities. Heat energy is
              needed in stoves of every household, burners, and boilers of every
              industry, and commercial-level food preparation at restaurants and
              hotels.
            </p>
            <p className="text-gray-700">
              Now a day the reliance on fossil fuels for heat energy is
              continuously declining. The world is seeking alternatives to get
              heat energy reliably, sustainably, and cost-efficiently. Natural
              gas that is commonly used is declining and getting expensive. In
              Pakistan, the gas connection to new housing schemes is abandoned,
              and the same for various industrial units. It is the right time to
              shift towards eco-friendly and cost-saving solutions like biomass
              fuels
            </p>
          </div>
        </section>

        {/* Energy Crisis */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Energy Crisis
            </h2>
            <p className="text-gray-700 mb-4">
              The energy crisis is a society-wide economic problem caused by a
              constricted supply of energy, leading to diminished availability
              and increased prices to consumers. The energy crisis is the
              concern that the world demands on the limited natural resources
              that are used to power industrial society are diminishing with the
              rising demand.
            </p>
            <p className="text-gray-700">
              This problem is not only restricted to any specific community or
              locality. It is worldwide, however, the intensity differ.
              Developing countries face an energy crisis as they do not have
              enough reserves to buy or extract natural resources. And even
              developed European countries are currently facing a severe energy
              crisis due to political tensions and changing climate.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/energy2.png"
              alt="Oil Rig"
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Helping World To Grow Sustainably */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Helping World To Grow Sustainably
            </h2>
            <p className="text-gray-700 mb-4">
              With an increasing population and declining natural resources, the
              world is facing a severe crisis in various areas like scared
              resources, increased carbon emissions and greenhouse gases, energy
              shortfall, and pollution.
            </p>
            <p className="text-gray-700">
              While making clean and affordable energy we ensure responsible
              consumption and production. Helping people generate decent incomes
              alongside practicing industry innovation and sustainable
              communities. We are contributing to 8 SDGs directly. In our
              manufacturing process, we are not adding or extracting further
              carbons from the earth core. We are converting waste materials to
              usable energy sources. Ensuring 100% clean energy.
            </p>
            <p className="text-gray-700">
              We aim to play a dominating role in the sustainable development
              and growth of society. We are contributing to a strong economy by
              helping industries run and boom. We help them avoiding industrial
              shut downs due to the energy crisis. We help those commercial
              activities revive and generate excessive margins. Alongside it
              helps in the expansion of GDP and makes a balance of payments for
              the country.
            </p>
            <br></br>
            <p className="text-gray-700">
              We are also contributing to the betterment of life on land. By
              providing people with an alternate option for fuel, we are
              lessening the burden in forests. They are massively cutting for
              heat purposes. It is one of our major contributions toward climate
              action. Our model is carefully designed for a win-win situation of
              us and our all stakeholders including the customers, government,
              United Nations, and our beloved planet earth
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/BN.png"
              alt="Sustainable Goals"
              className="rounded-full shadow-lg w-80 h-80 object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Renewable;
