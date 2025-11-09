import Image from "next/image";
import Link from "next/link";

const OnViewSection = () => {
  return (
    <section className="py-2 pb-16">
      <div className="mx-auto w-full max-w-screen-xl-nopad px-4">
        <Link
          href="/"
          className="text-[#111] md:text-[34px] text-[30px] scale-y-95 block font-bold minion-pro-condensed"
        >
          On View
        </Link>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-9 mt-5">
          <div>
            <div className="relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/richard-prince-folk-songs/eC-zpfV6o3vX_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[67%]  h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Richard Prince <br /> Folk Songs
                </Link>
                <p className="mt-2 text-base leading-5 font-light font-serif">
                  November 6–December 20,2025 <br /> 555 West 24th Street, New
                  York
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-full flex flex-col justify-end relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/richard-serra-running-arcs-for-john-cage/lfvqNwV3Oc14_1200x1200.jpg"
                alt="richard prince flok songs"
                className="w-[95%]  h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Richard Serra <br /> Running Arcs (For John Cage), 1992
                </Link>
                <p className="mt-2 text-base leading-5 font-light font-serif">
                  September 12–December 20, 2025 <br /> West 21st Street, New
                  York
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/christopher-wool/vwzbeK6Z0k7U_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[62%]  h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Christopher Wool
                </Link>
                <p className="mt-2 text-base leading-5 font-light font-serif">
                  October 13–December 19, 2025
                  <br />
                  Grosvenor Hill, London
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-full flex flex-col justify-end relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/ed-ruscha-says-i-to-myself-says-i/oCqsqWiadjHR_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[88%]  h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Ed Ruscha <br />
                  Says I, to Myself, Says I
                </Link>

                <p className="mt-2 text-base leading-5 font-light font-serif">
                  October 14–December 19, 2025 <br />
                  Davies Street, London
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-full flex flex-col justify-end relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/brice-marden-etched-letters/IDeLv7jKZKC5_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[80%]  h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Brice Marden <br />
                  Etched Letters
                </Link>

                <p className="mt-2 text-base leading-5 font-light font-serif">
                  October 10–November 29, 2025 <br />
                  Burlington Arcade, London
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/albert-oehlen-endless-summer/q7iVdKpnUPlv_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[65%] h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Albert Oehlen <br />
                  Endless Summer
                </Link>
                <p className="mt-2 text-base leading-5 font-light font-serif">
                  October 20–December 20, 2025 <br />
                  rue de Ponthieu, Paris
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-full flex flex-col justify-end relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/ed-ruscha-talking-doorways/WHgtqamGGf7o_1200x1200.jpg"
                alt="richard prince flok songs"
                className="w-[95%] h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Ed Ruscha <br />
                  Talking Doorways
                </Link>

                <p className="mt-2 text-base leading-5 font-light font-serif">
                  October 22–December 3, 2025 <br />
                  rue de Castiglione, Paris
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/walter-de-maria-the-singular-experience/VcJ_yeJhLH9r_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[70%] h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Walter De Maria <br />
                  The Singular Experience
                </Link>
                <p className="mt-2 text-base leading-5 font-light font-serif">
                  October 19, 2025–April 18, 2026 <br />
                  Le Bourget
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-full flex flex-col justify-end relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/urs-fischer-after-nature/y8xhezAgSwr1_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[92%] h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Urs Fischer <br />
                  After Nature
                </Link>
                <p className="mt-2 text-base leading-5 font-light font-serif">
                  September 17–November 22, 2025 <br />
                  Rome
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-full flex flex-col justify-end relative group cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
              <Image
                src="/media/images/exhibitions/2025/stanley-whitney-return-to-the-garden/JJz4pkmSOmx1_600x600.jpg"
                alt="richard prince flok songs"
                className="w-[80%] h-auto"
                width={1920}
                height={1080}
              />

              <div className="pt-4 text-[#111]">
                <Link
                  href="/"
                  className="text-2xl font-bold  leading-6 minion-pro-condensed "
                >
                  Stanley Whitney <br />
                  Return to the Garden
                </Link>
                <p className="mt-2 text-base leading-5 font-light font-serif">
                  October 2, 2025–January 17, 2026 <br />
                  Athens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnViewSection;
