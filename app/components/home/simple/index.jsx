import Image from "next/image";
import power from "../../../../public/images/simple/power.svg";
import GaugeChart from "./gaugeChart";


const Simple = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10">
        <div className="bg-linear-to-r from-[#224187] to-[#1780a6] hidden lg:block absolute w-full h-full top-1/2 blur-390"></div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-center font-semibold mb-6 sm:leading-16 capitalize">
            Verified Transparency & Trust
          </h2>

          <p className="text-center text-lightpurple text-lg font-normal mb-8">
            BIGOD's smart contract and on-chain data are publicly verifiable
            RWA.io Trust Score: 90.6 / 100 (High)
          </p>

          <div className="flex md:flex-row flex-col gap-5 items-center p-10 rounded-xl bg-linear-to-r from-[#224187] to-[#1780a6]">
            {/* Gauge */}
            <GaugeChart value={90.6} />

            {/* Text */}
            <div>
              <p className="text-left text-lightpurple text-lg font-normal mb-1">
                Trust Score : <b>90.60</b>
              </p>

              <p className="text-left text-lightpurple text-base font-normal mb-2">
                The contract code has been analyzed and found to have a low
                level risk of vulnerabilities.
              </p>

              <div className="flex gap-2 items-center">
                <p className="text-left text-lightpurple text-lg font-normal">
                  Powered By:
                </p>
                <Image
                  src={power}
                  alt="img"
                  width={45}
                  height={45}
                  className="w-auto h-7.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;
