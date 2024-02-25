import ProductPage from "@/app/components/ProductPage/ProductPage";
import Footer from "@/app/components/footer/Footer";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <ProductPage productId={params.id} />
      <Footer />
    </>
  );
};

export default page;
