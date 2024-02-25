import React, { useState } from "react";
import Image from "next/image";
import { PriceFormatter } from "@/app/utils/formatPrice";
import QuantityCounter from "../ShopComponents/QuantityCounter";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/redux/features/cart/cartSlice";
import { truncateText } from "@/app/utils/truncateText";

const CartItems = ({ product }) => {
  const [qty, setQty] = useState(product?.productQty);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full  text-sm flex sm:flex-row flex-col sm:items-center font-bold sm:py-4 py-8 border-b-[2px] sm:border-b-[1px]  border-b-slate-200`}
    >
      <div className="basis-[40%] flex ml-2 sm:flex-row  flex-col items-center sm:justify-start justify-center sm:gap-12 gap-3">
        <div className="relative">
          <div
            className="absolute rounded-full -top-1 -right-[6px] cursor-pointer bg-white flex-center shadow-xl p-1"
            title="Remove product from cart"
            onClick={() => dispatch(removeFromCart(product._id))}
          >
            <IoMdClose size={20} />
          </div>
          <Image src={product?.image.url} alt="png" width={130} height={130} />
        </div>
        <div className="sm:truncate sm:w-full sm:line-clamp-1 text-[15px]">
          {truncateText(product?.name, 25)}
        </div>
      </div>
      <div className="basis-[20%] sm:my-0 my-2 flex-center text-slate-400 font-medium text-[16px]">
        {PriceFormatter(product?.price)}
      </div>
      <div className="basis-[20%] flex-center">
        <QuantityCounter
          qty={qty}
          setQty={setQty}
          isCart={true}
          product={product}
        />
      </div>
      <div className="basis-[20%] flex-center sm:my-0 my-2  font-[500] text-[16px]">
        {PriceFormatter(qty * product?.price)}
      </div>
    </div>
  );
};

export default CartItems;
