"use client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  useLogOutMutation,
  useSocialAuthMutation,
} from "@/app/redux/features/auth/authApi";
import RegisterPopup from "../popup/RegisterPopup";
import LoginPopup from "../popup/LoginPopup";
import { useSession, signOut } from "next-auth/react";
import { showLogin, showSignup } from "@/app/redux/features/popup/popupSlice";
const User = () => {
  const user = useSelector((state) => state.auth.user);
  const popup = useSelector((state) => state.popup.route);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [Logout, { isSuccess, error }] = useLogOutMutation();
  const [route, setRoute] = useState(null);
  const { data } = useSession();
  const [socialAuth, { error: authError, isSuccess: authSuccess }] =
    useSocialAuthMutation();

  useEffect(() => {
    if (!user) {
      if (data) {
        socialAuth({ name: data?.user?.name, email: data?.user?.email });
      }
    }
    if (authError) {
      toast.error(authError?.data?.message);
    }
    if (authSuccess) {
      toast.success("login success");
    }
  }, [user, data]);

  const toggleUser = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (isSuccess) {
      const message = "Logged out";
      toast.success(message);
      redirect("/");
    }

    if (error) {
      const errorData = error;
      toast.error(errorData.data.message);
    }
  }, [error, isSuccess]);

  const getFirstName = (fullName) => {
    const parts = fullName.split(" ");
    return parts[0];
  };
  return (
    <>
      <div className="relative ">
        <div
          className=" text-white flex items-center  justify-center rounded-full relative cursor-pointer hover:shadow-md z-30"
          onClick={toggleUser}
        >
          {!user ? (
            <FaRegUser size={27} />
          ) : (
            <span className="p-1">
              <span className="capitalize">{getFirstName(user.name)}</span>
            </span>
          )}
          <AiFillCaretDown size={18} />
        </div>
        {open && (
          <div className="absolute text-black bg-white right-0 top-14 cursor-pointer w-[170px] rounded-md flex flex-col overflow-hidden z-30 font-[600]">
            {!user ? (
              <>
                <div
                  className="px-5 py-2 hover:bg-[#e2e8efe6]"
                  onClick={() => {
                    toggleUser();
                    dispatch(showLogin());
                  }}
                >
                  Login
                </div>
                <div
                  className="px-5 py-2 hover:bg-[#e2e8efe6]"
                  onClick={() => {
                    toggleUser();
                    dispatch(showSignup());
                  }}
                >
                  Register
                </div>
              </>
            ) : (
              <>
                {user.role === "admin" ? (
                  <Link
                    href={"/admin"}
                    className="px-5 py-2 hover:bg-[#e2e8efe6]"
                    onClick={toggleUser}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href={"/"}
                    className="px-5 py-2 hover:bg-[#e2e8efe6]"
                    onClick={toggleUser}
                  >
                    Your orders
                  </Link>
                )}

                <div
                  className="px-5 py-2  hover:bg-[#e2e8efe6]"
                  onClick={async () => {
                    toggleUser();
                    if (data) {
                      await signOut();
                      await Logout({});
                    }
                    Logout({});
                  }}
                >
                  logout
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {popup === 2 && <RegisterPopup />}
      {popup === 1 && <LoginPopup />}
    </>
  );
};

export default User;
