"use client";
import React, { useEffect, useState } from "react";
import CurrentPage from "../CurrentPage";
import { PriceFormatter } from "@/app/utils/formatPrice";
import { useDispatch, useSelector } from "react-redux";
import AddressDetails from "./AddressDetails";
import PaymentDetails from "./PaymentDetails";
import { redirect } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useCreateOrderMutation } from "@/app/redux/features/orders/orderApi";
import toast from "react-hot-toast";
import { clearAll } from "@/app/redux/features/cart/cartSlice";

const Checkout = () => {
  const { cartTotalPrice, cartItems, cartTotalQty } = useSelector(
    (state) => state.cart,
  );
  const user = useSelector((state) => state.auth.user);
  const [createOrder, { isSuccess, error, isLoading }] =
    useCreateOrderMutation();
  const [addressData, setAddressData] = useState(null);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [route, setRoute] = useState(0);
  const dispatch = useDispatch();
  const handlePlaceOrder = async () => {
    const data = {
      shippingAddress: addressData,
      cart: cartItems,
      paymentInfo: {
        status: "pending",
        type: "Cash On Delivery",
      },
      totalPrice: cartTotalPrice,
      totalQty: cartTotalQty,
      userId: user._id,
    };
    console.log(data);
    if (!isLoading) {
      await createOrder(data);
    }
  };

  useEffect(() => {
    if (error) {
      if ("data" in error) {
        console.log(error);
        toast.error(error.data.message);
      }
    }
    if (isSuccess) {
      toast.success("order recorded successfully");
      dispatch(clearAll());
      redirect("/order-complete");
    }
  }, [error, isSuccess]);

  return (
    <div className="mt-8 mb-16">
      <CurrentPage currentPage={"checkout"} />
      {cartItems?.length !== 0 ? (
        <div className="mt-4 flex sm:flex-row flex-col sm:px-12 px-8">
          {route === 0 && (
            <AddressDetails
              setAddressData={setAddressData}
              setRoute={setRoute}
            />
          )}
          {route === 1 && (
            <PaymentDetails setRoute={setRoute} setPlaceOrder={setPlaceOrder} />
          )}

          <div className="basis-[37%] sm:mx-auto mt-6 sm:mt-6">
            <div className="w-full ">
              <div className="px-9 py-6  border-slate-200 border-[2px]">
                <div className="font-semibold pb-4 text-[18px]">YOUR ORDER</div>
                <div className="text-[16px] pb-2 font-medium border-b-slate-[400] border-b-[1px]">
                  Product
                </div>
                {cartItems?.length !== 0 &&
                  cartItems.map((item, index) => (
                    <div key={index} className="flex-between py-3">
                      <div className="text-[14px] text-slate-800">
                        {item.name} x {item.productQty}
                      </div>
                      <div className="text-[13px] text-cBase">
                        {PriceFormatter(item.price * item.productQty)}
                      </div>
                    </div>
                  ))}
                <div className="mb-4 mt-6 flex-between">
                  <div className=" text-[14px] font-semibold">Subtotal</div>
                  <div className="text-cBase text-[13px]">
                    {" "}
                    {PriceFormatter(cartTotalPrice)}
                  </div>
                </div>
                <div className="py-6 border-t-slate-[400] border-b-slate-[400] border-b-[1px] border-t-[1px] flex-between">
                  <div className="font-[500] text-[18px]">Total</div>
                  <div className="font-semibold text-[18px]">
                    {PriceFormatter(cartTotalPrice)}
                  </div>
                </div>
                {route === 1 && (
                  <div
                    onClick={handlePlaceOrder}
                    className={`w-full ${
                      placeOrder === false
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer"
                    } bg-primaryBlack py-[14px] px-2 text-white flex-center gap-2 font-bold  hover:opacity-80 mt-2`}
                  >
                    <div className="text-[14px]">PLACE ORDER</div>
                  </div>
                )}
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
            className="w-full flex-center cursor-pointer text-white font-bold mt-4"
          >
            <div className="py-4 px-8 bg-primaryBlack">RETURN TO SHOP</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
