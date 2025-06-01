import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";


const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
     

      <main className="flex-grow">
       
        <section
          className="relative h-96 flex items-center justify-center text-white text-5xl font-bold bg-cover bg-center"
          style={{ backgroundImage: "url('/about_hero_bg.jpg')" }} 
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h1 className="relative z-10">ABOUT US</h1>
        </section>

        {/* First Content Section (Text & Image) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Text Content - Left Side on larger screens */}
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We are the mass producer of biomass fuels. We are specialized in biomass pellet making and manufacturing of domestic stoves, commercial and industrial burners. With our strong research and development, we provide complete consultancy and end-to-end support to our customers. We ensure the reliability of supply, sustainable production, and quality of the product. Our focus is to provide a cost-saving alternate heat energy solution to our clients.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                The world is committing to an ambitious reduction in carbon emissions. Our products are designed to replace the use of fossils and wood, lessening burden over declining natural resources. We ensure a carbon-neutral cycle in our energy production processes.
              </p>
            </div>

            {/* Image - Right Side on larger screens */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/3d_cartoon_world.png" // Assuming this image is in your public directory
                alt="3D Cartoon World illustrating sustainability"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Section: Hands holding plant with text overlay */}
        <section
          className="relative py-24 bg-cover bg-center text-white flex items-center justify-start px-4 md:px-0"
          style={{ backgroundImage: "url('/hands_plant_bg.jpg')" }} // Name it something like 'hands_plant_bg.jpg'
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="container mx-auto relative z-10 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Pak Bioenergy is a mass producer of biomass fuels. We are specialized in pellet making and supply domestic stoves and commercial and industrial burners. With our strong research and development, we provide complete consultancy and end-to-end support to our customers. We ensure the reliability of supply, sustainable production, and quality of the product. Our focus is to provide a cost-saving alternate heat energy solution to our clients.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              As the world is committing to an ambitious reduction in carbon emissions. Our products are designed to replace the use of fossils and wood. Lessening burden over declining natural resources. We ensure a carbon-neutral cycle in our energy solution.
            </p>
          </div>
        </section>

        {/* NEW SECTION: Sustainable */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Image on left */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/sustainability_givaudan.jpg" // Assuming this image is in your public directory
                alt="Hands holding green plant"
                width={500}
                height={500} // Adjust height to maintain aspect ratio
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content on right */}
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-green-500 mr-4"></div> {/* Green line */}
                <h2 className="text-3xl font-semibold text-gray-800">Sustainable</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Biomass energy fuels provide significant possibilities for reducing greenhouse gas emissions due to their immense potential to replace fossil fuels in energy production. Biomass reduces emissions and enhances carbon sequestration since short-rotation crops or forests established on abandoned agricultural land accumulate carbon in the soil. Biomass energy usually provides an irreversible mitigation effect by reducing carbon dioxide at source; however, it may emit more carbon per unit of energy than fossil fuels unless biomass fuels are produced sustainably.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Biomass resources can play a major role in reducing the reliance on fossil fuels by making use of thermo-chemical conversion technologies. In addition, the increased utilization of biomass-based fuels will be instrumental in safeguarding the environment, generating new job opportunities, sustainable development, and health improvements in rural areas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With the continuous increase in the population, there will be a time when fossil fuels will become inadequate or unaffordable. Only the sustainable way in the future to meet the continuously rising demand for energy is to shift over to biomass fuels.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Value To Customers */}
        <section className="py-16 bg-gray-50"> {/* Use a slightly different background for contrast */}
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Text Content on left */}
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-green-500 mr-4"></div> {/* Green line */}
                <h2 className="text-3xl font-semibold text-gray-800">Value To Customers</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our alternate clean energy sources fulfill the rising demand of energy at the time of declining natural resources. Our biomass fuels are reliable, cost efficient, safer, eco-friendly and easy to use.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The commonly used sources of heat energy are fossils. They are not only going inadequate but also expensive. Our biomass fuel helps to save cost and attain the desired heat level to our valuable customers. We get you out of worries of load shedding, low pressure and high bills. We give complete end to end heat energy solutions with 24/7 consultancy.
              </p>
            </div>

            {/* Image on right */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/shaking_hands_video.jpg" // Assuming this image is in your public directory
                alt="Two people shaking hands"
                width={500}
                height={300} // Adjust height to match the image aspect ratio
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

      </main>

      {/* Render your existing Footer component */}
      <Footer/>
    </div>
  );
};

export default AboutUsPage;