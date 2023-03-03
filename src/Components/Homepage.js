import "./Homepage.css";
import mobile from "../images/mobile.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="main-heading">
        Become a <span> Franchise Owner</span>
      </h1>
      <div className="sub-heading">
        Partner with Helyi! and Start Promoting multiple businesses in you city
      </div>
      <div className="mobile">
        <img alt="mobile" src={mobile} />
      </div>
    </div>
  );
};

export default Homepage;
