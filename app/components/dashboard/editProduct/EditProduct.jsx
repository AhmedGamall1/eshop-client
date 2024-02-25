"use client";
import Heading from "@/app/utils/Heading";

import { useEffect, useState } from "react";

import {
  useEditProductMutation,
  useGetSingleProductQuery,
} from "@/app/redux/features/products/productApi";
import toast from "react-hot-toast";
import EditProductInfo from "./EditProductInfo";
import EditProductContent from "./EditProductContent";
import { redirect } from "next/navigation";

const EditProduct = ({ productId }) => {
  const [editProduct, { isSuccess, error, isLoading }] =
    useEditProductMutation();
  const { data } = useGetSingleProductQuery(productId);
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
    if (!isLoading) {
      await editProduct({ id: productId, data });
    }
  };

  useEffect(() => {
    if (data) {
      setProductInfo({
        name: data.product.name,
        description: data.product.description,
        category: data.product.category,
        price: data.product.price,
        discountPrice: data.product.discountPrice,
        tags: data.product.tags,
      });
      setProductContent({
        image: data.product.image.url,
        additionalInfo: data.product.additionalInfo,
      });
    }
    if (isSuccess) {
      toast.success("product updated successfully");
      redirect("/admin");
    }
    if (error) {
      if ("data" in error) {
        toast.error(error.data.message);
      }
    }
  }, [data, isSuccess, error]);
  return (
    <>
      <Heading title={`Edit ${productInfo?.name}`} />

      {page === 1 && (
        <EditProductInfo
          setPage={setPage}
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
      )}
      {page === 2 && (
        <EditProductContent
          setPage={setPage}
          productContent={productContent}
          setProductContent={setProductContent}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default EditProduct;
