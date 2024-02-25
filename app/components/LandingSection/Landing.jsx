import Header from "./Header";
import LandingContent from "./LandingContent";

const Landing = () => {
  return (
    <div className="w-full h-[100vh] background ">
      <Header isLanding={true} />
      <LandingContent />
    </div>
  );
};

export default Landing;
