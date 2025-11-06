"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 bg-white py-px border-b border-gray-300 transition-all duration-300 lg:px-4`}
    >
      <div className="mx-auto w-full max-w-screen-xl-nopad px-4">
        <div className="flex lg:items-center items-start lg:flex-row flex-col-reverse justify-between gap-1">
          {/* Left Menu */}
          <ul className="md:inline-flex hidden h-full shrink-0 grow flex-nowrap">
            {/* Brand Item */}
            <li
              className={`overflow-hidden transition-all duration-400 lg:block hidden ${
                scrolled
                  ? "w-auto opacity-100 mr-[25px] last:mr-0"
                  : "w-0 opacity-0"
              }`}
            >
              <Link
                href="/"
                className="text-[#111] hover:text-[#111] duration-500 text-[19px] font-bold leading-9 whitespace-nowrap"
              >
                Gagosian
              </Link>
            </li>

            {/* Menu Items */}
            {[
              { href: "/exhibitions/", label: "Exhibitions" },
              { href: "/artists/", label: "Artists" },
              { href: "/fairs-and-collecting/", label: "Fairs & Collecting" },
              { href: "/quarterly/", label: "Quarterly" },
              { href: "/news/", label: "News" },
              { href: "/locations/", label: "Locations" },
              {
                href: "https://gagosianshop.com",
                label: "Shop",
                external: true,
              },
              { href: "/premieres/", label: "Premieres" },
            ].map((item) => (
              <li key={item.label} className="mr-[25px] last:mr-0">
                <Link
                  href={item.href}
                  className="text-[#b2b2b2] hover:text-[#111] duration-300 text-[19px] font-bold leading-9"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Menu */}
          <div className="flex items-center justify-between lg:border-b-0 md:border-b border-b-0 lg:w-auto w-full">
            <div
              className={`overflow-hidden transition-all duration-400 self-start lg:hidden block  ${
                scrolled
                  ? "w-auto opacity-100 mr-[25px] last:mr-0"
                  : "w-0 opacity-0"
              }`}
            >
              <Link
                href="/"
                className="text-[#111] hover:text-[#111] duration-500 text-[19px] font-bold leading-9 whitespace-nowrap"
              >
                Gagosian
              </Link>
            </div>
            <ul className="ml-auto md:flex hidden pl-[25px]  justify-end">
              {[
                { href: "/subscribe", label: "Subscribe" },
                { href: "/search", label: "Search" },
              ].map((item) => (
                <li key={item.label} className="mr-[25px] last:mr-0">
                  <Link
                    href={item.href}
                    className="text-[#b2b2b2] hover:text-[#111] duration-200 text-[19px] font-bold leading-9"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mr-[25px] last:mr-0 md:hidden flex justify-end">
              <p
                className="text-[#b2b2b2] hover:text-[#111] duration-200 text-[19px] font-bold leading-9"
                onClick={() => setIsOpen(!isOpen)}
              >
                Menu
              </p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed w-full h-screen px-4 py-1 bg-white left-0 top-0">
          <p
            className="text-[#b2b2b2] hover:text-[#111] duration-200 text-[19px] font-bold leading-9 absolute right-4 top-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            Close
          </p>
          <ul>
            {[
              { href: "/", label: "Gagosian" },
              { href: "/exhibitions/", label: "Exhibitions" },
              { href: "/artists/", label: "Artists" },
              { href: "/fairs-and-collecting/", label: "Fairs & Collecting" },
              { href: "/quarterly/", label: "Quarterly" },
              { href: "/news/", label: "News" },
              { href: "/locations/", label: "Locations" },
              {
                href: "/shop",
                label: "Shop",
                external: true,
              },
              { href: "/premieres/", label: "Premieres" },
            ].map((item) => (
              <li
                key={item.label}
                className=" border-b border-[#cccccc] py-0.5 px-1.5"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-lg text-[#b2b2b2] font-bold w-full",
                    pathName === item.href ? "text-[#111]" : "text-[#b2b2b2]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
