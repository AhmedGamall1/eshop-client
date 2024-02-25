import { IoShirtSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import Recharts from "./Recharts";

const OverView = () => {
  return (
    <div className="w-[92%] mx-auto h-full mt-8  ">
      <div className="w-full  xl:grid-cols-4 lg:grid-cols-3  grid  md:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white  relative shadow-md py-6 px-8 flex-center gap-3 rounded-lg">
          <div className="flex-center gap-[1px] absolute top-4 right-6 text-cBase cursor-pointer">
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
          </div>
          <div className="bg-[#F2EBFD] text-[#7125DE] flex-center rounded-full p-[14px]">
            <IoShirtSharp size={22} />
          </div>
          <div className="">
            <div className="font-bold text-primaryBlack text-[15px]">155</div>
            <div className="font-semibold text-cBase text-[14px] whitespace-nowrap">
              Total Products
            </div>
          </div>
        </div>
        <div className="bg-white relative shadow-md py-6 px-8 flex-center gap-3 rounded-lg">
          <div className="flex-center gap-[1px] absolute top-4 right-6 text-cBase cursor-pointer">
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
          </div>
          <div className="bg-[#F0FBFF] text-[#32B0FF] flex-center rounded-full p-[14px]">
            <FaUsers size={23} />
          </div>
          <div className="">
            <div className="font-bold text-primaryBlack text-[15px]">120</div>
            <div className="font-semibold text-cBase text-[14px]  whitespace-nowrap">
              Available Users
            </div>
          </div>
        </div>
        <div className="bg-white relative shadow-md py-6 px-8 flex-center gap-3 rounded-lg">
          <div className="flex-center gap-[1px] absolute top-4 right-6 text-cBase cursor-pointer">
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
          </div>
          <div className="bg-[#FFF3EE] text-[#FF884B] flex-center rounded-full p-[14px]">
            <FaMoneyBillTrendUp size={22} className="font-bold" />
          </div>
          <div className="">
            <div className="font-bold text-primaryBlack text-[15px]">
              $6,857
            </div>
            <div className="font-semibold text-cBase text-[14px] whitespace-nowrap">
              Avg Earnings
            </div>
          </div>
        </div>
        <div className="bg-white  relative shadow-md py-6 px-8 flex-center gap-3 rounded-lg">
          <div className="flex-center gap-[1px] absolute top-4 right-6 text-cBase cursor-pointer">
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
            <div className="bg-cBase p-[2px] rounded-full"></div>
          </div>
          <div className="bg-[#FFEEF2] text-[#FF437A] flex-center rounded-full p-[14px]">
            <TbTruckDelivery size={24} />
          </div>
          <div className="">
            <div className="font-bold text-primaryBlack text-[15px]">38</div>
            <div className="font-semibold text-cBase text-[14px] whitespace-nowrap">
              Available Cars
            </div>
          </div>
        </div>
      </div>
      <Recharts />
    </div>
  );
};

export default OverView;
