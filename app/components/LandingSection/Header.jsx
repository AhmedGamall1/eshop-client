import { Redressed } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import User from "./User";
import Link from "next/link";
import CartHeader from "./CartHeader";
import WishlistHeader from "./WishlistHeader";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});
const Header = ({ isLanding }) => {
  return (
    <div
      className={`${
        !isLanding && "bg-primaryBlack !py-4"
      }  sm:px-12 px-4 w-full m-auto py-3 sm:py-5 flex items-center justify-between text-white
  `}
    >
      <div className="sm:flex items-center justify-center  gap-8 ">
        <Link href={"/"}>
          <h1
            className={`md:text-[44px] text-[32px] ${redressed.className}  font-bold text-center text-white`}
          >
            E-Shop
          </h1>
        </Link>
        <div className="text-[14px] hidden mt-4 font-bold sm:flex items-start justify-center gap-6 cursor-pointer">
          <Link href={"/"}>Home</Link>
          <div className="flex-center">
            <span>Categories</span>
            <IoIosArrowDown size={14} className="mt-1 ml-1" />
          </div>
        </div>
      </div>
      <input
        className="w-[40%] lg:block shadow-lg border-[1px] border-black mr-20  hidden relative outline-none px-4 text-black py-5 rounded-full bg-[#f5f5f5] h-[40px]"
        type="text"
        placeholder="search..."
      />
      {/* large screens */}
      <div className="hidden sm:flex items-center justify-center gap-5">
        <WishlistHeader />
        <CartHeader />

        <User />
      </div>
      {/* small screens */}
      <div className="flex-center sm:hidden gap-5 grow">
        <WishlistHeader />
        <CartHeader />
      </div>
      <div className="basis-[20%] sm:hidden">
        <User />
      </div>
    </div>
  );
};

export default Header;
