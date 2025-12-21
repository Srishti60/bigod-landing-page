"use client";

import Image from "next/image";
import img1 from "../../../../public/images/features/collapse.png";
import img2 from  "../../../../public/images/features/tolerance.png";
import img3 from  "../../../../public/images/features/no-mouth.png";
import arrow from "../../../../public/images/simple/arrow.svg";

const Features = () => {
   const Featuresdata = [
  {
    imgSrc: img1,
    heading: "No sudden collapses",
    subheading:
      "",
  },
  {
    imgSrc:img2 ,
    heading: "No zero-risk scenarios",
    subheading:
      "",
  },
  {
    imgSrc: img3,
    heading: "No sentiment-driven wipeouts",
    subheading:
      "",
  },
];
  return (
    <section id="features-section" className="scroll-mt-20">
      <div className="container relative">
        <div className="bg-linear-to-r from-[#224187] to-[ #1780a6] absolute w-full h-full top-0 -left-1/4 blur-390"></div>
        <div className=" gap-x-4 gap-y-4 relative z-10">
          {/* Column-1 */}
          <div className="mb-10">
            <h2 className="font-semibold mb-6 text-center max-w-2xl mx-auto sm:leading-14 capitalize">
              The Gold Floor: Built-In Downside Protection
            </h2>
            <p className="lg:text-lg font-normal text-lightpurple text-center max-w-2xl mx-auto ">
              BIGOD is designed with a Gold Floor Mechanism Because every token
              is backed by physical gold, its value is anchored to a hard
              baseline - the price of gold itself. Even when crypto markets turn
              chaotic:
            </p>
          </div>
          {/* Column-2 */}
          <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-4 -right-1/4">
              {Featuresdata?.map((items, i) => (
                <div
                  className="bg-darkmode border border-darkmode group hover:border-[#e9cd75] hover:scale-105 duration-300 p-8 rounded-lg flex flex-col gap-3"
                  key={i}
                >
                  <div className="flex justify-between">
                  <div className="rounded-full bg-linear-to-r from-[#224187] to-[#1780a6] w-fit p-4 flex items-center justify-center">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={40}
                      height={40}
                      className="w-11.5"
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
                  <h2 className="text-white/80 text-lg font-medium capitalize">
                    {items.heading}
                  </h2>
                  <p className="text-white/40 text-sm font-normal">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="lg:text-lg font-normal text-lightpurple text-center max-w-2xl mx-auto mt-5 ">
            You hold value with a foundation.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
