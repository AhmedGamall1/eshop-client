"use client";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { CiCirclePlus } from "react-icons/ci";
import {
  useAddCategoriesMutation,
  useGetCategoriesQuery,
} from "@/app/redux/features/products/productApi";
import toast from "react-hot-toast";

const AddCategory = () => {
  const [AddCategory, { isSuccess, error, isLoading }] =
    useAddCategoriesMutation();
  const { data, refetch } = useGetCategoriesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const [categories, setCategories] = useState([]);
  const [matched, setMatched] = useState(true);
  useEffect(() => {
    if (data) {
      setCategories(data.Category[0].categories);
    }
    if (isSuccess) {
      toast.success("categories updated successfully");
      refetch();
    }
    if (error) {
      if ("data" in error) {
        toast.error(error.data.message);
      }
    }
  }, [data, isSuccess, error]);

  useEffect(() => {
    if (data) {
      if (data.Category[0].categories === categories) {
        setMatched(true);
      } else {
        setMatched(false);
      }
    }
  }, [data, categories]);
  const handleSaveCategories = async (e) => {
    e.preventDefault();
    // if (!matched) {
    //   await AddCategory({ categories });
    // }
  };
  return (
    <div className="h-full py-4 ">
      <div className="md:w-[75%] w-[85%] m-auto h-[500px] relative bg-white rounded-md overflow-y-auto shadow-xl px-4 py-3">
        <h1 className="text-black font-bold">Categories</h1>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        <form onSubmit={(e) => handleSaveCategories(e)}>
          {categories &&
            categories.map((category, index) => (
              <div
                key={index}
                className="px-2 w-full flex items-center gap-1 mt-6"
              >
                <input
                  required
                  id={index}
                  type="text"
                  className="basis-[90%] border-[1px] border-[#A0A5BA] rounded-sm outline-none p-2"
                  value={category}
                  onChange={(e) => {
                    const newArr = [...categories];
                    newArr[index] = e.target.value;
                    setCategories(newArr);
                  }}
                />
                <div className="basis-[10%] flex items-center justify-center gap-2">
                  <label htmlFor={index}>
                    <TiEdit
                      color="#A0A5BA"
                      className="cursor-pointer"
                      size={23}
                    />
                  </label>

                  <FaRegTrashAlt
                    className={`${
                      index === 0
                        ? "text-[#A0A5BA] cursor-not-allowed"
                        : "cursor-pointer text-red-400"
                    }`}
                    size={20}
                    // onClick={() => {
                    //   if (index !== 0) {
                    //     const newArr = [...categories];
                    //     newArr.splice(index, 1);
                    //     setCategories(newArr);
                    //   }
                    // }}
                  />
                </div>
              </div>
            ))}
          <div className="mt-3 w-full flex-center font-bold cursor-pointer text-[#A0A5BA]">
            <CiCirclePlus
              size={35}
              // onClick={() => {
              //   const newArr = [...categories];
              //   newArr.push("");
              //   setCategories(newArr);
              // }}
            />
          </div>
          <div className="flex w-full  justify-end mt-5 ">
            <button
              disabled={matched}
              type="submit"
              className="bg-primary w-[30%] hover:opacity-70 py-2 text-white rounded-md  "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
