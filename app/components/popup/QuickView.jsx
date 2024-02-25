import { PriceFormatter } from "@/app/utils/formatPrice";
import { Rating } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AddToWhislist from "../ShopComponents/AddToWhislist";
import QuantityCounter from "../ShopComponents/QuantityCounter";
import AddToCart from "../ShopComponents/AddToCart";
import { useSelector } from "react-redux";
import Link from "next/link";
const QuickView = ({ product, setProductView }) => {
  const [qty, setQty] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="w-full h-full relative flex-center z-[999999] center-container">
        <div className="md:w-[70%] w-[85%]  shadow-lg h-[540px] relative overflow-y-auto bg-white sm:p-8 p-6">
          <div
            className="absolute top-0 right-0 text-base cursor-pointer"
            onClick={() => setProductView(null)}
          >
            <IoMdClose size={35} />
          </div>
          <div className="w-full flex">
            <div className="sm:basis-[46%] basis-[60%] relative border-slate-200 border-[1px] h-[350px]">
              <Image layout="fill" objectFit="cover" src={product.image.url} />
            </div>
            <div className="sm:basis-[54%] basis-[40%] ml-6">
              <Link
                href={`/product/${product._id}`}
                className="sm:text-[32px] text-[26px] font-bold"
              >
                {product.name}
              </Link>
              <div className="">
                <Rating readOnly size="medium" value={3} />
              </div>
              <div className="sm:text-[26px] text-[22px] my-1 font-semibold">
                {PriceFormatter(product.price)}
              </div>
              <div className="text-[#A0A5BA] text-[12px] sm:text-[16px]">
                {product.description}
              </div>
              <div className="mt-4 text-black text-[14px] font-medium">
                Category: <span className="text-base">{product.category}</span>
              </div>

              <div className="w-full h-[1px] bg-slate-200 mt-8 mb-4" />
              <div className="w-full flex flex-wrap items-center justify-start gap-4">
                <QuantityCounter
                  qty={qty}
                  setQty={setQty}
                  product={null}
                  isCart={false}
                />
                {cartItems?.findIndex((item) => item._id === product._id) >=
                0 ? (
                  <div className="flex gap-4 items-center">
                    <AddToCart product={product} qty={qty} />
                    <Link
                      className="font-semibold text-[14px] underline"
                      href="/cart"
                    >
                      view cart
                    </Link>
                  </div>
                ) : (
                  <AddToCart product={product} qty={qty} />
                )}
              </div>
              <div className="w-full h-[1px] bg-slate-200 my-4" />

              <div className="flex items-center justify-start  gap-1  cursor-pointer text-[12px] font-semibold uppercase">
                <AddToWhislist product={product} QuickView={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed top-0 left-0  bg-black  opacity-70 w-full h-full"
        onClick={() => setProductView(null)}
      ></div>
    </>
  );
};

export default QuickView;
