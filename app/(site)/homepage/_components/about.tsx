"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {


    gsap.fromTo(
      ".about-svg",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-svg",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 s:px-6 py-10 lg:py-5 lg:pb-10 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-32 justify-between items-center relative">
          {/* SVG Shape */}
          <svg
            className="hidden lg:block absolute left-[-20px] bottom-[-20px] w-[620px] h-[320px] z-0 about-svg"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="0,60 600,0 600,400 0,400" fill="#E0B920" />
          </svg>
          {/* Image with Clip Path */}
          <div className="overflow-hidden relative z-10 w-full lg:w-1/2 [clip-path:polygon(0%_15%,100%_0%,100%_100%,0%_100%)]">
            <Image
              src="/Web-124.jpg"
              alt="About"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
          <div className="space-y-4 w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="text-h2 font-extrabold">PROČ MY?</div>
            <div>
              Naše myčka je nejlepší, protože poskytujeme důkladné čištění
              interiéru i exteriéru, používáme šetrné a kvalitní přípravky,
              dbáme na detaily a zajišťujeme profesionální péči, která vašemu
              vozu dodá dokonalý vzhled a svěžest.
            </div>
            <div className="py-6 flex space-x-4">
              <Link href="/sluzby" passHref>
                <Button size="large">SLUŽBY</Button>
              </Link>
              <Link href="/kontakt" passHref>
                <Button variant="transparent" size="large" >Kontakt</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
