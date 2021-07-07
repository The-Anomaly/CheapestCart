import * as React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="cc-nav">
        <div className="cc-nav-desktop">
          <div className="cc-nav-logo">
            <img src={logo} alt="cheapestcart logo" />
            <span className="cc-nav-logotxt">
              CHEAPEST<sup>TM</sup> <br />
              CART
            </span>
          </div>

          <nav className="cc-nav-list">
            <span>Home</span>
            <span>Services</span>
            <span>Contact Us</span>
            <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20a%20trade">
              <button>Start Trading</button>
            </a>
          </nav>
        </div>
        <div className="cc-nav-mobile"></div>
      </div>
    </>
  );
};

export default NavBar;
