"use client";
import { addToWhislist } from "@/app/redux/features/cart/wishListSlice";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
const AddToWhislist = ({ product, QuickView }) => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      {wishlistItems?.findIndex((item) => item._id === product._id) >= 0 ? (
        <>
          <div>
            <Link href={"/wishlist"}>
              <FaHeart
                title="Browse wishlist"
                className="sm:w-5 sm:h-5 w-[16px] h-[16px] cursor-pointer text-red-500"
              />
            </Link>
          </div>
          {QuickView && <Link href={"/wishlist"}>Browse wishlist</Link>}
        </>
      ) : (
        <>
          <div>
            <FaRegHeart
              onClick={() => dispatch(addToWhislist(product))}
              title="Add To wishlist"
              className="sm:w-5 sm:h-5 w-[16px] h-[16px] cursor-pointer"
            />
          </div>
          {QuickView && (
            <div onClick={() => dispatch(addToWhislist(product))}>
              Add to wishlist
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AddToWhislist;
