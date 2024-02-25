"use client";
import Image from "next/image";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const CreateProductContent = ({
  onSubmit,
  setPage,
  productContent,
  setProductContent,
}) => {
  const jsonArray = [{ key: 2 }];
  console.log(productContent);
  // Accessing the first object in the array
  const firstObject = jsonArray[0];

  // Accessing the key and value
  const key = Object.keys(firstObject)[0];
  const value = firstObject[key];

  // Showing the output
  console.log("Key:", key);
  console.log("Value:", value);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProductContent({ ...productContent, image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductContent({ ...productContent, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAddInfo = () => {
    // additionalInfo: [{ key: "", value: "" }],
    const newInfo = [...productContent.additionalInfo, { key: "", value: "" }];
    setProductContent({ ...productContent, additionalInfo: newInfo });
  };
  const handleRemoveInfo = (index) => {
    const newInfo = productContent.additionalInfo.filter(
      (ele, i) => i !== index,
    );

    setProductContent({ ...productContent, additionalInfo: newInfo });
  };

  return (
    <div className="h-full py-4">
      <div className="md:w-[75%] w-[85%] relative m-auto h-[90%] max-h-[500px]  overflow-y-auto  bg-white rounded-md shadow-xl px-4 py-3">
        <div className="px-2 mt-3">
          <div
            className="w-full 
          "
          >
            <p className="text-[#A0A5BA] mt-2">Product Image</p>
            <input
              name="image"
              required
              type="file"
              accept="image/*"
              id="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className={`w-full cursor-pointer min-h-[10vh] border-[#A0A5BA]  border-[1px] p-3 rounded-md flex items-center justify-center ${
                dragging ? "bg-blue-500" : "bg-transparent"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {productContent.image ? (
                <Image
                  src={productContent.image}
                  alt=""
                  // className="max-h-full w-full object-cover"

                  width={150}
                  height={150}
                  objectFit="cover"
                />
              ) : (
                <div className="text-[#A0A5BA] w-full flex flex-col items-center justify-center">
                  <div className="sm:text-[14px] text-xs">
                    {" "}
                    Drag and drop your Image here or click to browse
                  </div>
                  <div className="font-bold mt-1">
                    <CiCirclePlus size={35} />
                  </div>
                </div>
              )}
            </label>
          </div>
          <div className="w-full ">
            <p className="text-[#A0A5BA] mt-3">
              Additional Info <span className="text-sm">[optional]</span>
            </p>
            <div className=" w-full ">
              {productContent?.additionalInfo?.map((element, index) => (
                <div
                  className="flex items-center justify-between mt-2"
                  key={index}
                >
                  <input
                    type="text"
                    className="p-2 border rounded-md outline-none border-[#A0A5BA] w-[45%]"
                    placeholder="property"
                    value={element.key}
                    onChange={(e) => handleAddKey(e, element)}
                  />
                  <input
                    type="text"
                    className="w-[45%] p-2 outline-none border rounded-md border-[#A0A5BA]"
                    placeholder="value"
                  />
                  <div
                    className={`  ${
                      index === 0
                        ? "cursor-not-allowed text-[#A0A5BA]"
                        : "cursor-pointer text-[#A0A5BA] hover:text-red-500"
                    }`}
                    onClick={() => {
                      if (index !== 0) {
                        handleRemoveInfo(index);
                      }
                    }}
                  >
                    <FaRegTrashAlt size={20} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[#A0A5BA] mt-1">
              <CiCirclePlus size={30} onClick={handleAddInfo} />
            </div>
          </div>
          <div className="w-full flex-between mt-4  ">
            <button
              type="submit"
              className="bg-black w-[30%] hover:opacity-70 py-2 text-white rounded-md"
              onClick={() => setPage(1)}
            >
              Back
            </button>
            <button
              type="button"
              className="bg-primary w-[30%] hover:opacity-70 py-2 flex-center gap-1 text-white rounded-md"
              // onClick={() => onSubmit()}
            >
              Add <span className="sm:block hidden">Product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductContent;
