"use client";
import {
  decreaseProductQty,
  increaseProductQty,
} from "@/app/redux/features/cart/cartSlice";
import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
const QuantityCounter = ({ qty, setQty, isCart, product }) => {
  const dispatch = useDispatch();
  const handleIncreaseQty = () => {
    if (isCart) {
      dispatch(increaseProductQty(product));
      setQty((prev) => prev + 1);
    } else {
      setQty((prev) => prev + 1);
    }
  };
  const handleDecreaseQty = () => {
    if (isCart) {
      setQty((prev) => prev - 1);
      dispatch(decreaseProductQty(product));
    } else {
      if (qty !== 1) {
        setQty((prev) => prev - 1);
      }
    }
  };
  return (
    <div className="border-slate-200 border-[1px] font-bold flex items-center text-primaryBlack">
      <div className="basis-[20%] p-2 border-r-slate-200 border-r-[1px] cursor-pointer">
        <BiMinus size={20} onClick={handleDecreaseQty} />
      </div>
      <div className="basis-[60%] px-5 py-3">{qty}</div>

      <div className="basis-[20%] border-l-slate-200 p-2 border-l-[1px] cursor-pointer">
        <BiPlus size={20} onClick={handleIncreaseQty} />
      </div>
    </div>
  );
};

export default QuantityCounter;
