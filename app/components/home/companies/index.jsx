"use client";
import Image from "next/image";
import img1 from "../../../../public/images/work/coincap.svg";
import img2 from "../../../../public/images/work/coin.svg"
import img3 from "../../../../public/images/work/pancake.svg";

const Companies = () => {
  const logodata= [
  {
    imgSrc: img1,
  },
   {
    imgSrc:img2 ,
  },
  {
    imgSrc:img3 ,
  },
 
];
  return (
    <section className="border-none -my-2 pt-0">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-y-20 gap-x-5 mt-20">
          {logodata?.map((item, i) => (
              <div key={i}>
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  width={203}
                  height={101}
                  className="w-auto lg:h-25.5 h-12.5 object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
