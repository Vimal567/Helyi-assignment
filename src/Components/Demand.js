import "./Demand.css";
import { Grid } from "@mui/material";
import demand from "../images/demand.png";

const Demand = () => {
  return (
    <Grid container className="demand">
      <Grid item xs={12} sm={12} md={6}>
        <div className="demand-card">
          <header>Start your On-Demand Franchise Business Today</header>
          <br />
          <span>with our Glovo/Zomato/DoorDash like application</span>
          <br />
          <br />
          <p>
            Let our technology power your Glovo/ Zomato/DoorDash like on-demand
            delivery business,while you manage your day-to-day operations with
            miinimum investment
          </p>
          <button>Get in Touch</button>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <picture>
          <img alt="demand" src={demand} />
        </picture>
      </Grid>
    </Grid>
  );
};

export default Demand;
