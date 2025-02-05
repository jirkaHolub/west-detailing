"use client"
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const desktopImages = [
  "/Web-84.jpg",
  "/Web-55.jpg",
  "/cars/rs1.jpg",
  // Add more image URLs as needed
];

const mobileImages = [
  "/hero2.jpg",
  "/herors6.jpg"
  // Add more image URLs as needed
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + desktopImages.length) % desktopImages.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
  };

  return (
    <div className="relative pt-20 h-[85vh] lg:h-[90vh] overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_95%,0%_100%)] lg:[clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)]">
      {/* Desktop Carousel */}
      <div className="hidden lg:block absolute inset-0 z-0">
        {desktopImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            layout="fill"
            objectFit="cover"
            alt={`Background Image ${index + 1}`}
            className={`transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      {/* Mobile Carousel */}
      <div className="block lg:hidden absolute inset-0 z-0">
        {mobileImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            layout="fill"
            objectFit="cover"
            alt={`Background Image ${index + 1}`}
            className={`transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-white h-full flex flex-col lg:justify-between justify-end">
        <div className="hidden lg:flex px-4 lg:px-8 justify-items-start">
          <div className="space-x-8 border-b-[1px] border-b-gray-500 h-16 flex items-center">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Rokycanská 2656/2 | 301 00 Plzeň</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+420 606 300 500</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@westdetailing.cz</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span>Po - Pá: 9-18</span>
            </div>
          </div>
        </div>
        <div className="bottom-0 px-4 lg:px-8 pb-14 lg:pb-28">
          <div className="lg:text-left space-y-8 lg:space-y-6">
            <div className="text-white text-h3 lg:text-h2 font-semibold drop-shadow-lg -mb-4 lg:-mb-4">West detailing</div>
            <div className="lg:text-h1 text-h2 font-extrabold text-white drop-shadow-lg leading-none">
              VAŠE CESTA K LUXUSU
            </div>
          </div>
        </div>
      </div>
      <button
        className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark bg-opacity-50 text-white p-2"
        onClick={handlePrevClick}
      >
        <FaArrowLeft />
      </button>
      <button
        className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark bg-opacity-50 text-white p-2"
        onClick={handleNextClick}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
