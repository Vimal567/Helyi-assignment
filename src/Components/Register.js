import "./Register.css";
import { Grid } from "@mui/material";
import register from "../images/register.png";

const Register = () => {
  return (
    <div className="register">
      <div className="register-heading">Register Now as Helyi Partner</div>
      <div className="register-sub-heading">
        Register Now and be a part of Helyi Family. Be a Helyi Partner and
        skyrocket your On-demand Franchise Business Now
      </div>
      <Grid container>
        <Grid item sm={12} md={6}>
          <img className="register-img" alt="register" src={register} />
        </Grid>
        <Grid item sm={12} md={6}>
          <form className="register-form">
            <Grid container>
              <Grid
                item
                style={{ display: "flex", flexDirection: "column" }}
                sm={12}
                md={6}
              >
                <label>Your Name*</label>
                <input
                  type="text"
                  className="register-input-group-one"
                  placeholder="Please enter store name"
                />
              </Grid>
              <Grid
                item
                style={{ display: "flex", flexDirection: "column" }}
                sm={12}
                md={6}
              >
                <label>Email Id*</label>
                <input
                  type="text"
                  className="register-input-group-one"
                  placeholder="Please enter your Email Id"
                />
              </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid
                item
                style={{ display: "flex", flexDirection: "column" }}
                sm={12}
                md={6}
              >
                <label>Mobile Number*</label>
                <input
                  type="text"
                  className="register-input-group-one"
                  placeholder="Please enter your 10-digit mobile number"
                />
              </Grid>
              <Grid
                item
                style={{ display: "flex", flexDirection: "column" }}
                sm={12}
                md={6}
              >
                <label>City Name*</label>
                <input
                  type="text"
                  className="register-input-group-one"
                  placeholder="Enter the name of your city"
                />
              </Grid>
            </Grid>
            <br />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Select Investment</label>
              <input
                type="text"
                className="register-input-group-two"
                placeholder="Select Investment"
              />
            </div>
            <br />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>How soon to start?</label>
              <input
                type="text"
                className="register-input-group-two"
                placeholder="Select Investment"
              />
            </div>
            <div className="register-btn">
              <button>Submit your Application</button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
