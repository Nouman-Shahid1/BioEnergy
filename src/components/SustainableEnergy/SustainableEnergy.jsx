"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SustainableEnergy = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-10 bg-white">
        <div className="flex-1 max-w-full md:max-w-[600px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-8 md:mb-10">
            Empowering the Planet with Smart Energy Solutions
          </h2>

          <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-start">
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/images/energy4.png"
                alt="Energy in World"
                width={100}
                height={100}
                className="w-[70px] sm:w-[90px] md:w-[100px]"
              />
              <p className="text-green-600 font-semibold mt-4 text-sm sm:text-base">
                Energy in world
              </p>
            </div>

            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/images/Heat Energy.png"
                alt="Heat Energy"
                width={100}
                height={100}
                className="w-[70px] sm:w-[90px] md:w-[100px]"
              />
              <p className="text-green-600 font-semibold mt-4 text-sm sm:text-base">
                Heat Energy
              </p>
            </div>

            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/images/Energy Crisis.png"
                alt="Energy Crisis"
                width={100}
                height={100}
                className="w-[70px] sm:w-[90px] md:w-[100px]"
              />
              <p className="text-green-600 font-semibold mt-4 text-sm sm:text-base">
                Energy Crisis
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-md md:max-w-lg h-[280px] sm:h-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-md group">
          <Image
            src="/images/Green.jpg"
            alt="Green Forest"
            fill
            className="object-cover brightness-75 group-hover:brightness-90 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-14 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4">
              We Aims To “Provide Clean Energy <br /> To Our Global Users”
            </h3>
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 transition text-sm sm:text-base">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <section className="px-5 md:px-20 py-16 bg-gradient-to-t from-green-50 to-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-12 border-l-4 border-green-500 pl-4 max-w-4xl mx-auto">
          Flexible Energy Systems for All Environments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {[
            { title: "DOMESTIC STOVES", image: "/images/Domestic Stove.jpg" },
            {
              title: "COMMERCIAL BURNERS",
              image: "/images/commercial burners.png",
            },
            {
              title: "INDUSTRIAL BURNERS",
              image: "/images/ind burner.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 sm:h-52 md:h-64 object-cover transition-transform group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 bg-opacity-30 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <Link
                  href={{
                    pathname: "/products",
                    query: { title: item.title, image: item.image },
                  }}
                  passHref
                >
                  <button className="text-white font-medium flex items-center gap-2 group-hover:underline text-sm sm:text-base">
                    MORE <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SustainableEnergy;
