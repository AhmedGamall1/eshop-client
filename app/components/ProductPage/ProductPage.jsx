"use client";
import Header from "../LandingSection/Header";
import { useGetSingleProductQuery } from "@/app/redux/features/products/productApi";
import { PriceFormatter } from "@/app/utils/formatPrice";
import { Rating } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddToWhislist from "../ShopComponents/AddToWhislist";
import QuantityCounter from "../ShopComponents/QuantityCounter";
import AddToCart from "../ShopComponents/AddToCart";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import sidebarImg from "../../../public/sidebar-banner18.jpg";
const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { data } = useGetSingleProductQuery(productId);
  useEffect(() => {
    if (data) {
      setProduct(data.product);
    }
  }, [data]);
  return (
    <>
      <Header isLanding={false} />
      <div className="flex px-8 my-8 sm:my-12">
        {product && (
          <div className={`md:basis-[80%] w-full sm:flex-row flex flex-col`}>
            <div className="sm:basis-[40%] w-full relative border-slate-200 border-[1px] h-[350px]">
              <Image layout="fill" objectFit="cover" src={product.image.url} />
            </div>
            <div className="sm:basis-[60%] sm:ml-6 sm:mt-0 mt-3 sm:pr-2">
              <div
                href={`/product/${product._id}`}
                className="sm:text-[32px] text-[26px] font-bold"
              >
                {product.name}
              </div>
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
              <div className="mt-2 text-black text-[14px] font-medium flex items-center gap-3">
                <span> Size:</span>
                <div className="flex-center gap-2 cursor-pointer">
                  <div className="border-slate-200 border py-[4px] px-3 text-[14px] text-cBase">
                    XL
                  </div>
                  <div className="border-slate-200 border py-[4px] px-3 text-[14px] text-cBase">
                    L
                  </div>
                  <div className="border-slate-200 border py-[4px] px-3 text-[14px] text-cBase">
                    M
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-200 mt-8 mb-4" />
              <div className="w-full flex flex-wrap items-center justify-start gap-4">
                <QuantityCounter qty={qty} setQty={setQty} />
                <AddToCart product={product} qty={qty} />
              </div>
              <div className="w-full h-[1px] bg-slate-200 my-4" />

              <div className="flex items-center justify-start  gap-1  cursor-pointer text-[12px] font-semibold uppercase">
                <AddToWhislist product={product} QuickView={true} />
              </div>
            </div>
          </div>
        )}
        <div className="md:basis-[20%] md:flex flex-col hidden pr-3">
          <div className="py-6 flex justify-start gap-8">
            <MdOutlineLocalShipping size={40} fill="#222529" />
            <div className="text-sm font-medium">
              <p>FREE</p>
              <p className="-mt-1">SHIPPING</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-200 " />
          <div className="py-6 flex justify-start gap-8">
            <RiMoneyDollarCircleLine size={40} fill="#222529" />
            <div className="text-sm font-medium">
              <p>100% MONEY</p>
              <p className="-mt-1">BACK GUARANTEE</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-200 " />
          <div className="py-6 flex justify-start gap-8">
            <BiSupport size={40} fill="#222529" />
            <div className="text-sm font-medium">
              <p>ONLINE</p>
              <p className="-mt-1">SUPPORT 24/7</p>
            </div>
          </div>
          <div className="">
            <Image src={sidebarImg} alt="png" className="w-full h-[250px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
