"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const PriceList = () => {
  useEffect(() => {
    gsap.fromTo(
      ".price-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".price-card",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-8 lg:space-x-3 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 space-y-8 h-full text-white text-left">
          <div className="text-h2 font-black leading-tight">
            OBLÍBENÉ SLUŽBY
          </div>
          <div>
            Nejoblíbenější služby našech zákazníků si určitě zamilujete i vy.
          </div>
          <Link href="/sluzby" passHref>
            <Button size="medium" className="mt-4">
              VŠECHNY SLUŽBY
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="price-card lg:w-[280px] p-6 bg-ferrariYellow h-full">
            <div className="text-h2 font-black">2 520,-</div>
            <div className="text-h3 font-bold"> STAR</div>
            <div className="pb-4">
            Kompletní ruční mytí vozu včetně kol, podběhů a mezidveřních prostor. Čistý interiér díky vysátí, tepování a impregnaci plastů. Na závěr vyleštění skel, provonění a ošetření pneumatik.
            </div>
            <Link href="/sluzby" passHref>
              <Button variant="white" size="medium">
                VÍCE INFORMACÍ
              </Button>
            </Link>
          </div>
          <div className="price-card lg:w-[280px] p-6 bg-lightDark text-white h-full">
            <div className="text-h2 font-black text-ferrariYellow">3 870,-</div>
            <div className="text-h3 font-bold"> SUPERSTAR</div>
            <div className="pb-4">
            Kompletní péče o interiér včetně hloubkového čištění sedaček a tepování podlahy. Detailní čištění jemnými kančími štětinami, impregnace plastů a leštění skel. Na závěr svěží vůně pro dokonalý zážitek.
            </div>
            <Link href="/sluzby" passHref>
              <Button variant="dark" size="medium">
                VÍCE INFORMACÍ
              </Button>
            </Link>
          </div>
          <div className="price-card lg:w-[280px] p-6 bg-lightDark text-white h-full">
            <div className="text-h2 font-black text-ferrariYellow">5 445,-</div>
            <div className="text-h3 font-bold"> SUPERTOPSTAR</div>
            <div className="pb-4">
            Prémiová péče o vůz s leštěním B/C sloupků a aplikací sealantu na karoserii. Detailní čištění motorového prostoru a hloubkové ošetření interiéru. Maximální ochrana, lesk a svěžest pro váš vůz.
            </div>
            <Link href="/sluzby" passHref>
              <Button variant="dark" size="medium">
                VÍCE INFORMACÍ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
