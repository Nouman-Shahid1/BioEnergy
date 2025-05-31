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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

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
