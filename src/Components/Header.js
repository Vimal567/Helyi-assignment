import "./Header.css";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="fixed-top header">
      <Container className="header-container">
        <Navbar.Brand href="#home">
          <img alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-links" href="#home">
              Helyi! for Franchise
            </Nav.Link>
            <Nav.Link className="nav-links" href="#link">
              Helyi! for Partner
            </Nav.Link>
            <Nav.Link className="nav-links" href="#link">
              Helyi! for Merchant
            </Nav.Link>
            <Nav.Link className="nav-links" href="#link">
              Helyi! SMART
            </Nav.Link>
            <Nav.Link className="nav-links" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
          <span>
            <button className="login-btn">Log In</button>
            <button className="signup-btn">Sign Up</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
