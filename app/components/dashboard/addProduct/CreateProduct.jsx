"use client";
import Heading from "@/app/utils/Heading";

import { useEffect, useState } from "react";
import CreateProductContent from "./CreateProductContent";
import CreateProductInfo from "./CreateProductInfo";
import { useAddProductMutation } from "@/app/redux/features/products/productApi";
import toast from "react-hot-toast";

const CreateProduct = ({ setRoute }) => {
  const [addProduct, { isSuccess, error, isLoading }] = useAddProductMutation();
  const [page, setPage] = useState(1);
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    discountPrice: "",
    tags: "",
  });
  const [productContent, setProductContent] = useState({
    image: "",
    additionalInfo: [{ key: "", value: "" }],
  });

  const onSubmit = async () => {
    const data = { ...productInfo, ...productContent };
    console.log(data);
    if (!isLoading) {
      await addProduct({ data });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("product created successfully");
      setRoute(3);
    }
    if (error) {
      if ("data" in error) {
        toast.error(error.data.message);
      }
    }
  }, [isSuccess, error]);
  return (
    <>
      <Heading title={"Add Product"} />

      {page === 1 && (
        <CreateProductInfo
          setPage={setPage}
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
      )}
      {page === 2 && (
        <CreateProductContent
          setPage={setPage}
          productContent={productContent}
          setProductContent={setProductContent}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default CreateProduct;
