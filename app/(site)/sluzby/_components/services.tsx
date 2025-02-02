"use client";
import servicesData from "@/components/data/services-data";
import React, { useState } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [openDrawerId, setOpenDrawerId] = useState<number | null>(null);

  const handleOpenDrawer = (id: number) => {
    setOpenDrawerId(id);
  };

  const handleCloseDrawer = () => {
    setOpenDrawerId(null);
  };

  return (
    <div>
      <div className="pt-28 text-center text-h2 font-extrabold pb-8 px-4 lg:px-8 text-white bg-dark">
        SLUŽBY
      </div>
      <div className="max-w-7xl mx-auto py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-dark text-white text-center overflow-hidden"
            >
              <div
                className="relative w-full h-52 cursor-pointer"
                onClick={() => handleOpenDrawer(item.id)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}
                <div className="absolute bottom-0 p-4" onClick={() => handleOpenDrawer(item.id)}>
                  <h3 className="text-h3 font-bold shadow-lg">{item.title}</h3>
                </div>
              </div>

              <Drawer
                open={openDrawerId === item.id}
                onOpenChange={handleCloseDrawer}
              >
                <DrawerContent className="p-6 bg-white rounded-lg shadow-lg">
                  <DrawerHeader>
                    <DrawerTitle className="text-2xl font-bold">
                      {item.title}
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4 lg:px-10">
                    {item.packages.map((service, index) => (
                      <div key={index}>
                        <DrawerTitle className="text-xl font-semibold">
                          {service.title}
                        </DrawerTitle>
                        <div className="text-gray-700 mt-2">
                          {service.text.split("\n").map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                        <div className="text-lg font-bold mt-4">
                          {service.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  <DrawerFooter className="flex justify-end space-x-4">
                    <DrawerClose asChild>
                      <Button>Zavřít</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
