import { Redressed } from "next/font/google";
import { AiFillBell } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import DashboardUser from "./DashboardUser";

const redressed = Redressed({
  weight: ["400"],
  subsets: ["latin"],
});

const DashboardHeader = () => {
  return (
    <div className="w-full flex lg:px-12 px-5  py-2  items-center justify-between bg-white ">
      <Link
        href={"/"}
        className={`${redressed.className} text-black text-[32px] basis-1/5`}
      >
        E~Shop
      </Link>
      <div className="basis-3/5 flex-center">
        <div className="w-[80%] relative md:block hidden">
          <input
            autoComplete="none"
            type="search"
            className="w-full outline-none py-2 px-1"
            id="search"
          />
          <label
            htmlFor="search"
            className="absolute flex items-center gap-3 -translate-y-1/2 text-[#A0A5BA] top-[50%] left-0"
          >
            <IoSearchOutline size={20} />
            <span> Search...</span>
          </label>
        </div>
      </div>
      <div className="basis-[100%] md:basis-1/5 flex items-center justify-end ">
        <AiFillBell size={20} fill="#A0A5BA" />
        <DashboardUser />
      </div>
    </div>
  );
};

export default DashboardHeader;
