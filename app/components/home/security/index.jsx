"use client";

import Image from "next/image";
// import mainLogo from "../../../../public/images/simple/hele.svg";
import mainLogo from "../../../../public/images/simple/hele2.png";
import chart from "../../../../public//images/work/security.png";
import img1 from "../../../../public/images/work/logistics-management.png";
import img2 from "../../../../public/images/work/encrypted.png";
import img3 from "../../../../public/images/work/coronavirus.png";
import img4 from "../../../../public/images/work/certified.png";
import arrow from "../../../../public/images/simple/arrow.svg";
import dots from "../../../../public/images/simple/3dot.png";
import whitearrow from "../../../../public/images/simple/white-arrow.png";
import goldendots from "../../../../public/images/simple/golden3dot.png";



const Security = () => {
  const securityLeft = [
    {
      imgSrc: img1,
      heading: "CertiK audited",
      subheading: "",
    },
    {
      imgSrc: img2,
      heading: "2048-bit encryption",
      subheading: "",
    },
  ];
  const securityRight = [
    {
      imgSrc: img3,
      heading: "Active in 20+ countries",
      subheading: "",
    },
    {
      imgSrc: img4,
      heading: "AML & ISO-certified across multiple regions",
      subheading: "",
    },
  ];
  return (
    <section id="features-section" className="scroll-mt-20">
      <div className="container relative">
        <Image
        src={whitearrow}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute top-4 -left-14 opacity-40 hidden lg:block"
      />

      <Image
        src={whitearrow}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute top-4 -right-12 opacity-40 rotate-180 hidden lg:block"
      />
        <Image
        src={goldendots}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute bottom-10 right-30 hidden lg:block"
      />
      <Image
        src={goldendots}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute bottom-10 left-30 rotate-180 hidden lg:block"
      />
        <div className="bg-linear-to-r from-[#224187] to-[ #1780a6] "></div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-center mb-14">
            <h2 className="mb-3 capitalize">
              Institutional-Grade Security & Compliance
            </h2>
          </div>

          <div className="flex md:flex-row flex-col justify-content-between gap-5 align-items-center ">
            <div className="flex flex-col gap-y-20 gap-x-20 mt-20">
              {securityLeft?.map((items, i) => (
                <div
                  className="bg-darkmode p-8 border border-darkmode group hover:border-[#e9cd75] hover:scale-105 duration-300 rounded-lg flex flex-col gap-3 h-55 w-87.5"
                  key={i}
                >
                  <div className="flex justify-between">
                    <div className="rounded-full bg-linear-to-r from-[#224187] to-[#1780a6] w-fit p-4 flex items-center justify-center">
                      <Image
                        src={items.imgSrc}
                        alt={items.imgSrc}
                        width={44}
                        height={44}
                      />
                    </div>
                    <div>
                      <Image
                        src={arrow}
                        alt="arrow-bg"
                        width={85}
                        height={35}
                      />
                    </div>
                  </div>

                  <p className="text-lg text-white/80 font-semibold text-left mt-3 capitalize">
                    {items.heading}
                  </p>
                  <p className="text-base font-normal text-white/60 text-center mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-100 w-auto relative top-52">
              <Image
                src={mainLogo}
                alt="img"
                width={300}
                height={300}
                className="h-75 w-auto"
              />
            </div>
            <div className="flex flex-col gap-y-20 gap-x-20 mt-20">
              {securityRight?.map((items, i) => (
                <div
                  className="bg-darkmode p-8 border border-darkmode group hover:border-[#e9cd75] hover:scale-105 duration-300 rounded-lg flex flex-col gap-3 h-55 w-87.5"
                  key={i}
                >
                  <div className="flex justify-between">
                    <div className="rounded-full bg-linear-to-r from-[#224187] to-[#1780a6] w-fit p-4 flex items-center justify-center">
                      <Image
                        src={items.imgSrc}
                        alt={items.imgSrc}
                        width={44}
                        height={44}
                      />
                    </div>
                    <div>
                      <Image
                        src={arrow}
                        alt="arrow-bg"
                        width={85}
                        height={35}
                      />
                    </div>
                  </div>
                  <p className="text-lg text-white/80 font-semibold text-left mt-3 capitalize">
                    {items.heading}
                  </p>
                  <p className="text-base font-normal text-white/60 text-center mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            <div className="bg-darkmode p-8 border border-darkmode group hover:border-[#e9cd75] hover:scale-105 duration-300 rounded-lg flex flex-col gap-3 h-55 w-87.5">
              <div className="flex justify-between">
                <div className="rounded-full bg-linear-to-r from-[#224187] to-[#1780a6] w-fit p-4 flex items-center justify-center">
                  <Image src={chart} alt="hii" width={44} height={44} />
                </div>
                <div>
                  <Image src={arrow} alt="arrow-bg" width={85} height={35} />
                </div>
              </div>

              <p className="text-lg text-white/80 font-semibold text-left mt-3 capitalize">
                Multi-jurisdiction framework for gold custody & tokenization
              </p>
              <p className="text-base font-normal text-white/60 text-center mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300"></p>
            </div>
          </div>
          <h2 className="lg:text-lg font-normal text-lightpurple text-center max-w-2xl mx-auto mt-8 ">
            Built to meet institutional standards, ready for global scale.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Security;
