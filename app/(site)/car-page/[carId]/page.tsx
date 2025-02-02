"use client";
import React from "react";
import { useParams } from "next/navigation";
import { RealisedData } from "@/components/data/realised-data";
import Image from "next/image";
import Navigation from "@/components/navigation/navigation";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const CarPage = () => {
  const { carId } = useParams();

  // Find the car data based on the carId
  const car = RealisedData.find((item) => item.id === carId);

  if (!car) {
    return <div>Car not found</div>;
  }

  // Prepare images for the gallery
  const images = Array(10)
    .fill(car.imageUrl)
    .map((imageUrl, index) => ({
      original: imageUrl,
      thumbnail: imageUrl,
      originalAlt: `${car.car} ${index + 1}`,
      thumbnailAlt: `${car.car} ${index + 1}`,
    }));

  return (
    <>
      <div className="pt-28 bg-black text-center text-h2 font-bold pb-8 px-4 lg:px-8 w-max-7xl mx-auto text-white">
        {car.car}
      </div>
      <div className="bg-white py-10 px-4 lg:px-8">
        <ImageGallery items={images} showThumbnails={true} />
      </div>
    </>
  );
};

export default CarPage;
