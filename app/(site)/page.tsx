import Homepage from "./homepage/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profesionální ruční mytí, detailing a ochrana laků",
  description:
    "Hledáte spolehlivou myčku aut v Plzni? Nabízíme profesionální ruční i automatické mytí, detailing a ochranu laků s použitím prvotřídních čisticích prostředků.",
  keywords:
    "myčka aut Plzeň, ruční mytí aut, automatické mytí, auto detailing, ochrana laků, ekologické čisticí prostředky, profesionální mytí aut",
  robots: "index, follow",
  authors: [
    { name: "West Detailing" },
    { name: "kuori.cz | Web, SEO & Marketing", url: "https://kuori.cz" },
  ],
};

export default function Home() {

  return (
    <>
      <div className="text-text bg-lightDark text-white">
        <Homepage />
      </div>
    </>
  );
}
