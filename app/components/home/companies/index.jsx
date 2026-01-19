"use client";
import Image from "next/image";
import img1 from "../../../../public/images/work/coincap.svg";
import img2 from "../../../../public/images/work/coin.svg"
import img3 from "../../../../public/images/work/pancake.svg";
import img4 from "../../../../public/images/work/binace.png";
import img5 from "../../../../public/images/work/coinigooo.svg";
import img6 from "../../../../public/images/work/coin base.png"
import img7 from "../../../../public/images/work/TrustWallet.png";
import img8 from "../../../../public/images/work/metamask.png";


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
  {
    imgSrc:img4 ,
  },
  {
    imgSrc:img5 ,
  },
   {
    imgSrc:img6 ,
  },
   {
    imgSrc:img7 ,
  },
   {
    imgSrc:img8 ,
  },
 
];

 const loopPartners = [...logodata, ...logodata];

  return (
  <section className="border-none -my-2 pt-0">
  <div className="overflow-hidden w-full py-8">
    <div className="scroll-container flex gap-16 whitespace-nowrap">
      {loopPartners.map((item, i) => (
        <div key={i} className="shrink-0">
          <Image
            src={item.imgSrc}
            alt="company-logo"
            width={203}
            height={101}
            className="w-auto lg:h-24 h-12 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Companies;
