

'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const SustainableEnergy = () => {
  return (
    <>
      {/* Top Section - Driving The Future Of Sustainable Energy */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 bg-white">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-10">
            Driving The Future Of Sustainable Energy
          </h2>

          <div className="flex flex-wrap gap-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform">
              <Image
                src="/images/Heat Energy.png"
                alt="Energy in World"
                width={100}
                height={100}
              />
              <p className="text-green-600 font-semibold mt-4">Energy in world</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform">
              <Image
                src="/images/Heat Energy.png"
                alt="Heat Energy"
                width={100}
                height={100}
              />
              <p className="text-green-600 font-semibold mt-4">Heat Energy</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform">
              <Image
                src="/images/Energy Crisis.png"
                alt="Energy Crisis"
                width={100}
                height={100}
              />
              <p className="text-green-600 font-semibold mt-4">Energy Crisis</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative h-[400px] w-full rounded-lg overflow-hidden shadow-md group">
          <Image
            src="/images/Green.jpg"
            alt="Green Forest"
            fill
            className="object-cover brightness-75 group-hover:brightness-90 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              We Aims To “Provide Clean Energy <br /> To Our Global Users”
            </h3>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Domestic, Commercial and Industrial Solutions */}
      <section className="px-5 md:px-20 py-16 bg-gradient-to-t from-green-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12 border-l-4 border-green-500 pl-4">
          Domestic Commercial And Industrial Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'DOMESTIC STOVES', image: '/images/Domestic Stove.jpg' },
            { title: 'COMMERCIAL BURNERS', image: '/images/commercial burners.jpg' },
            { title: 'INDUSTRIAL BURNERS', image: '/images/industrial-burner.jpg' },
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
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                <button className="text-white font-medium flex items-center gap-2 group-hover:underline">
                  MORE <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SustainableEnergy;
