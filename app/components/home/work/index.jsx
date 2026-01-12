"use client";
import Companies from "../companies";
import arrow from "../../../../public/images/simple/arrow.svg";
import Image from "next/image";

const Work = () => {
  return (
    <section className="relative">
      <div className="bg-banner-image absolute w-full h-full right-auto blur-390" />
      <Image
        src={arrow}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute top-20 left-10 hidden lg:block"
      />

      <Image
        src={arrow}
        alt="arrow-bg"
        width={105}
        height={35}
        className="absolute bottom-14 right-10 hidden lg:block"
      />

      <div className="container">
        <div className="text-center mb-14">
          <h2 className="mb-3 capitalize">Trusted. Listed. Growing Globally</h2>
          <p className="text-lightpurple max-w-2xl mx-auto md:text-lg font-normal md:leading-8 capitalize">
            BIGOD is already live and accessible across leading crypto
            platforms: With strong early traction, BIGOD is now preparing for
            major Tier-1 and Tier-2 CEX listings, expanding global liquidity and
            access in the coming months
          </p>
        </div>

        <Companies />
      </div>
    </section>
  );
};

export default Work;
