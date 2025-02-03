"use client"
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
            <div className="text-h2 font-black">2 080 Kč</div>
            <div className="text-h3 font-bold"> CELEBRITY</div>
            <div className="pb-4">
              Vyčistíme palubní desku i celý interiér, včetně vysátí kufru,
              vyleštíme skla a displeje, naimpregnujeme plasty a provoníme
              interiér.
            </div>
            <Link href="/sluzby" passHref>
              <Button variant="white" size="medium">
                VÍCE INFORMACÍ
              </Button>
            </Link>
          </div>
          <div className="price-card lg:w-[280px] p-6 bg-white text-dark h-full">
            <div className="text-h2 font-black text-ferrariYellow">3 840 Kč</div>
            <div className="text-h3 font-bold"> STAR</div>
            <div className="pb-4">
              Vyčistíme palubní desku i celý interiér, včetně vysátí kufru,
              vyleštíme skla a displeje, naimpregnujeme plasty a provoníme
              interiér.
            </div>
            <Link href="/sluzby" passHref>
              <Button variant="dark" size="medium">
                VÍCE INFORMACÍ
              </Button>
            </Link>
          </div>
          <div className="price-card lg:w-[280px] p-6 bg-white text-dark h-full">
            <div className="text-h2 font-black text-ferrariYellow">1 900 Kč</div>
            <div className="text-h3 font-bold"> SUPERSTAR</div>
            <div className="pb-4">
              Vyčistíme palubní desku i celý interiér, včetně vysátí kufru,
              vyleštíme skla a displeje, naimpregnujeme plasty a provoníme
              interiér.
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
