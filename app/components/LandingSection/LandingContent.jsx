import Image from "next/image";
import React from "react";
import shoesPng from "../../../public/white-shoes.png";
const LandingContent = () => {
  return (
    <div className="lg:flex lg:justify-between justify-center items-center w-[75%] m-auto text-white lg:mt-5 mt-[70px]">
      <div
        className="md:flex hidden lg:items-start lg:p-0 p-4 lg:w-[80%]   flex-col h-[70%]"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        {/* line 1 */}
        <div className="lg:text-[30px] text-[24px] lg:p-0 py-2">
          Spring / Summer Season
        </div>
        {/* line 2 */}
        <div className="flex -mt-2 items-center font-bold lg:text-[64px] gap-3 text-[28px]  lg:p-0 py-2">
          <div className="flex flex-col text-[25px] items-center justify-center">
            <div className="">Up</div>
            <div className="-mt-3">to</div>
          </div>
          <div className="-ml-2"> 50% OFF</div>
        </div>
        {/* line 3 */}
        <div className="text-[22px] -mt-2 font-bold flex items-center  lg:p-0 py-2">
          STARTING AT
          <span className="flex items-start font-bold ml-2">
            <span className="text-[18px] mt-1 text-secondary">$</span>
            <span className="text-[28px] text-secondary">19</span>
            <span className="text-[18px] mt-1 text-secondary">99</span>
          </span>
        </div>
        <button className="text-[20px] mt-2 bg-white text-black flex-center py-4    px-[70px] font-bold">
          Shop Now
        </button>
      </div>
      <div
        className="md:hidden flex lg:items-start lg:p-0 p-4 lg:w-[80%]   flex-col h-[70%]"
        data-aos="fade-up"
        data-aos-duration="1600"
      >
        {/* line 1 */}
        <div className="lg:text-[30px] text-[24px] lg:p-0 py-2">
          Spring / Summer Season
        </div>
        {/* line 2 */}
        <div className="flex -mt-2 items-center font-bold lg:text-[64px] gap-3 text-[28px]  lg:p-0 py-2">
          <div className="flex flex-col text-[25px] items-center justify-center">
            <div className="">Up</div>
            <div className="-mt-3">to</div>
          </div>
          <div className="-ml-2"> 50% OFF</div>
        </div>
        {/* line 3 */}
        <div className="text-[22px] -mt-2 font-bold flex items-center  lg:p-0 py-2">
          STARTING AT
          <span className="flex items-start font-bold ml-2">
            <span className="text-[18px] mt-1 text-secondary">$</span>
            <span className="text-[28px] text-secondary">19</span>
            <span className="text-[18px] mt-1 text-secondary">99</span>
          </span>
        </div>
        <button className="text-[20px] mt-2 bg-white text-black flex-center py-4    px-[70px] font-bold">
          Shop Now
        </button>
      </div>
      <div
        className="lg:flex items-center justify-between hidden"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <Image src={shoesPng} alt="shoes" className="lg:object-cover " />
      </div>
    </div>
  );
};

export default LandingContent;
