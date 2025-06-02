"use client";

import React from "react";

const ValueProposition = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      {/* Top Section Background */}
      <div className="absolute top-0 left-0 w-full h-[45vh] sm:h-[40vh] md:h-[35vh] bg-gradient-to-b from-blue-900 via-teal-500 to-teal-500"></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        {/* Value To Customers Section */}
        <div className="text-center text-white mb-12 sm:mb-16 pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Value To Customers
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our core objective is to provide our customers with ultimate
            one-spot solution. We provide clean fuels with reliability, quality,
            and cost efficiency, Ensuring complete consultancy & lasting support
            for their customized needs.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-medium text-green-600 bg-white border border-white px-5 py-3 rounded-md transition-transform duration-300 hover:-translate-y-1 text-sm sm:text-base"
          >
            LEARN MORE
          </a>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {/* Card Template */}
          {[
            {
              percent: 40,
              title: "Up To 40% Cost Saving",
              color: "#3b82f6",
              dashOffset: 170,
            },
            { icon: "plus", title: "Constant Heat & Pressure" },
            { icon: "fire", title: "Max Heat", colorClass: "text-red-500" },
            {
              icon: "shield",
              title: "Reliability",
              colorClass: "text-green-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              {item.percent ? (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    aria-label={`${item.percent}% progress`}
                    role="img"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset={item.dashOffset}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-bold text-gray-800 select-none">
                    {item.percent}%
                  </div>
                </div>
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-4">
                  <svg
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${
                      item.colorClass || "text-gray-700"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    {item.icon === "plus" && (
                      <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </>
                    )}
                    {item.icon === "fire" && (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        ></path>
                      </>
                    )}
                    {item.icon === "shield" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    )}
                  </svg>
                </div>
              )}
              <span className="text-base sm:text-lg font-semibold text-gray-700">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md flex justify-center">
            <img
              src="/images/Eco.png"
              alt="ECOENERGY Plant"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Column: Text */}
          <div className="text-gray-800 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-600 leading-tight">
              Helping World To Grow Sustainably
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              We are making clean and affordable energy ensuring responsible
              consumption and production. Helping people generate decent incomes
              with industry innovation and sustainable communities. We are
              contributing to $50s directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
