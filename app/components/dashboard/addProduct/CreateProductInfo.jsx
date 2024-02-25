"use client";

import { useGetCategoriesQuery } from "@/app/redux/features/products/productApi";
import { useEffect, useState } from "react";

const CreateProductInfo = ({ setPage, productInfo, setProductInfo }) => {
  const [hasError, setHasError] = useState(false);
  const [categories, setCategories] = useState([]);
  const { data } = useGetCategoriesQuery(
    {},
    { refetchOnMountOrArgChange: true },
  );
  useEffect(() => {
    if (data) {
      setCategories(data.Category[0].categories);
    }
  }, [data]);

  return (
    <div className="h-full py-4">
      <div className="md:w-[75%] w-[90%] m-auto h-full bg-white rounded-md relative  shadow-xl px-4 py-3">
        <div className="">
          <h1 className="text-black font-bold">Add Product</h1>
          <div className="w-full h-[1px] bg-slate-400 my-2" />
          <form
            className="px-2"
            onSubmit={(e) => {
              e.preventDefault();

              // if (
              //   parseFloat(productInfo.discountPrice) >=
              //   parseFloat(productInfo.price)
              // ) {
              //   setHasError(true);
              // } else {
              //   setHasError(false);

              //   setPage(2);
              // }
            }}
          >
            {/* name */}
            <div>
              <label className="text-[#A0A5BA]">Product Name</label>
              <input
                required
                value={productInfo.name}
                onChange={(e) =>
                  setProductInfo({ ...productInfo, name: e.target.value })
                }
                type="text"
                className="w-full border-[1px] border-[#A0A5BA] rounded-sm outline-none p-1"
              />
            </div>
            {/* discription */}
            <div className="mt-3">
              <label className="text-[#A0A5BA]">Product Description</label>
              <textarea
                value={productInfo.description}
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    description: e.target.value,
                  })
                }
                rows={2}
                required
                type="text"
                className="w-full resize-none border-[1px]  border-[#A0A5BA] rounded-sm outline-none p-1"
              />
            </div>
            {/* price & discount */}
            <div className="flex w-full items-center justify-between gap-4">
              <div className="w-[50%]">
                <label className="text-[#A0A5BA]">Price</label>
                <input
                  required
                  value={productInfo.price}
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      price: e.target.value,
                    })
                  }
                  type="number"
                  className="w-full border-[1px] border-[#A0A5BA] rounded-sm outline-none p-1"
                />
              </div>
              <div className="w-[45%]">
                <label className="text-[#A0A5BA]">Discount Price</label>
                <input
                  value={productInfo.discountPrice}
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      discountPrice: e.target.value,
                    })
                  }
                  type="number"
                  className="w-full border-[1px] border-[#A0A5BA] rounded-sm outline-none p-1"
                />
              </div>
            </div>
            {hasError && (
              <p className="text-red-500 text-[12px]">
                Discount price cannot be greater than or equal to the price
              </p>
            )}
            {/* category */}
            <div className="mt-3">
              <label htmlFor="category" className={"text-[#A0A5BA]"}>
                Categories
              </label>
              <select
                required
                id="category"
                name=""
                className={
                  "w-full border-[#A0A5BA] border-[1px] rounded-sm outline-none p-1"
                }
                onChange={(e) =>
                  setProductInfo({ ...productInfo, category: e.target.value })
                }
                value={productInfo.category}
              >
                <option value="" className="text-[#A0A5BA]">
                  Select Category
                </option>
                {categories &&
                  categories.map((item, index) => (
                    <option key={index} value={item} className="text-[#A0A5BA]">
                      {item}
                    </option>
                  ))}
              </select>
            </div>
            {/* tags */}
            <div className="mt-3">
              <label className="text-[#A0A5BA]">
                Tags <span className="text-sm">[optional]</span>
              </label>
              <input
                value={productInfo.tags}
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    tags: e.target.value,
                  })
                }
                type="text"
                className="w-full border-[1px] border-[#A0A5BA] rounded-sm outline-none p-1"
              />
            </div>
            <div className="flex w-full justify-end mt-5">
              <button
                type="submit"
                className="bg-primary w-[30%] hover:opacity-70 py-2 text-white rounded-md"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductInfo;
