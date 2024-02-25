import Header from "@/app/components/LandingSection/Header";
import Checkout from "@/app/components/checkout/Checkout";
import OrderComplete from "@/app/components/checkout/OrderComplete";
import Footer from "@/app/components/footer/Footer";
// import UserProtected from "../../hooks/UserProtected";
import Heading from "@/app/utils/Heading";
import React from "react";

const page = () => {
  return (
    <>
      {/* <UserProtected> */}
      <Heading title={"Checkout - Eshop"} />
      <Header isLanding={false} />
      <OrderComplete />
      <Footer />
      {/* </UserProtected> */}
    </>
  );
};

export default page;
