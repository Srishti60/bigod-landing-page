
import Image from "next/image";
import Link from "next/link";
import trade from "../../../../public/images/trade/image.svg";

const Trade = () => {
  return (
    <section className="overflow-hidden">
      <div className="container relative">
        {/* <div className="bg-linear-to-r from-[#003772] to-[#00C2E2] hidden lg:block absolute w-full h-full top-1/2  blur-390"></div> */}
        <div className="grid lg:grid-cols-2 gap-x-5 items-center relative z-10">
          <div>
            <Image
              src={trade}
              alt="macBook-image"
              width={787}
              height={512}
            />
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="font-semibold text-center sm:text-start ">
             Why BIGOD. Why Now
            </h2>
            <p className="lg:text-lg font-normal text-white text-center sm:text-start">
              Crypto moves fast, but volatility destroys value
            </p>
            <p className="lg:text-lg font-normal text-white text-center sm:text-start">
              Gold protects wealth, but it’s slow, illiquid, and hard to move
            </p>
            <p className="lg:text-lg font-normal text-white text-center sm:text-start">
             BIGOD sits at the intersection of: Gold stability × Blockchain speed × Real-world utility
            </p>
              <p className="lg:text-lg font-normal text-white text-center sm:text-start">
               BIGOD is a new standard for holding and moving value.
              </p>
          
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center relative z-10 mt-10 ">
           <h2 className="font-semibold text-2xl text-center mt-6">
            Hold Real Gold. Stay Protected. Move Forward.
            </h2>
            <Link href="https://investor.bingold.to/signup">
             <button
                    className="text-xl font-semibold text-white py-4 px-6 lg:px-12 
  bg-[#d4ad52] hover:bg-[#c3942d] 
  transition-colors duration-300 
  rounded-xl mr-6 cursor-pointer"
                  >
                    Become a BIGOD Holder
                  </button>
                  </Link>
            </div>
      </div>
    </section>
  );
};

export default Trade;
