import Header from "@/app/components/LandingSection/Header";
import Checkout from "@/app/components/checkout/Checkout";
import Footer from "@/app/components/footer/Footer";
import UserProtected from "@/app/hooks/userProtected";
import Heading from "@/app/utils/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <UserProtected>
        <Heading title={"Checkout - Eshop"} />
        <Header isLanding={false} />
        <Checkout />
        <Footer />
      </UserProtected>
    </>
  );
};

export default page;
