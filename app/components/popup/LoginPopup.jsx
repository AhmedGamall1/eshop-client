"use client";
import { useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { inputStyle, labelStyle } from "@/app/utils/Styles";
import { useDispatch } from "react-redux";
import { closePopup, showSignup } from "@/app/redux/features/popup/popupSlice";
const LoginPopup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [Login, { error, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Logged In Successfully";
      toast.success(message);
      dispatch(closePopup());
      reset();
    }

    if (error) {
      const errorData = error;
      toast.error(errorData.data.message);
    }
  }, [error, isSuccess]);

  const onSubmit = ({ email, password }) => {
    const userData = {
      email,
      password,
    };
    Login(userData);
  };

  return (
    <>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:w-[450px] md:w-[450px] sm:w-[400px] bg-white sm:p-6 rounded-[8px] shadow md:p-6 px-2 py-3 w-[80%] lg:p-4 z-[30] outline-none">
        <div className="relative w-full">
          <div
            className="absolute top-0 right-0 
        text-[#353A40] cursor-pointer"
            onClick={() => dispatch(closePopup())}
          >
            <IoMdClose size={25} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-black px-3 ">
          <h2 className="font-[700] text-[16px] sm:text-[20px] mb-2 sm:mb-5">
            Login in for E~shop
          </h2>
          <button
            className="w-full rounded-md border-[#353A40] text-[#353A40]
         border-[2px] text-sm font-[500]  p-2 flex items-center justify-center  gap-2"
            // onClick={() => signIn("google")}
          >
            <AiOutlineGoogle size={20} />
            <span>Sign in with Google</span>
          </button>
          <div className="w-full sm:mt-3 mt-1 h-[1px] bg-slate-300" />
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            {/* email */}
            <div className="w-full mb-1">
              <label
                htmlFor="email"
                className={` ${
                  errors.email ? "text-rose-400 " : "text-[#787878]"
                } ${labelStyle}`}
              >
                Email
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`${inputStyle}  ${
                  errors.email
                    ? "border-rose-400 focus:border-rose-400"
                    : "border-slate-200 focus:border-slate-400"
                }`}
                type="text"
                placeholder=""
              />
            </div>
            {/* password */}
            <div className="w-full mb-4">
              <label
                htmlFor="password"
                className={`${
                  errors.password ? "text-rose-400 " : "text-[#787878]"
                } ${labelStyle}`}
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className={`${inputStyle} ${
                  errors.password
                    ? "border-rose-400 focus:border-rose-400"
                    : "border-slate-200 focus:border-slate-400"
                }`}
                type="password"
                placeholder=""
              />
            </div>
            <button
              className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-black flex items-center justify-center gap-2 
               bg-black text-white           
       text-md font-semibold py-2 px-3 my-2 border-2
    `}
              disabled={isSubmitting}
            >
              Sign in
            </button>
            <p className="text-sm  flex justify-center">
              Do not have account?{" "}
              <div
                className="underline ml-1 cursor-pointer"
                onClick={() => dispatch(showSignup())}
              >
                Sign up
              </div>
            </p>
          </form>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-20 bg-black  opacity-70 w-full h-full"></div>
    </>
  );
};

export default LoginPopup;
