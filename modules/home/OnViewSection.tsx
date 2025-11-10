import Image from "next/image";
import Link from "next/link";

const OnViewSection = () => {
  return (
    <>
      <section className="py-2 pb-16">
        <div className="mx-auto w-full max-w-screen-xl-nopad px-4">
          <Link
            href="/"
            className="text-[#111] md:text-[34px] text-[30px] scale-y-95 block font-bold minion-pro-condensed"
          >
            On View
          </Link>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 md:gap-x-5 lg:gap-x-8 gap-y-10 mt-6">
            <div>
              <div className="relative group cursor-pointer">
                <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
                <Image
                  src="/media/images/exhibitions/2025/richard-diebenkorn/xtFqo4EHI2Bg_600x600.jpg"
                  alt="richard prince flok songs"
                  className="w-[63.73%]  h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Richard Diebenkorn
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2 ">
                    November 8–December 20, 2025 <br />
                    980 Madison Avenue, New York
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative group cursor-pointer">
                <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff90] opacity-0 group-hover:opacity-100 duration-300 "></div>
                <Image
                  src="/media/images/exhibitions/2025/richard-prince-folk-songs/eC-zpfV6o3vX_600x600.jpg"
                  alt="richard prince flok songs"
                  className="w-[67.42%]  h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111] minion-pro-condensed">
                  <Link
                    href="/"
                    className="minion-pro-condensed text-2xl font-bold  leading-6"
                  >
                    Richard Prince <br /> Folk Songs
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[94.65%]  h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-5 minion-pro-condensed type-mc-sm font-feature-none font-serif"
                  >
                    Richard Serra <br /> Running Arcs (For John Cage), 1992
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[62.08%]  h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Christopher Wool
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[87.79%]  h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Ed Ruscha <br />
                    Says I, to Myself, Says I
                  </Link>

                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[81.64%]  h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Brice Marden <br />
                    Etched Letters
                  </Link>

                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[67.5%] h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Albert Oehlen <br />
                    Endless Summer
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Ed Ruscha <br />
                    Talking Doorways
                  </Link>

                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[71.56%] h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Walter De Maria <br />
                    The Singular Experience
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[92.38%] h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Urs Fischer <br />
                    After Nature
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
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
                  className="w-[80.15%] h-auto"
                  width={1920}
                  height={1080}
                />

                <div className="pt-4 text-[#111]">
                  <Link
                    href="/"
                    className="text-2xl font-bold  leading-6 minion-pro-condensed type-mc-sm font-feature-none"
                  >
                    Stanley Whitney <br />
                    Return to the Garden
                  </Link>
                  <p className="text-lg leading-5 font-light  type-m-sm  text-[#111111d3] minion-pro mt-2">
                    October 2, 2025–January 17, 2026 <br />
                    Athens
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnViewSection;
