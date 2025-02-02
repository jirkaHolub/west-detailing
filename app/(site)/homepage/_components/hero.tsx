import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="relative pt-20 h-[90vh] overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_95%,0%_100%)] lg:[clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Web-84-2.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
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
              <span>+420 777 907 577</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>mycka@wd.cz</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span>Po - Pá: 8-17</span>
            </div>
          </div>
        </div>
        <div className="bottom-0 px-4 lg:px-8 pb-14 lg:pb-20">
          <div className="lg:text-left space-y-8 lg:space-y-6">
            <div className="text-ferrariYellow text-h3 font-semibold shadow-sm -mb-4 lg:-mb-4">West detailing</div>
            <div className="text-h2 font-extrabold text-white drop-shadow-lg leading-none">
              VAŠE CESTA K LUXUSU
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
