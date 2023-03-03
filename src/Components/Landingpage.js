import Demand from "./Demand";
import Footer from "./Footer";
import Getstarted from "./Getstarted";
import Header from "./Header";
import Homepage from "./Homepage";
import "./Landingpage.css";
import Register from "./Register";
import Trusted from "./Trusted";
import WhyPartner from "./WhyPartner";

const Landingpage = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Register />
      <Demand />
      <WhyPartner />
      <Getstarted />
      <Trusted />
      <Footer />
    </>
  );
};

export default Landingpage;
