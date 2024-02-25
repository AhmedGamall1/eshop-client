import Header from "@/app/components/LandingSection/Header";
import Footer from "@/app/components/footer/Footer";
import WishList from "@/app/components/wishlist/WishList";
import Heading from "@/app/utils/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <Heading title={"Wishlist - Eshop"} />
      <Header isLanding={false} />
      <WishList />
      <Footer />
    </>
  );
};

export default page;
