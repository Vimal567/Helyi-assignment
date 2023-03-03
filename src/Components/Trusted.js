import "./Trusted.css";
import nestle from "../images/nestle.png";
import cadbury from "../images/cadbury.png";
import britania from "../images/britania.png";
import diary from "../images/diary.png";
import mobile from "../images/mobile.png";
import googlePlay from "../images/googlePlay.png";
import appleStore from "../images/appleStore.png";

const Trusted = () => {
  return (
    <div className="trusted">
      <header>Trusted Partners</header>
      <div className="trusted-sub-heading">
        Most Trusted On-Demand Business Partners with over 10 Million Orders
      </div>
      <div className="partners">
        <img alt="nestle" src={nestle} />
        <img alt="cadbury" src={cadbury} />
        <img alt="britania" src={britania} />
        <img alt="diary" src={diary} />
        <img alt="nestle" src={nestle} />
      </div>
      <div className="getStarted-now">
        <header>Get Started Now!</header>
        <div className="getStarted-now-sub-heading">
          Join Helyi and be a part of this revolution where we connect small
          towns in India!
        </div>
        <img className="getStarted-now-mobile" alt="mobile" src={mobile} />
        <div className="download-icons">
          <img alt="google store" src={googlePlay} />
          <img alt="apple store" src={appleStore} />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
