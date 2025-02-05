import Image from "next/image";
import Link from "next/link";

import { NavigationLinks } from "./navigation-data";
import MobileNavigation from "./mobile-navigation";
import { Button } from "../ui/button";
import { FaInstagram } from "react-icons/fa";

const Navigation = () => {
  const navigation = NavigationLinks();

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50">
        {" "}
        {/* Increased z-index */}
        <nav className="relative" aria-label="Hlavní navigační lišta">
          <div className="absolute w-full bg-dark backdrop-blur-lg backdrop-filter border-b-[1px]">
            <div className="mx-auto px-4 sm:px-6">
              <div>
                <div className="py-10 flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center space-x-8">
                    <Link href="/">
                      <span className="sr-only">
                        West detailing | Mytí a čištění aut v Plzni
                      </span>
                      <Image
                        className="h-12 w-auto"
                        src="/logo.png"
                        width={120}
                        height={120}
                        alt="West detailing"
                      />
                    </Link>
                  </div>
                  <MobileNavigation />
                  {/* Logo (lg-) */}
                  <Link href="/" className="lg:hidden ml-auto">
                    <span className="sr-only">
                    West detailing | Mytí a čištění aut v Plzni
                    </span>
                    <Image
                      className="h-12"
                      src="/logo.png"
                      width={120}
                      height={120}
                      alt="Logo West detailing"
                    />
                  </Link>
                  <div className="hidden lg:flex flex-1 items-center justify-end space-x-8">
                    <div className=" flex lg:items-center space-x-8">
                      {navigation.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-text font-semibold text-white"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                    <div className="flex space-x-4 items-center">
                      <Link href="/kontakt" passHref>
                        <Button
                          className="hidden lg:block"
                          variant="default"
                          size="medium"
                        >
                          KONTAKTOVAT
                        </Button>
                      </Link>
                      <Link
                        href="https://www.instagram.com/westdetailing.cz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-white text-2xl hover:text-gray-300 transition" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
