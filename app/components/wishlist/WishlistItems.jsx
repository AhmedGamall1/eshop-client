import React from "react";
import Image from "next/image";
import { PriceFormatter } from "@/app/utils/formatPrice";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { truncateText } from "@/app/utils/truncateText";
import Link from "next/link";
import AddToCart from "../ShopComponents/AddToCart";
import { removeFromWhislist } from "@/app/redux/features/cart/wishListSlice";

const WishlistItems = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full  text-sm flex sm:flex-row flex-col sm:items-center font-bold sm:py-4 py-8 border-b-[2px] sm:border-b-[1px]  border-b-slate-200`}
    >
      <div className="basis-[40%] flex ml-2 sm:flex-row  flex-col items-center sm:justify-start justify-center sm:gap-12 gap-3">
        <div className="relative">
          <div
            className="absolute rounded-full -top-1 -right-[6px] cursor-pointer bg-white flex-center shadow-xl p-1"
            title="Remove product from wishlist"
            onClick={() => dispatch(removeFromWhislist(product))}
          >
            <IoMdClose size={20} />
          </div>
          <Link href={`/product/${product._id}`}>
            <Image
              src={product?.image.url}
              alt="png"
              width={130}
              height={130}
            />
          </Link>
        </div>
        <Link
          href={`/product/${product._id}`}
          className="sm:truncate sm:w-full sm:line-clamp-1 text-[15px]"
        >
          {truncateText(product?.name, 35)}
        </Link>
      </div>
      <div className="basis-[30%] sm:my-0 my-2 flex-center  text-slate-400 font-medium text-[16px]">
        {PriceFormatter(product?.price)}
      </div>
      <div className="basis-[30%] flex flex-col items-center">
        <div onClick={() => dispatch(removeFromWhislist(product))}>
          <AddToCart product={product} qty={1} />
        </div>
      </div>
    </div>
  );
};

export default WishlistItems;
