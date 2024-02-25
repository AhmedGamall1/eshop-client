"use client";
import React, { useState } from "react";
import ProductsSideBar from "./ProductsSideBar";
import ProductsContent from "./ProductsContent";

const ProductsSection = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  return (
    <div className="lg:px-12 px-2 my-16 flex">
      <div className="sm:basis-[17%] basis-[13%] flex sm:px-1 px-6">
        <ProductsSideBar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <div className="w-[1px] h-full md:block hidden bg-slate-200 mr-2" />
      </div>
      <div
        className="sm:basis-[83%] basis-[87%]"
        // data-aos="fade-up"
        // data-aos-duration="1200"
      >
        <ProductsContent currentCategory={currentCategory} />
      </div>
    </div>
  );
};

export default ProductsSection;
