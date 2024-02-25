import Image from "next/image";
import React from "react";

const Banner2 = () => {
  return (
    <>
      <div className="w-full my-[92px] px-8 flex md:flex-row flex-col gap-8">
        <div className="basis-[47%] bg-white shadow-md flex-between py-2 px-6">
          <div className="text-[18px] sm:text-[24px]">
            <p>Summer Sale</p>
            <p className="font-bold sm:text-[26px] text-[20px]">20% OFF</p>
          </div>
          <div className="sm:block hidden">
            <Image
              width={130}
              height={90}
              alt=""
              src={"/images__1_-removebg-preview.png"}
            />
          </div>
          <div className="sm:px-8 sm:py-3 sm:text-[18px] px-4 py-2 text-[14px]  cursor-pointer bg-primaryBlack font-bold text-white">
            Shop Now
          </div>
        </div>
        <div className="basis-[47%] px-8 py-4 flex-between backgroundSecondary  text-white">
          <div className="sm:text-[24px] text-[20px]">
            <p>Flash Sale</p>
            <p className="font-bold text-[18px] ">30% OFF</p>
          </div>
          <div className="sm:px-8 sm:py-3 sm:text-[18px] px-4 py-2 text-[14px]  cursor-pointer bg-white font-bold text-black">
            Shop Now
          </div>
        </div>
      </div>
      <div className="w-full backgroundBanner2 px-3 flex-center h-[400px] font-bold text-[32px]">
        <div className="text-center text-white">
          <p className="mb-6 sm:text-[32px] text-[24px]">
            EXPLORE THE BEST OF YOU
          </p>
          <button className="sm:px-8 sm:py-3 sm:text-[18px] px-4 py-2 text-[14px]  cursor-pointer bg-white font-[500] text-black">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner2;
