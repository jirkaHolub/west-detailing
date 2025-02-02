"use client";
import { RealisedData } from "@/components/data/realised-data";
import { Button } from "@/components/ui/button";
import { useCarouselDrag } from "@/lib/carousel-scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Realised = () => {
  const data = RealisedData;

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 space-y-8">
      <div className="items-center">
        <div className="font-extrabold text-h2">REALIZOVÁNO</div>
      </div>
      <div className="w-4/5 lg:w-full mx-auto">
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="lg:basis-1/3">
              <Link href={`/car-page/${item.id}`} legacyBehavior>
                <a className="relative block w-full h-full">
                  <Image
                    className="object-cover"
                    src={item.imageUrl}
                    width={600}
                    height={400}
                    alt={item.car}
                  />
                  <div className="absolute bottom-0 p-4 text-h3 text-white font-bold">
                    {item.car}
                  </div>
                </a>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  );
};

export default Realised;
