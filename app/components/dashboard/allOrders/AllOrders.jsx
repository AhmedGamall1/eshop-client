import React from "react";

import { format } from "timeago.js";
import { useGetAdminOrdersQuery } from "@/app/redux/features/orders/orderApi";
// import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";
import Table from "@/app/utils/Table";
import { PriceFormatter } from "@/app/utils/formatPrice";

const AllOrders = () => {
  const { data, isLoading, isSuccess } = useGetAdminOrdersQuery();

  //specify order columns
  const columns = [
    { name: "Order Number", basis: "basis-[20%]", inSm: "Number" },
    { name: "Order Status", basis: "basis-[20%]", inSm: "Status" },
    { name: "Items Qty", basis: "basis-[15%]", hidden: true },
    { name: "Total Price", basis: "basis-[15%]", inSm: "Price" },
    { name: "Order Time", basis: "basis-[25%]", hidden: true },
    { name: "Order Details", basis: "basis-[20%]", inSm: "Details" },
  ];

  return (
    <Table columns={columns}>
      {!isLoading && (
        <>
          {data?.orders?.length !== 0 ? (
            <>
              {data?.orders.map((item, index) => (
                <div
                  key={item.name}
                  className={`border-b-[1px] border-b-slate-300 w-full p-2 flex items-center`}
                >
                  <div className="lg:basis-[20%] w-full flex items-center justify-center  font-bold  text-[#425e6a] ">
                    {item.orderNumber}
                  </div>
                  <div className="lg:basis-[20%]  justify-center pr-2 w-full flex items-center">
                    {item.status === "Processing" && (
                      <div className="bg-pending  font-semibold px-[6px] sm:px-3 py-[3px] sm:text-[13px] text-[12px] rounded-sm text-white  shadow-md">
                        {item.status}
                      </div>
                    )}
                    {item.status === "Delivered" && (
                      <div className="bg-success  font-semibold px-[6px] sm:px-3 py-[3px] sm:text-[13px] text-[12px] rounded-sm text-white  shadow-md">
                        {item.status}
                      </div>
                    )}
                  </div>
                  <div
                    className={`
                     lg:basis-[15%] w-full  justify-center lg:flex hidden items-center`}
                  >
                    {item.totalQty}
                  </div>
                  <div className="lg:basis-[15%] w-full text-[#425e6a] flex-center">
                    {PriceFormatter(item.totalPrice)}
                  </div>
                  <div className="lg:basis-[25%] lg:flex hidden text-[13px]  items-center justify-center ">
                    {format(item.createdAt)}
                  </div>

                  <div className="lg:basis-[20%] w-full flex-center gap-3">
                    <div
                      // href={`/admin/order/${item._id}`}
                      className=" text-[14px] font-semibold hover:text-primaryBlack  text-cBase cursor-pointer flex-center gap-2 "
                    >
                      <span className="sm:block hidden"> See Details</span>
                      <BiArrowFromLeft size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="w-full h-full flex-center  text-cBase font-semibold ">
              No Orders Found!
            </div>
          )}
        </>
      )}
    </Table>
  );
};

export default AllOrders;
