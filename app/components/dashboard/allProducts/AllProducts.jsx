import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { format } from "timeago.js";
import PopupWrapper from "../PopupWrapper";
import Link from "next/link";
import { useGetAdminProductsQuery } from "@/app/redux/features/products/productApi";
import Image from "next/image";
import { truncateText } from "@/app/utils/truncateText";
import Table from "@/app/utils/Table";

const AllProducts = () => {
  const { data, isLoading } = useGetAdminProductsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const [openPopup, setOpenPopup] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  const columns = [
    { name: "Product", basis: "basis-[25%]" },
    { name: "Category", basis: "basis-[10%]", hidden: true },
    { name: "InStock", basis: "basis-[10%]" },
    { name: "SoldOut", basis: "basis-[10%]" },
    { name: "CreatedAt", basis: "basis-[15%]", hidden: true },
    { name: "UpdatedAt", basis: "basis-[15%]", hidden: true },
    { name: "Actions", basis: "basis-[15%]" },
  ];
  return (
    <Table columns={columns}>
      {!isLoading && (
        <>
          {data?.products?.length !== 0 ? (
            <>
              {data?.products.map((item, index) => (
                <div
                  key={item.name}
                  className={`border-b-[1px] border-b-slate-300 w-full p-2 flex items-center font-medium text-[14px] text-primaryBlack`}
                >
                  <div className="lg:basis-[25%] w-full flex items-center justify-center md:justify-start md:border-none border border-slate-300 gap-2">
                    <Image
                      src={item.image.url}
                      alt={"img"}
                      width={40}
                      height={40}
                      className="aspect-square"
                    />
                    <div className="md:block  hidden">
                      {truncateText(item?.name, 20)}
                    </div>
                  </div>
                  <div className="lg:basis-[10%]  justify-center pr-2 w-full lg:flex hidden  items-center">
                    {item.category}
                  </div>
                  <div
                    className={`${
                      item.inStore === true ? "text-success" : "text-error"
                    } lg:basis-[10%] w-full flex-center`}
                  >
                    {item.inStore === true ? "Yes" : "No"}
                  </div>
                  <div className="lg:basis-[10%] w-full flex-center">
                    {item.soldOut}
                  </div>
                  <div className="lg:basis-[15%] lg:flex hidden text-[13px]  items-center justify-center ">
                    {format(item.createdAt)}
                  </div>
                  <div className="lg:basis-[15%] lg:flex hidden text-[13px]   items-center justify-center ">
                    {format(item.updatedAt)}
                  </div>
                  <div className="lg:basis-[15%] w-full flex-center gap-3">
                    {/* <Link href={`/admin/product/${item._id}`}> */}
                    <div>
                      <AiOutlineEdit size={20} className="cursor-pointer " />
                    </div>
                    {/* </Link> */}
                    <AiOutlineDelete
                      size={18}
                      className="cursor-pointer text-error"
                      // onClick={() => {
                      //   setOpenPopup(true);
                      //   setPopupProduct(item);
                      // }}
                    />
                    {openPopup && (
                      <PopupWrapper>
                        <div className="text-slate-800 font-bold w-fit mx-auto">
                          Are you sure you want to delete{" "}
                          <span className="">
                            ({truncateText(popupProduct.name, 20)})
                          </span>{" "}
                          <div className="flex  justify-between items-center mt-6">
                            <div
                              className="bg-primaryBlack rounded-md text-white font-medium cursor-pointer shadow-md px-4 py-2"
                              onClick={() => setOpenPopup(false)}
                            >
                              Cancel
                            </div>
                            <div className="bg-error shadow-md rounded-md text-white font-medium cursor-pointer px-4 py-2">
                              Delete
                            </div>
                          </div>
                        </div>
                      </PopupWrapper>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="w-full h-full flex-center  text-cBase font-semibold ">
              No Products Found!
            </div>
          )}
        </>
      )}
    </Table>
  );
};

export default AllProducts;
