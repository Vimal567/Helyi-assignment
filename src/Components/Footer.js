import { Grid, Stack } from "@mui/material";
import "./Footer.css";
import YouTubeIcon from "../images/youtube.png";
import InstagramIcon from "../images/instagram.png";
import LinkedInIcon from "../images/llinkedin.png";
import FacebookIcon from "../images/facebook.png";
import TwitterIcon from "../images/twitter.png";
import googlePlay from "../images/googlePlay.png";
import appleStore from "../images/appleStore.png";
import footer from "../images/footer.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid item xs={12} md={4}>
          <Stack className="contact-details">
            <header>Contact Details</header>
            <br />
            <div>Karthikeya Business Solutions Vijaywada, Andhra Pradesh</div>
            <div>
              <strong>Pincode:</strong> 564 543
            </div>
            <div>
              <strong>Tel:</strong> +91 98745 66432, 040 3324 4352
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a className="mail" href="mailto:info@helyi.com">
                info@helyi.com
              </a>
            </div>
            <div className="social-icons">
              <img alt="youtube" src={YouTubeIcon} />
              <img alt="instagram" src={InstagramIcon} />
              <img alt="Linkedin" src={LinkedInIcon} />
              <img alt="facebook" src={FacebookIcon} />
              <img alt="twitter" src={TwitterIcon} />
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack className="quick-links">
            <header>Quick Links</header>
            <br />
            <span>Home</span>
            <span>Join Us</span>
            <span>Merchant Log In</span>
            <span>Franchise Log In</span>
            <div className="download-icons">
              <img alt="google store" src={googlePlay} />
              <img alt="apple store" src={appleStore} />
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack className="subscribe">
            <header>Subscribe us </header>
            <div className="subscribe-input">
              <span>
                <EmailIcon />
              </span>
              <input type="email" placeholder="Enter your email id" />
            </div>
            <header>Get App on your mobile</header>
            <div className="subscribe-input">
              <span>
                <PhoneAndroidIcon />
              </span>
              <input
                type="email"
                placeholder="Enter your 10 digit mobile no."
              />
            </div>
            <br />
            <button>Get Link</button>
            <div>
              <a href="w">Privacy Policy</a>
              <a href="w">T&C</a>
            </div>
          </Stack>
        </Grid>
      </Grid>
      <div className="copyrights">
        Copyright 2020 - All Rights Reserved -Helyi
      </div>
      <div className="footer-image">
        <img alt="footer" src={footer} />
      </div>
    </div>
  );
};

export default Footer;
