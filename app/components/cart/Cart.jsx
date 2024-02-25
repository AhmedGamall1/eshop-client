"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrentPage from "../CurrentPage";
import CartItems from "./cartItems";
import { getTotals } from "@/app/redux/features/cart/cartSlice";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

import { PriceFormatter } from "@/app/utils/formatPrice";
import { showSignup } from "@/app/redux/features/popup/popupSlice";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems?.length > 0) {
      dispatch(getTotals());
    }
  }, [dispatch, cartItems]);

  const handleGoToCheckout = () => {
    if (user) {
      router.push("/checkout");
    } else {
      dispatch(showSignup());
    }
  };
  return (
    <div className="mt-8 mb-16">
      <CurrentPage currentPage={null} />
      {cartItems?.length !== 0 ? (
        <div className="mt-6 flex lg:flex-row lg:items-start flex-col px-8 gap-4">
          <div className="lg:basis-[72%] w-full flex  flex-col">
            <div className="w-full text-sm sm:flex hidden items-center sm:justify-start font-bold py-4 border-b-[1px] border-b-slate-200">
              <div className="basis-[40%] flex-center">PRODUCT</div>
              <div className="basis-[20%] flex-center">PRICE</div>
              <div className="basis-[20%] flex-center">QUNATITY</div>
              <div className="basis-[20%] flex-center">SUBTOTAL</div>
            </div>
            <div className="sm:shadow-none shadow-md border-slate-200 border-[2px] sm:border-none">
              {cartItems.length !== 0 &&
                cartItems.map((item, index) => (
                  <CartItems product={item} key={index} />
                ))}
            </div>
          </div>
          <div className="lg:basis-[28%] w-full ">
            <div className="p-6 bg-white border-slate-200 border-[2px]">
              <div className="font-semibold pb-6 text-[18px]">CART TOTALS</div>
              <div className="flex-between border-b-[1px] pb-3 border-b-slate-200 ">
                <div className="font-semibold text-[14px]">SUBTOTAL</div>
                <div className="text-cBase text-[14px]">
                  {PriceFormatter(cartTotalPrice)}
                </div>
              </div>
              <div className="py-8 flex-between">
                <div className="font-[500] text-[18px]">Total</div>
                <div className="font-semibold text-[18px]">
                  {PriceFormatter(cartTotalPrice)}
                </div>
              </div>
              <div
                onClick={handleGoToCheckout}
                className="w-full bg-primaryBlack py-[14px] px-2 text-white flex-center gap-2 font-bold cursor-pointer hover:opacity-80"
              >
                <div className="text-[14px]">PROCEED TO CHECKOUT</div>
                <FaArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[50%] py-6 m-auto text-center">
          <div className="text-slate-300 flex-center">
            <MdOutlineShoppingBag size={150} />
          </div>
          <div className="text-slate-300 mt-2">No products added to cart</div>
          <div
            onClick={() => router.push("/")}
            className="w-full flex-center text-white font-bold mt-4"
          >
            <div className="py-4 px-8 bg-primaryBlack">RETURN TO SHOP</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
