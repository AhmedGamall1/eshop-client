"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
const PaymentDetails = ({ setRoute, setPlaceOrder }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  useEffect(() => {
    if (paymentStatus === "cash on delivery") {
      setPlaceOrder(true);
    }
  }, [paymentStatus]);
  return (
    <div className="basis-[60%]">
      <div className="font-bold text-[26px] mb-2">Payment methods</div>
      <div
        className={`shadow-md border-slate-300  w-[80%] p-6 mt-10 border-[2px] cursor-pointer hover:bg-slate-200 ${
          paymentStatus === "cash on delivery" && "bg-slate-200"
        }`}
        onClick={() => setPaymentStatus("cash on delivery")}
      >
        <div className="text-black font-semibold">Cash on delivery</div>
        <div className="text-cBase font-medium mt-2">
          Pay with cash upon delivery.
        </div>
      </div>
      <div
        className={`shadow-md border-slate-300  w-[80%] p-6 mt-4 border-[2px] cursor-pointer hover:bg-slate-200 ${
          paymentStatus === "Pay by credit" && "bg-slate-200"
        }`}
        onClick={() => setPaymentStatus("Pay by credit")}
      >
        <div className="text-black font-semibold">Pay by credit</div>
        <div className="text-cBase font-medium mt-2">
          Pay with paypal account or visa.
        </div>
      </div>
      <div className="w-full flex justify-start items-center  mt-8  text-white   font-bold ">
        <button
          onClick={() => setRoute(0)}
          className="text-[15px] cursor-pointer hover:opacity-80 bg-primaryBlack flex-center gap-2 px-6 py-[10px]"
        >
          <FaArrowLeft size={16} />
          BACK TO ADDRESS DETAILS
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
