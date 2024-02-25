import { FaPlus, FaUsers, FaUserShield } from "react-icons/fa";
import { AiFillPieChart, AiFillShopping } from "react-icons/ai";
import { BsInboxesFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const DashboardSideBar = ({ route, setRoute }) => {
  return (
    <div className="bg-white h-full flex  flex-col  py-3 items-center px-1 ">
      <div
        className="bg-primary shadow-md mt-4 text-sm lg:text-[15px] text-white cursor-pointer font-semibold  items-center gap-2 px-4 py-2 sm:flex hidden rounded-md"
        onClick={() => setRoute(2)}
      >
        <span className="">Create product</span>
        <div className="">
          <FaPlus size={16} fill="white" />
        </div>
      </div>
      <div
        className="sm:hidden cursor-pointer mt-4 block flex-center mx-auto rounded-full text-white bg-primary p-[6px]"
        onClick={() => setRoute(2)}
        title="create-product"
      >
        <FaPlus size={18} fill="white" />
      </div>
      <div
        className="mt-6 cursor-pointer w-full flex items-center text-[#A0A5BA] hover:text-primary "
        onClick={() => setRoute(1)}
        title="Overview"
      >
        <div className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center">
          <AiFillPieChart
            size={27}
            className={`${route === 1 && "text-primary"} sm:mr-2`}
          />
        </div>
        <div
          className={` ${
            route === 1 && "text-primary"
          } font-[500] w-[45%]  sm:flex hidden justify-start items-center`}
        >
          <span> Overview</span>
        </div>
      </div>
      <div
        className="mt-4 cursor-pointer w-full flex items-center text-[#A0A5BA] hover:text-primary "
        onClick={() => setRoute(3)}
        title="Products"
      >
        <div className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center">
          <BsInboxesFill
            size={21}
            className={`${route === 3 && "text-primary"} sm:mr-[10px]`}
          />
        </div>
        <div
          className={` ${
            route === 3 && "text-primary"
          }  font-[500] w-[45%] sm:flex hidden justify-start items-center`}
        >
          <span> Products</span>
        </div>
      </div>
      <div
        className="mt-4  cursor-pointer w-full flex text-[#A0A5BA] hover:text-primary items-center  "
        onClick={() => setRoute(4)}
        title="Categories"
      >
        <div className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center">
          <BiSolidCategory
            size={25}
            className={`${route === 4 && "text-primary"}  sm:mr-2`}
          />
        </div>
        <div
          className={` ${
            route === 4 && "text-primary"
          }  font-[500] w-[45%]  sm:flex hidden justify-start items-center`}
        >
          <span> Categories</span>
        </div>
      </div>
      <div
        className="mt-4  cursor-pointer w-full text-[#A0A5BA] hover:text-primary flex items-center  "
        onClick={() => setRoute(5)}
        title="Orders"
      >
        <div className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center">
          <AiFillShopping
            size={25}
            className={`${route === 5 && "text-primary"}  sm:mr-2`}
          />
        </div>
        <div
          className={` ${
            route === 5 && "text-primary"
          }  font-[500] w-[45%]  sm:flex hidden justify-start items-center`}
        >
          <span> Orders</span>
        </div>
      </div>
      <div
        className="mt-4  cursor-pointer w-full flex items-center text-[#A0A5BA] hover:text-primary "
        onClick={() => setRoute(6)}
        title="Users"
      >
        <div className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center">
          <FaUsers
            size={25}
            className={`${route === 6 && "text-primary"}  sm:mr-2`}
          />
        </div>
        <div
          className={` ${
            route === 6 && "text-primary"
          }  font-[500] w-[45%]  sm:flex  hidden justify-start items-center`}
        >
          <span> Users</span>
        </div>
      </div>
      <div
        className="mt-4  cursor-pointer w-full hover:text-primary text-[#A0A5BA]  flex items-center"
        onClick={() => setRoute(7)}
        title="Admins"
      >
        <div className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center">
          <FaUserShield
            size={25}
            className={`${route === 7 && "text-primary"} sm:mr-2`}
          />
        </div>
        <div
          className={` ${
            route === 7 && "text-primary"
          }  font-[500] w-[45%]  sm:flex hidden justify-start items-center`}
        >
          <span> Admins</span>
        </div>
      </div>
      <div className="mt-4 hover:text-primary text-[#A0A5BA] cursor-pointer w-full flex items-center  ">
        <div
          className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center  "
          title="back to site"
        >
          <IoMdArrowBack
            size={25}
            className={`
              sm:mr-2`}
          />
        </div>
        <div
          className={` 
            
           font-[500] w-[45%]  sm:flex hidden justify-start items-center`}
        >
          <span>To Site</span>
        </div>
      </div>
      <div
        className="mt-4 hover:text-primary text-[#A0A5BA] cursor-pointer w-full flex items-center  "
        title="logout"
      >
        <div className="sm:w-[40%] w-full sm:flex sm:justify-end flex-center  ">
          <IoLogOut
            size={25}
            className={`
              sm:mr-2`}
          />
        </div>
        <div
          className={` 
            
           font-[500] w-[45%]  sm:flex hidden justify-start items-center`}
        >
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
