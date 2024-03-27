import Header from "@/app/components/LandingSection/Header";
import Cart from "@/app/components/cart/Cart";
import Footer from "@/app/components/footer/Footer";
import Heading from "@/app/utils/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <Heading
        title={"Cart - Eshop"}
        keyword={
          "a beautiful great nextjs14 eshop website to buy clothes shorts and unique sports eshop clothes"
        }
      />
      <Header isLanding={false} />
      <Cart />
      <Footer />
    </>
  );
};

export default page;
