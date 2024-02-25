import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const CurrentPage = ({ currentPage }) => {
  return (
    <div className="w-full m-auto flex flex-wrap items-center gap-4 justify-center font-bold text-[16px] md:text-[18px]">
      <Link href={"/cart"} className="text-text-primaryBlack">
        Shopping Cart
      </Link>
      <IoIosArrowForward
        size={30}
        className={`${
          currentPage === "checkout" ? " text-primaryBlack" : "text-cBase"
        }
        ${currentPage === "orderComplete" ? " text-primaryBlack" : "text-cBase"}
        `}
      />
      <Link
        href={"/checkout"}
        className={`${
          currentPage === "checkout" ? " text-primaryBlack" : "text-cBase"
        }
        ${currentPage === "orderComplete" ? " text-primaryBlack" : "text-cBase"}
        `}
      >
        Checkout
      </Link>
      <IoIosArrowForward
        size={30}
        className={`
        ${currentPage === "orderComplete" ? " text-primaryBlack" : "text-cBase"}
        `}
      />

      <div
        className={`
        ${currentPage === "orderComplete" ? " text-primaryBlack" : "text-cBase"}
        `}
      >
        Order Complete
      </div>
    </div>
  );
};

export default CurrentPage;
