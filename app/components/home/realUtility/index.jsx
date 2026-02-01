"use client";
import Image from "next/image";
import mainLogo from "../../../../public/images/simple/mainLogo.svg";
import chart from "../../../../public/images/work/predictive-chart.png";
import arrow from "../../../../public/images/simple/arrow.svg";
import img1 from "../../../../public/images/simple/sourcing.png";
import img2 from "../../../../public/images/work/transaction.png";
import img3 from "../../../../public/images/work/giftbox.png";
import img4 from "../../../../public/images/work/marketplace.png";
import whitearrow from "../../../../public/images/simple/white-arrow.png";
import dots from "../../../../public/images/simple/3dot.png";



const RealUtility = () => {
 const workdataLeft = [
  {
    imgSrc: img1,
    heading: "Cross-border settlement",
    subheading:
      "",
  },
  {
    imgSrc: img2,
    heading: "B2B payments",
    subheading:
      "",
  }
];
  const workdataRight = [
  {
    imgSrc:img3 ,
    heading: "Staking rewards up to 6% APR",
    subheading:
      "",
  },
   {
    imgSrc: img4,
    heading: "Marketplace integrations",
    subheading:
      "",
  },
];
  return (
    <section className="relative ">
        {/* <div className="bg-banner-image absolute w-full h-full top-0 blur-390"></div> */}
      <div className="container ">
        <Image
        src={whitearrow}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute top-17 left-10 opacity-40 hidden lg:block"
      />
      <Image
        src={whitearrow}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute top-17 right-10 opacity-40 rotate-180 hidden lg:block"
      />
      <Image
        src={dots}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute bottom-10 right-40 opacity-40 hidden lg:block"
      />
      <Image
        src={dots}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute bottom-10 left-40 opacity-40 rotate-180 hidden lg:block"
      />
       
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-center mb-14">
            <h2 className="mb-3 capitalize">
              Real Utility, Not Just a Store of Value
            </h2>
            <p className="text-lightpurple max-w-2xl mx-auto md:text-lg font-normal md:leading-8 capitalize">
              BIGOD is built to be used
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-content-between gap-5 align-items-center ">
            <div className="flex flex-col gap-y-20 gap-x-20 mt-20">
              {workdataLeft?.map((items, i) => (
                <div
                  className="bg-linear-to-r from-[#002D5E] to-[#004DA0] h-45 w-96 border border-[#95ABBD] group hover:border-[#e9cd75] hover:scale-105 duration-300 p-8 relative rounded-2xl hover:mb-5"
                  key={i}
                >
                  <div className="rounded-full flex justify-center absolute -top-10 left-40% p-6 bg-linear-to-r from-[#002D5E] to-[#004DA0]">
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
                  <p className="text-2xl text-white/80 font-semibold text-center mt-8 capitalize">
                    {items.heading}
                  </p>
                  <p className="text-base font-normal text-white/60 text-center mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-100 w-auto relative md:top-40">
              <Image
                src={mainLogo}
                alt="img"
                width={300}
                height={300}
                className="h-75 w-auto"
              />
            </div>
            <div className="flex flex-col gap-y-20 gap-x-20 mt-20">
              {workdataRight?.map((items, i) => (
                <div
                  className="bg-linear-to-r from-[#002D5E] to-[#004DA0] border border-[#95ABBD] h-45 w-96   group hover:border-[#e9cd75] hover:scale-105 duration-300 p-8 relative rounded-2xl hover:mb-5"
                  key={i}
                >
                  <div className="rounded-full flex justify-center absolute -top-10 left-40% p-6 bg-linear-to-r from-[#002D5E] to-[#004DA0]">
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
                  <p className="text-2xl text-white/80 font-semibold text-center mt-8 capitalize">
                    {items.heading}
                  </p>
                  <p className="text-base font-normal text-white/60 text-center mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-20">
            <div className="bg-linear-to-r from-[#002D5E] to-[#004DA0] h-45 w-96 border border-[#95ABBD]  group hover:border-[#e9cd75] hover:scale-105 duration-300 p-8 relative rounded-2xl">
              <div className="rounded-full flex justify-center absolute -top-10 left-1/2 -translate-x-1/2 p-6 bg-linear-to-r from-[#002D5E] to-[#004DA0]">
                <Image src={chart} alt="img" width={44} height={44} />
              </div>

              <div>
                <Image
                  src={arrow}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div>

              <p className="text-2xl text-white/80 font-semibold text-center mt-8 capitalize">
                Future DeFi utility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealUtility;
