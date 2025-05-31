"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";




const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/images/02163f0a-a540-45f9-9afb-f234c348ead1" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">
          Alternate Clean Energy Solutions
        </h1>
        <p className="text-blue-300 text-lg md:text-xl mt-4">
          Fulfilling your heat energy demand reliably and efficiently
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
