import "./Getstarted.css";
import ourMap from "../images/ourMap.png";

const Getstarted = () => {
  return (
    <div className="getStarted">
      <header>How to Get Started</header>
      <div className="getStarted-sub-heading">
        Follow our simple 5-Step Procedure to launch your On-Demand Franchise
        Business
      </div>
      <picture>
        <img alt="service map" src={ourMap} />
      </picture>
    </div>
  );
};

export default Getstarted;
