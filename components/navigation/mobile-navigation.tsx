"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Button } from "../ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavigationLinks } from "./navigation-data";

const MobileNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = NavigationLinks();

  return (
    <>
      {" "}
      <div className="flex lg:hidden">
        <Button
          type="button"
          variant="transparent"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-50"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Otevřít hlavní nabídku</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Button>
      </div>
      <div className="flex flex-1 items-center lg:hidden">
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark bg-opacity-90 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">
                  West detailing | Ruční mytí aut | Ochrana laků
                </span>
                <Image
                  className="h-12 w-auto"
                  src="/logo.png"
                  width={120}
                  height={120}
                  onClick={() => setMobileMenuOpen(false)}
                  alt="Logo  West detailing | Ruční mytí aut | Ochrana laků"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Zavřít hlavní nabídku</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-20 flow-root">
              <div className="-my-6 divide-y divide-neutral-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-h3 font-semibold leading-7 text-white hover:bg-ferrariYellow"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </>
  );
};

export default MobileNavigation;
