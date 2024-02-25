"use client";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

const WishlistHeader = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  console.log(wishlistItems);
  return (
    <Link className="relative cursor-pointer" href={"/wishlist"}>
      <FaRegHeart size={28} className="" />
      <div className="absolute -top-1 -right-1 w-[6px] h-[6px] rounded-full bg-heart p-[9px] text-[11px] font-bold text-white flex-center">
        {wishlistItems.length}
      </div>
    </Link>
  );
};

export default WishlistHeader;
