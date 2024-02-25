"use client";
import {
  useGetSingleOrderQuery,
  useUpdateOrderStatusMutation,
} from "@/app/redux/features/orders/orderApi";
import { useEffect, useState } from "react";
import Heading from "@/app/utils/Heading";
import { FaShoppingBag } from "react-icons/fa";
import { formatDate } from "@/app/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { PriceFormatter } from "@/app/utils/formatPrice";
import toast from "react-hot-toast";
const AdminOrder = ({ orderId }) => {
  const [orderData, setOrderData] = useState(null);
  const { data, refetch } = useGetSingleOrderQuery(orderId, {
    refetchOnMountOrArgChange: true,
  });
  const [updateStatus, { isSuccess, error }] = useUpdateOrderStatusMutation();
  useEffect(() => {
    if (data) {
      setOrderData(data.order);
    }
    if (isSuccess) {
      toast.success("Status updated successfully");
      refetch();
    }
    if (error) {
      toast.error("something went wrong");
    }
  }, [data, isSuccess, error]);

  const handleChangeStatus = async (status) => {
    await updateStatus({ id: orderId, status });
  };

  const status = data?.order.status || "Processing";
  return (
    <>
      <Heading
        title={`Order Number ${orderData?.orderNumber}`}
        description={"admin page"}
        keywords={"admin ecommerce"}
      />
      <div className="bg-[#F5F5F5] w-full h-full pb-3">
        <div className="w-[85%] m-auto">
          <div className="flex-between pt-8">
            <div className="flex-center text-primaryBlack gap-2">
              <FaShoppingBag size={25} />
              <h2 className=" font-semibold text-[24px]">Order Details</h2>
            </div>
            <Link
              href={"/admin"}
              className="bg-primary text-white  rounded-md px-4 py-2 text-[18px]"
            >
              Order List
            </Link>
          </div>
          <div className="flex-between mt-4">
            <div className="text-base ">
              Order Number: {orderData?.orderNumber}
            </div>
            <div className="text-base ">
              Placed On: {formatDate(orderData?.createdAt)}
            </div>
          </div>
          <div className="mt-5 w-full bg-base h-[1px]" />

          {orderData?.cart.map((product, index) => (
            <div
              className="flex w-full items-center justify-start gap-3 border-b-[1px]  border-base py-4"
              key={index}
            >
              <Image src={product.image.url} alt="png" width={80} height={80} />
              <div>
                <p className="text-black text-[18px] ">{product.name}</p>
                <p className="text-base  text-[16px]">
                  Price: {PriceFormatter(product.price)} x{product.productQty}
                </p>
              </div>
            </div>
          ))}
          <div className="w-full mt-4 flex justify-end font-semibold text-primaryBlack ">
            Total:{" "}
            <span className="ml-1">
              {PriceFormatter(orderData?.totalPrice)}
            </span>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <div className="grow">
              <div className="text-black font-semibold text-[18px]">
                Shipping Address
              </div>
              <div className="text-[16px] text-slate-600 mt-2">
                <div className="mb-1">
                  Phone Number: {orderData?.shippingAddress.phone}
                </div>
                <div className="mb-1">
                  City: {orderData?.shippingAddress.city}
                </div>
                <div className="mb-1">
                  Street Address: {orderData?.shippingAddress.streetAddress}
                </div>
                <div className="mb-1">
                  Postcode: {orderData?.shippingAddress.postcode}
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="text-black font-semibold text-[18px]">
                Payment Info
              </div>
              <div className="text-slate-600 mt-2 mb-1 flex items-center gap-3">
                Status:{" "}
                {orderData?.paymentInfo.status === "Pending" && (
                  <span className="bg-pending shadow-sm px-2 py-[2px] text-white rounded-sm">
                    {orderData?.paymentInfo.status}
                  </span>
                )}
                {orderData?.paymentInfo.status === "Succeeded" && (
                  <span className="bg-success shadow-sm px-2 py-[2px] text-white rounded-sm">
                    {orderData?.paymentInfo.status}
                  </span>
                )}
              </div>
              <div className="text-slate-600">
                method: {orderData?.paymentInfo.type}
              </div>
            </div>
            <div className="grow">
              <div className="text-black font-semibold text-[18px]">
                Order Status
              </div>
              <div
                className="flex mt-2 items-center cursor-pointer gap-2"
                onClick={() => {
                  if (status !== "Processing") {
                    handleChangeStatus("Processing");
                  }
                }}
              >
                <div
                  className={`rounded-full  w-4 h-4 p-[4px] ${
                    status === "Processing" ? "bg-primaryBlack" : ""
                  } border-[2px] border-slate-300`}
                />
                <div>Processing</div>
              </div>
              <div
                className="flex mt-2 items-center cursor-pointer gap-2"
                onClick={() => {
                  if (status !== "Delivered") {
                    handleChangeStatus("Delivered");
                  }
                }}
              >
                <div
                  className={`rounded-full  w-4 h-4 p-[4px] ${
                    status === "Delivered" ? "bg-primaryBlack" : ""
                  } border-[2px] border-slate-300`}
                />
                <div>Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrder;
