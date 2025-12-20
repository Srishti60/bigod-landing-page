
import Image from "next/image";
import trade from "../../../../public/images/trade/image.svg";

const Trade = () => {
  return (
    <section className="overflow-hidden">
      <div className="container relative">
        <div className="bg-linear-to-r from-[#224187] to-[#1780a6] hidden lg:block absolute w-full h-full top-1/2  blur-390"></div>
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
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              Crypto moves fast, but volatility destroys value
            </p>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              Gold protects wealth, but it’s slow, illiquid, and hard to move
            </p>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
             BIGOD sits at the intersection of:
            </p>
             
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
