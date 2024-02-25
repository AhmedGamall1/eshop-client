import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";

const AddressDetails = ({ setRoute, setAddressData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setAddressData(data);
    setRoute(1);
  };

  return (
    <div className="basis-[60%]">
      <div className="font-bold text-[26px] mb-2">Billing details</div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex items-center gap-5">
          <div className="basis-[50%]">
            <label
              className={`${
                errors.firstName ? "text-rose-400" : "text-cBase"
              }  block font-medium`}
            >
              First name
            </label>
            <input
              type="name"
              className={` p-2 w-full outline-none  ${
                errors.firstName &&
                "border-rose-400 border focus:border-rose-400"
              }`}
              {...register("firstName", {
                required: "First name is required",
              })}
            />
          </div>
          <div className="basis-[50%]">
            <label
              className={`${
                errors.lastName ? "text-rose-400" : "text-cBase"
              }  block font-medium`}
            >
              Last name
            </label>
            <input
              type="name"
              className={` p-2 w-full outline-none  ${
                errors.lastName &&
                "border-rose-400 border focus:border-rose-400"
              }`}
              {...register("lastName", {
                required: "Last name is required",
              })}
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <label
            className={`${
              errors.city ? "text-rose-400" : "text-cBase"
            }  block font-medium`}
          >
            City
          </label>
          <input
            type="name"
            className={` p-2 w-full outline-none  ${
              errors.city && "border-rose-400 border focus:border-rose-400"
            }`}
            {...register("city", {
              required: "City is required",
            })}
          />
          {/* <div className="mt-1 text-rose-400">{errors.city}</div> */}
        </div>
        <div className="w-full mt-4">
          <label
            className={`${
              errors.streetAddress ? "text-rose-400" : "text-cBase"
            }  block font-medium`}
          >
            Street address
          </label>
          <input
            type="name"
            className=" p-2 w-full outline-none"
            {...register("streetAddress", {
              required: "Street address is required",
            })}
          />
          <div className="mt-1 text-rose-400">{errors.streetAddress}</div>
        </div>

        <div className="w-full mt-4">
          <label
            className={`${
              errors.postcode ? "text-rose-400" : "text-cBase"
            }  block font-medium`}
          >
            Postcode / Zip
          </label>
          <input
            type="name"
            className={` p-2 w-full outline-none  ${
              errors.postcode && "border-rose-400 border focus:border-rose-400"
            }`}
            {...register("postcode", {
              required: "Postcode is required",
            })}
          />
          {/* <div className="mt-1 text-rose-400">{errors.postcode}</div> */}
        </div>
        <div className="w-full mt-4">
          <label
            className={`${
              errors.phone ? "text-rose-400" : "text-cBase"
            }  block font-medium`}
          >
            Phone
          </label>
          <input
            type="phone"
            className={` p-2 w-full outline-none  ${
              errors.phone && "border-rose-400 border focus:border-rose-400"
            }`}
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          {/* <div className="mt-1 text-rose-400">{errors.phone}</div> */}
        </div>
        <div className="w-full mt-4">
          <label
            className={`${
              errors.email ? "text-rose-400" : "text-cBase"
            }  block font-medium`}
          >
            Email
          </label>
          <input
            type="email"
            className={` p-2 w-full outline-none  ${
              errors.email && "border-rose-400 border focus:border-rose-400"
            }`}
            {...register("email", {
              required: "Email is required",
            })}
          />
          {/* <div className="mt-1 text-rose-400">{errors.email}</div> */}
        </div>
        <div className="w-full flex justify-end items-center  mt-8  text-white   font-bold ">
          <button
            disabled={true}
            className="text-[15px] cursor-pointer hover:opacity-80 bg-primaryBlack flex-center gap-2 px-6 py-[10px]"
          >
            CHOOSE PAYMENT METHOD
            <FaArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
