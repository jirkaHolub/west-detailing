import Image from "next/image";

import Link from "next/link";
import { NavigationLinks } from "./navigation/navigation-data";

const navigation = {
  legal: [{ name: "GDPR", href: "/gdpr" }],
};

export default function Footer() {
  const nav = NavigationLinks();

  return (
    <footer className="bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Patička stránky
      </h2>
      <div className="left-0 w-full h-[400px]">
        <iframe
          title="Google Maps Location"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.495245138245!2d13.397658476849373!3d49.74381207139307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af1e83f3376f9%3A0xb94ad9c6f74a6a2f!2sRokycansk%C3%A1%202656%2F2%2C%20301%2000%20Plze%C5%88%2C%20Czechia!5e0!3m2!1sen!2sus!4v1700000000000"
        ></iframe>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-10 w-auto"
              src="/logo.png"
              width={100}
              height={100}
              alt="Company name"
            />
            <p className="text-sm leading-6 text-neutral-300">
              West detailing <br />
              Rokycanská 2656/2 301 00 Plzeň - Východní Předměstí Okres
              Plzeň-město 
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div />
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Seznam stránek
                </h3>
                <ul className="mt-6 space-y-4">
                  {nav.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-neutral-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Právní záležitosti
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-neutral-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-14 lg:mt-16 flex">
          <p className="text-sm leading-5 font-normal text-neutral-200">
            &copy; {new Date().getFullYear()} West detailing všechna
            práva vyhrazena.
          </p>
          <h2 id="footer-heading" className="sr-only">
            Stránka vytvořena společností Kuori.cz | Web, SEO & Marketing
          </h2>
        </div>
      </div>
      
    </footer>
  );
}
