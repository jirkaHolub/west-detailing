"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { RealisedData } from "@/components/data/realised-data";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Image from "next/image";

const CarPage = () => {
  const { carId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Find the car data based on the carId
  const car = RealisedData.find((item) => item.id === carId);

  if (!car) {
    return <div>Car not found</div>;
  }

  // Use the car's images array
  const images = car.images.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `${car.car} ${index + 1}`,
  }));

  return (
    <>
      <div className="pt-28 bg-black text-center text-h2 font-bold pb-8 px-4 lg:px-8 w-max-7xl mx-auto text-white">
        {car.car}
      </div>
      <div className="bg-white py-10 px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="cursor-pointer" onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
              <Image src={image.src} alt={image.alt} width={500} height={500} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </>
  );
};

export default CarPage;
