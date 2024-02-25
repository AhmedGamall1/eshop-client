import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Redressed } from "next/font/google";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});
const Footer = () => {
  return (
    <div className="bg-[#111111] w-full">
      <div className=" w-full md:pt-16 md:pb-10 md:px-[55px] p-8 text-[12px]   flex items-start flex-wrap text-slate-300 gap-6">
        <div className="sm:basis-[20%]">
          <div className="font-bold text-slate-100 text-[18px] mb-4">
            E-SHOP ECOMMERCE
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
        </div>
        <div className="sm:basis-[25%] justify-items-start">
          <div className="font-bold text-slate-100 text-[18px] mb-4">
            ACCOUNT
          </div>
          <div className="flex-between">
            <div className="flex-col gap-2 basis-[50%]">
              <div>About us</div>
              <div> Contact us</div>
              <div>My Account</div>
              <div> Payment Methods</div>
            </div>
            <div className="flex-col gap-2 basis-[50%] ">
              <div>Order history</div>
              <div>Advanced search</div>
              <div>Login</div>
            </div>
          </div>
        </div>
        <div className="sm-[28%] justify-items-start">
          <div className="font-bold text-slate-100 text-[18px] mb-4">About</div>
          <div className="flex-between">
            <div className="flex-col gap-2 basis-[50%]">
              <div>About</div>
              <div> Our Guarantees</div>
              <div>Terms And Conditions</div>
              <div>Privacy Policy</div>
            </div>
            <div className="flex-col gap-2 basis-[50%] ">
              <div>Return Policy</div>
              <div>Advanced search</div>
              <div>Intellectual</div>
            </div>
          </div>
        </div>
        <div className="sm:basis-[18%] lg:text-end">
          <div className="font-bold text-slate-100 text-[18px] mb-4">
            Features
          </div>
          <div className="flex-col gap-2 items-start ">
            <div>Powerful Admin Panel</div>
            <div>Mobile & Retina Optimized</div>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] bg-cBase opacity-50 m-auto w-[90%] my-4" />
      <div className="flex-center text-slate-300 p-8 text-xs">
        <span className="mr-1">
          <FaRegCopyright size={14} />
        </span>{" "}
        <span className={`${redressed.className} mr-1 text-[14px]`}>
          {" "}
          E-SHOP{" "}
        </span>
        {new Date().getFullYear()}. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
