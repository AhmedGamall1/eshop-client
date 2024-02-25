import Landing from "../components/LandingSection/Landing";
import ProductsSection from "../components/ProductSection/ProductsSection";
import Banner1 from "../components/banner/Banner1";
import Banner2 from "../components/banner/Banner2";
import Footer from "../components/footer/Footer";
import Heading from "../utils/Heading";

const page = () => {
  return (
    <>
      <Heading
        title="Home - Ecommerce"
        keywords="t-shirts ecommerce bags clothes caps ..."
        description="shop"
      />
      <Landing />
      <ProductsSection />
      <Banner1 />
      <Banner2 />
      <Footer />
    </>
  );
};

export default page;
