"use client";
import { getTotals } from "@/app/redux/features/cart/cartSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
const CartHeader = () => {
  const { cartItems, cartTotalQty } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  return (
    <Link href={"/cart"} className="relative cursor-pointer">
      <Image src={"/cart.svg"} width={30} height={30} />
      <div className="absolute -top-1 -right-1 w-[6px] h-[6px] rounded-full bg-heart p-[9px] text-[11px] font-bold text-white flex-center">
        {cartTotalQty}
      </div>
    </Link>
  );
};

export default CartHeader;
