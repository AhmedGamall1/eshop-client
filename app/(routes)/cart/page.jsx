import Header from "@/app/components/LandingSection/Header";
import Cart from "@/app/components/cart/Cart";
import Footer from "@/app/components/footer/Footer";
import Heading from "@/app/utils/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <Heading title={"Cart - Eshop"} keyword={"hcartt umii onceshop"} />
      <Header isLanding={false} />
      <Cart />
      <Footer />
    </>
  );
};

export default page;
