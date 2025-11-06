"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      bg: "/media/water/rend/2025-11/7lrYEg9G2Ze-.max-2400x2400.jpg",
      title: "Richard Prince",
      subtitle: "Folk Songs",
      date: "Opening November 6",
      location: "555 West 24th Street, New York",
      link: "/exhibitions/2025/richard-prince-folk-songs/",
      theme: "light", // changes text/button theme
    },
    {
      id: 2,
      bg: "/media/water/rend/2025-10/RfWw_XiWGyB5.max-2400x2400.jpg",
      title: "Albert Oehlen",
      subtitle: "Endless Summer",
      date: "Now on View",
      location: "4 rue de Ponthieu, Paris",
      link: "/exhibitions/2025/albert-oehlen-endless-summer/",
      theme: "dark",
    },
    {
      id: 3,
      bg: "/media/water/rend/2025-10/69xWXXzEuJSM.max-2400x2400.jpg",
      title: "Walter De Maria",
      subtitle: "The Singular Experience",
      date: "Now on View",
      location: "26 avenue de l’Europe, Le Bourget",
      link: "/exhibitions/2025/walter-de-maria-the-singular-experience/",
      theme: "dark",
    },
    {
      id: 4,
      bg: "/media/water/rend/2025-10/bLF5N3PIQW-p.max-2400x2400.jpg",
      title: "Christopher Wool",
      subtitle: "",
      date: "Now on View",
      location: "20 Grosvenor Hill, London",
      link: "/exhibitions/2025/christopher-wool/",
      theme: "dark",
    },
  ];

  return (
    <div className="relative w-full h-[calc(100vh-40px)] overflow-hidden">
      <h2 className="text-[50px] lg:text-[60px] font-bold leading-12 absolute left-0 top-0 z-10 p-4 md:p-8 md:py-6 lg:p-8 xl:pl-8 xl:pt-8 uppercase GagosianHeadline text-white">
        gagosian
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full w-full"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        grabCursor
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Background */}
              <Image
                src={slide.bg}
                alt={slide.title}
                fill
                className="object-cover object-center -z-10"
                priority={slide.id === 1}
              />

              {/* Overlay */}
              {/* <div
                className={`absolute inset-0 ${
                  slide.theme === "dark"
                    ? "bg-black/20 text-white"
                    : "bg-black/30 text-white"
                }`}
              /> */}

              {/* Centered Content */}
              <div className="relative z-10 text-center px-4 text-white">
                <p className="md:text-lg text-base font-normal mb-6 text-white GTAmerica">
                  {slide.date}
                </p>
                <h2 className="text-[75px] lg:text-[100px] font-bold leading-[0.6] uppercase GagosianHeadline">
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <h3 className="text-[30px] md:text-[35px] mt-3 font-bold">
                    {slide.subtitle}
                  </h3>
                )}
                <p className="md:text-lg text-base font-normal text-white GTAmerica">
                  {slide.location}
                </p>

                <Link
                  href={slide.link}
                  className={`inline-block border border-transparent px-2.5 py-1 mt-5 text-lg duration-200  tracking-wide transition-colors GTAmerica ${
                    slide.theme === "dark"
                      ? "hover:border-white text-black bg-white hover:bg-black hover:text-white"
                      : "hover:border-white text-black bg-white hover:bg-black hover:text-white"
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container */}
      <div className="swiper-pagination !bottom-8 absolute w-full flex justify-center"></div>
    </div>
  );
}
