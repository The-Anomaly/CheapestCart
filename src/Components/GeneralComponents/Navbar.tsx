import * as React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import SideNav from "react-simple-sidenav";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = React.useState({
    showNav: false,
  });
  const { showNav } = nav;
  const uniqueKeygen = (): number => {
    return Math.floor(Math.random() * 100);
  };
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
            <a href="/#home"><span>Home</span></a>
            <a href="/#services"><span>Services</span></a>
            <a href="/#contact"><span>Contact Us</span></a>
            <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20a%20trade">
              <button>Start Trading</button>
            </a>
          </nav>
        </div>
        <div className="cc-nav-mobile">
          <SideNav
            openFromRight={true}
            style={{ background: showNav ? "transparent" : "inherit" }}
            navStyle={{ width: "70%", background: "#05050F" }}
            showNav={showNav}
            onHideNav={() => setNav({ ...nav, showNav: false })}
            titleStyle={{
              backgroundColor: "#05050F",
              color: "#444444",
              paddingLeft: 10,
              paddingBottom: 0,
              paddingTop: 0,
              fontSize: 17,
              textAlign: "left",
              height: 73,
            }}
            itemStyle={{ backgroundColor: "#05050F", paddingLeft: 25 }}
            itemHoverStyle={{ backgroundColor: "inherit" }}
            title={[
              <div
                key={uniqueKeygen()}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  background: "#05050F",
                  padding: "0px 4px 1px 8px",
                  color: "#fff",
                  fontSize: "4rem",
                }}
              >
                <span
                  className=""
                  onClick={() =>
                    setNav({ ...nav, showNav: !showNav ? true : false })
                  }
                >
                  &times;
                </span>
              </div>,
            ]}
            items={[
              <div>
                <div className="navbar-nav mr-auto cc-nav-list cc-navlist-mobile">
                  <a href="/#home"><span>Home</span></a>
                  <a href="/#services"><span>Services</span></a>
                  <a href="/#contact"><span>Contact Us</span></a>
                  <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20a%20trade">
                    <button>Start Trading</button>
                  </a>
                  </div>
              </div>,
            ]}
          />
          <nav className="cc-nav-ctrl">
            <Link to="/">
            <div className="cc-nav-logo">
              <img src={logo} alt="cheapestcart logo" />
              <span className="cc-nav-logotxt">
                CHEAPEST<sup>TM</sup> <br />
                CART
              </span>
          </div>
            </Link>
            <div
              className="cc-nav-mobile-toggle"
              onClick={() =>
                setNav({ ...nav, showNav: !showNav ? true : false })
              }
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line1"></div>
            </div>
          </nav>
        </div>
      
      </div>
    </>
  );
};

export default NavBar;
