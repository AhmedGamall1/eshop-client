import { useGetCategoriesQuery } from "@/app/redux/features/products/productApi";
import React from "react";

const ProductsSideBar = ({ currentCategory, setCurrentCategory }) => {
  const { data } = useGetCategoriesQuery();
  return (
    <div className="flex items-start flex-col sm:pr-8 sm:pl:4 px-2 font-bold">
      <div className="mb-6 text-lg">SORT BY</div>
      <div
        className="flex-center gap-2 font-semibold text-[14px] cursor-pointer"
        onClick={() => setCurrentCategory(null)}
      >
        <div className="bg-white w-[14px] h-[14px] border-slate-400 border-[1px] flex-center">
          <div
            className={`${
              currentCategory !== null && "hidden"
            } w-2 h-2 bg-black `}
          />
        </div>
        <div className="md:text-[14px] text-xs">SHOW ALL</div>
      </div>
      {data &&
        data.Category[0].categories.map((category, index) => (
          <div
            className="flex-center gap-3 cursor-pointer font-semibold text-[14px] mt-6"
            key={index}
            onClick={() => setCurrentCategory(category)}
          >
            <div className="bg-white  w-[14px] h-[14px] border-slate-400 border-[1px] flex-center">
              <div
                className={`${
                  currentCategory !== category && "hidden"
                } w-2 h-2 bg-black `}
              />
            </div>
            <div>{category}</div>
          </div>
        ))}
    </div>
  );
};

export default ProductsSideBar;
