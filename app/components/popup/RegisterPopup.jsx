"use client";
import { useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { inputStyle, labelStyle } from "@/app/utils/Styles";
import { useDispatch } from "react-redux";
import { closePopup, showLogin } from "@/app/redux/features/popup/popupSlice";

const RegisterPopup = ({ setRoute }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const [Register, { error, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Account created successfully";
      toast.success(message);
      dispatch(closePopup());

      reset();
    }

    if (error) {
      const errorData = error;
      toast.error(errorData.data.message);
    }
  }, [error, isSuccess]);

  const onSubmit = ({ name, email, password }) => {
    const userData = {
      name,
      email,
      password,
    };
    Register(userData);
  };

  return (
    <>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:w-[450px] md:w-[450px] sm:w-[400px] bg-white rounded-[8px] py-3 px-1 shadow md:p-6 lg:p-4 w-[80%] z-[30] outline-none">
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
            Sign up for E~shop
          </h2>

          <button
            className="w-full rounded-md border-[#353A40] text-[#353A40]
         border-[2px] text-sm font-[500]  p-2 flex items-center justify-center  gap-2"
            // onClick={() => signIn("google")}
          >
            <AiOutlineGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
          {/* my-1 */}
          <div className="w-full sm:mt-3 mt-1 h-[1px] bg-slate-300" />
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            {/* username */}
            <div className="w-full mb-1">
              <label
                htmlFor="name"
                className={` ${
                  errors.name ? "text-rose-400 " : "text-[#787878]"
                } ${labelStyle}`}
              >
                Username
              </label>
              <input
                id="name"
                {...register("name", { required: "Username is required" })}
                className={`${inputStyle} ${
                  errors.name
                    ? "border-rose-400 focus:border-rose-400"
                    : "border-slate-200 focus:border-slate-400"
                }`}
                type="name"
                placeholder=""
              />
            </div>
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
                className={`${inputStyle} ${
                  errors.email
                    ? "border-rose-400 focus:border-rose-400"
                    : "border-slate-200 focus:border-slate-400"
                }`}
                type="text"
                placeholder=""
              />
            </div>
            {/* password */}
            <div className="w-full mb-1">
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
            {/* confirm password */}
            <div className="w-full mb-4">
              <label
                htmlFor="confirmPass"
                className={` ${
                  errors.confirmPass ? "text-rose-400 " : "text-[#787878]"
                } ${labelStyle}`}
              >
                Confirm password
              </label>
              <input
                id="confirmPass"
                {...register("confirmPass", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords must match",
                })}
                className={`${inputStyle} ${
                  errors.confirmPass
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
              Sign Up
            </button>
            <p className="text-sm  flex justify-center">
              Already have an account?{" "}
              <div
                className="underline ml-1 cursor-pointer"
                onClick={() => dispatch(showLogin())}
              >
                Log in
              </div>
            </p>
          </form>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-20 bg-black  opacity-70 w-full h-full"></div>
    </>
  );
};

export default RegisterPopup;
