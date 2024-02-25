"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiHeartStraightBold } from "react-icons/pi";
import Link from "next/link";
import WishlistItems from "./WishlistItems";

const WishList = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="w-full my-10 min-h-[400px]">
      <div className="w-full flex-center">
        <div className="font-bold text-[32px]">Wishlist</div>
      </div>
      {wishlistItems?.length !== 0 ? (
        <div className="mt-4">
          <div className="w-full flex  flex-col sm:px-12 px-6">
            <div className="w-full text-sm sm:flex hidden items-center sm:justify-start font-bold py-4 border-b-[1px] border-b-slate-200">
              <div className="basis-[40%] flex-center">PRODUCT</div>
              <div className="basis-[30%] flex-center">PRICE</div>
              <div className="basis-[30%] flex-center">ACTIONS</div>
            </div>
            <div className="sm:shadow-none shadow-md border-slate-200 border-[2px] sm:border-none sm:bg-white bg-none">
              {wishlistItems.length !== 0 &&
                wishlistItems.map((item, index) => (
                  <WishlistItems product={item} key={index} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[50%] -mt-5 py-8 m-auto text-center">
          <div className="text-slate-300 flex-center">
            <PiHeartStraightBold size={150} />
          </div>
          <div className="text-slate-300 mt-2">No products add to wishlist</div>
          <Link
            href={"/"}
            className="w-full flex-center text-white font-bold mt-4"
          >
            <div className="py-4 px-8 bg-primaryBlack">RETURN TO SHOP</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishList;
