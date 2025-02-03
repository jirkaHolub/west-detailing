interface Package {
  id: number;
  title: string;
  text: string;
  price: string;

}

interface ServiceSection {
  id: number;
  title: string;
  text?: string;
  imageUrl: string;
  packages: Package[];
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  }).format(price);
};

export const servicesData: ServiceSection[] = [
  {
    id: 1,
    title: "Exteriér",
    imageUrl: "/Web-110.jpg",
    packages: [
      {
        id: 1,
        title: "Comfort",
        text: `- Předmytí aktivní pěnou
- Mytí podběhů
- Vyčištění mezidveřních prostor
- Ruční mytí mikrovláknovou houbou
- Ruční mytí kol chemií
- Nanesení ochrany
- Vysušení karoserie (vč. kol, mezidveřních prostor)
- Impregnace pneumatik`,
        price: formatPrice(750),
      },
      {
        id: 2,
        title: "Premium",
        text: `- Předmytí aktivní pěnou
- Mytí podběhů
- Vyčištění mezidveřních prostor
- Ruční mytí mikrovláknovou houbou
- Ruční mytí kol chemií
- Detailní mytí kančí štětinou (kol, karoserie)
- Nanesení ochrany
- Vysušení karoserie (vč. kol, mezidveřních prostor)
- Impregnace pneumatik`,
        price: formatPrice(1250),
      },
    ],
  },
  {
    id: 2,
    title: "Interiér",
    imageUrl: "/Web-134.jpg",
    packages: [
      {
        id: 3,
        title: "Comfort (Na sucho)",
        text: `- Vyčištění palubní desky a interiéru
- Vysátí celého interiéru včetně kufru
- Vyleštění skel a displayů
- Impregnace plastů
- Provonění interiéru`,
        price: formatPrice(1450),
      },
      {
        id: 4,
        title: "Premium (Na mokro)",
        text: `- Vyčištění palubní desky a interiéru kančí štětinou
- Vysátí celého interiéru včetně kufru
- Vyleštění skel a displayů
- Tepování koberečků + úprava vlákna
- Tepování podlah vč. kufru
- Tepování dveří (u kůže hloubkové čištění melaminovou houbičkou)
- Tepování látkových sedaček (u kůže hloubkové čištění melaminovou houbičkou)
- Impregnace plastů
- Provonění interiéru`,
        price: formatPrice(3550),
      },
    ],
  },
  {
    id: 3,
    title: "Doplňkové služby",
    imageUrl: "/Web-80.jpg",
    packages: [
      { id: 5, title: "Leštění B/C sloupků", text: "", price: formatPrice(500) },
      { id: 6, title: "Čištění motoru", text: "", price: formatPrice(500) },
      { id: 7, title: "Tepování koberečků + úprava vlákna", text: "", price: formatPrice(400) },
      { id: 8, title: "Jednokrokové leštění jednoho dílu", text: "", price: formatPrice(1000) },
      { id: 9, title: "Vícekrokové leštění jednoho dílu", text: "", price: formatPrice(1500) },
    ],
  },
  {
    id: 4,
    title: "Renovace laku",
    imageUrl: "/Web-92.jpg",
    packages: [
      {
        id: 10,
        title: "Jednokrokové leštění",
        text: `- Odstranění jemných škrábanců, oxidace a matnosti
- Důkladné umytí a dekontaminace laku
- Leštění v jednom kroku
- Aplikace ochrany (sealant)`,
        price: formatPrice(8000),
      },
      {
        id: 11,
        title: "Dvoukrokové leštění",
        text: `- Odstranění středně hlubokých škrábanců a hologramů
- Důkladné umytí a dekontaminace laku
- Korekční leštění (1. krok)
- Finišovací leštění (2. krok)
- Aplikace ochrany (vosk nebo sealant)`,
        price: formatPrice(14000),
      },
    ],
  },
  {
    id: 5,
    title: "Ochrany vozu",
    imageUrl: "/Web-8.jpg",
    packages: [
      {
        id: 12,
        title: "Sealant S0.02",
        text: `- Rychlá aplikace
- Hydrofobní efekt a zvýraznění barvy
- Ochrana až několik měsíců`,
        price: formatPrice(750),
      },
      {
        id: 13,
        title: "Gyeon Q² CanCoat EVO",
        text: `- Ochrana proti UV záření
- Výdrž až 12 měsíců nebo 12 000 km
- Vylepšené hydrofobní vlastnosti`,
        price: formatPrice(3000),
      },
      {
        id: 14,
        title: "Koch Ceramic Allround C0.02",
        text: `- Nejvyšší stupeň ochrany
- Obsahuje UV blokátory
- Výrazně napomáhá údržbě vozu`,
        price: formatPrice(11000),
      },
    ],
  },
  {
    id: 6,
    title: "Výhodné balíčky",
    imageUrl: "/Web-100.jpg",
    packages: [
      {
        id: 15, 
        title: "Star",
        text: `- Kombinace exteriérového a interiérového čištění
- Předmytí aktivní pěnou
- Mytí podběhů, kol, karoserie a impregnace pneumatik
- Tepování koberečků, úprava vlákna, vyleštění skel`,
        price: formatPrice(2080),
      },
      {
        id: 16,
        title: "Superstar",
        text: `- Nejkomplexnější balíček péče o vozidlo
- Předmytí aktivní pěnou, ruční mytí mikrovláknem a kančí štětinou
- Aplikace Sealantu (ochrana na 3 měsíce)
- Hloubkové čištění interiéru vč. tepování sedadel a dveří`,
        price: formatPrice(3840),
      },
    ],
  },
];

export default servicesData;