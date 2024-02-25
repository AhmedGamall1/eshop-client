import Image from "next/image";
import React from "react";

const Banner1 = () => {
  // klfd
  return (
    <div className="bg-primaryBlack py-12 px-6 w-full flex items-center">
      <div className="basis-[55%] h-[250px] hidden sm:flex items-center justify-center">
        <Image
          width={450}
          height={450}
          alt="shoes"
          src={
            "/adidas__Everything_You_Need_to_Know_About_the_Brand___Highsnobiety-removebg-preview.png"
          }
        />
      </div>
      <div className="sm:basis-[42%] w-full justify-items-start">
        <div className="font-extrabold text-white text-[32px]">ULTRA BOOST</div>
        <div className="mt-5 mb-7 ">
          <Image src={"/shoes (1).png"} alt="png" width={500} height={500} />
        </div>
        <button className="py-3 text-[20px] px-6  bg-white text-black flex-center font-medium">
          shop now
        </button>
      </div>
    </div>
  );
};

export default Banner1;
