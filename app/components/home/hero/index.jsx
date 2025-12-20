"use client";
import banni from "../../../../public/images/banner/bannii.png"
import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <section className="relative pb-0" id="home-section">
      <div className="bg-banner-image absolute w-full h-full top-0 blur-390"></div>
      <div className="overflow-hidden">
        <div className="container  relative">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 my-16 items-center">
              <div className="lg:col-span-7 mb-16">
                <h1 className=" lg:text-start text-center sm:leading-snug leading-tight capitalize">
                  Own Real Gold
                </h1>
                <h2 className="lg:text-start text-center sm:leading-snug leading-tight capitalize">
                  Move at Crypto Speed
                </h2>
                <h3 className=" mt-4 lg:text-start text-center sm:leading-snug leading-tight capitalize">
                  BIGOD is a gold-backed RWA security token <br /> built on BNB
                  Chain (BEP-20)
                </h3>
                <p className="text-white font-normal mb-10 max-w-[70%] mt-3 lg:text-start text-center lg:mx-0 mx-auto capitalize">
                 Each BIGOD represents 250 grams of real, physical gold, securely stored in insured,
                  audited vaults and verified on-chain</p>

                <div className="flex align-middle justify-center lg:justify-start">
                  <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-[#e9cd75] rounded-xl mr-6 cursor-pointer">
                    Start Holding BIGOD
                  </button>
                 
                </div>
              </div>
              <div className="lg:col-span-5 lg:-m-48 -m-20 overflow-hidden">
                <Image
                  src={banni}
                  alt="nothing"
                  width={820}
                  height={630}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg sm:m-0 m-4">
            <div className="overlay flex items-center justify-between border-b border-solid border-border p-5 z-50 backdrop-blur-sm">
              <h3 className="text-white">How It Works</h3>
              <button onClick={closeModal} className="inline-block dark:invert">
                <Icon
                  icon="tabler:circle-x"
                  className="text-2xl text-white hover:cursor-pointer hover:text-primary"
                />
              </button>
            </div>
            <iframe
              height="400"
              className="p-4 md:w-[50rem] w-full"
              src="https://www.youtube.com/embed/xAAEiykov1w?si=7Keuu5t0oJzZ67Q-"
              title="How Our Product Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
