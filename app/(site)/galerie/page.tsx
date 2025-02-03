import { RealisedData } from "@/components/data/realised-data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "@/components/form";

const Gallery = () => {
  const data = RealisedData;
  return (
    <>
      <div className="pt-28 text-center text-h2 font-extrabold pb-8 px-4 lg:px-8  text-white bg-dark">
        GALERIE
      </div>
      <div className="bg-lightDark text-white py-8 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div key={item.id} className="w-full">
              <Link href={`/car-page/${item.id}`}>
                <div className="relative pb-[75%]">
                  <div className="absolute inset-0 bg-cover bg-center overflow-hidden">
                    <Image
                      className="object-cover"
                      src={item.imageUrl}
                      layout="fill"
                      alt={item.car}
                    />
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="absolute bottom-0 p-4 text-white text-h3 font-bold">
                      {item.car}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Form />
    </>
  );
};

export default Gallery;
