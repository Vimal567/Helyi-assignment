import "./WhyPartner.css";
import deliveries from "../images/100M+.png";
import agents from "../images/10M+.png";
import cities from "../images/50+.png";
import easyPayment from "../images/easyPayment.png";
import demand from "../images/delivery.png";
import customerSupport from "../images/serviceSupport.png";
import { Grid } from "@mui/material";

const WhyPartner = () => {
  return (
    <div className="whyPartner">
      <header>Why our partners love us</header>
      <div className="whyPartner-sub-heading">
        There’s a long list of reasons to franchise with Helyi. Here are some of
        the biggest reasons
      </div>
      <div className="whyPartner-details">
        <div className="whyPartner-details-container">
          <div className="whyPartner-details-box">
            <img alt="100M+ deliveries" src={deliveries} />
            <div>100M+ Deliveries</div>
          </div>
          <div className="whyPartner-details-box">
            <img alt="100M+ deliveries" src={agents} />
            <div>10M+ Delivery Agents</div>
          </div>
          <div className="whyPartner-details-box">
            <img alt="100M+ deliveries" src={cities} />
            <div>50+ Cities</div>
          </div>
          <div className="whyPartner-details-box">
            <img alt="100M+ deliveries" src={easyPayment} />
            <div>Easy Payment and Withdrawal</div>
          </div>
          <div className="whyPartner-details-box">
            <img alt="100M+ deliveries" src={demand} />
            <div>India’s First On-Demand Delivery Business</div>
          </div>
          <div className="whyPartner-details-box">
            <img alt="100M+ deliveries" src={customerSupport} />
            <div>24*7 Customer Support & On-site Training</div>
          </div>
        </div>
      </div>
      <Grid container className="whyPartner-getinTouch-section" spacing={12}>
        <Grid
          className="whyPartner-getinTouch-container-one"
          item
          xs={12}
          md={6}
        >
          <div className="whyPartner-getinTouch-card">
            <div>Start your Enterpreneural Journey with Helyi</div>
            <div>On-Demand Delivery Franchise Today!</div>
            <button>Get in Touch</button>
          </div>
        </Grid>
        <Grid
          className="whyPartner-getinTouch-container-two"
          item
          xs={12}
          md={6}
        >
          <div className="whyPartner-getinTouch-card">
            <div>Kickstart your business with us!</div>
            <div>Take the first step today.</div>
            <button>Get in Touch</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyPartner;
