import * as React from "react";
import "./home.css";
import NavBar from "../GeneralComponents/Navbar";
import future from "../../assets/future.png";
import cryp1 from "../../assets/cryp1.png";
import cryp2 from "../../assets/cryp2.png";
import cryp3 from "../../assets/cryp3.png";
import cryp4 from "../../assets/cryp4.png";
import cryp5 from "../../assets/cryp5.png";
import cryp6 from "../../assets/cryp6.png";
import cryp7 from "../../assets/cryp7.png";
import cryp8 from "../../assets/cryp8.png";
import cryp9 from "../../assets/cryp9.png";
import cryp10 from "../../assets/cryp10.png";

const Home = () => {
    return (
        <>
        <NavBar />
            <div className="cc-home-container">
                <section className="cc-hero-sec">
                    <h1 className="cc-hero-ttl">The future is here, don't be left out</h1>
                    <p className="cc-hero-txt">Cheapestcart Inc. Your number 1 platform for all sorts of trades!<br />
                    Rapid confirmation and fast payout</p>
                    <button className="cc-hero-btn">Start Trading</button>
                    <div className="cc-hero-imgs">
                <img className="cc-hero-img" src={future} alt="" />
                <img className="cryp cryp1" src={cryp1} alt="cryptocurrency" />
                <img className="cryp cryp2" src={cryp2} alt="cryptocurrency" />
                <img className="cryp cryp3" src={cryp3} alt="cryptocurrency" />
                <img className="cryp cryp4" src={cryp4} alt="cryptocurrency" />
                <img className="cryp cryp5" src={cryp5} alt="cryptocurrency" />
                <img className="cryp cryp6" src={cryp6} alt="cryptocurrency" />
                <img className="cryp cryp7" src={cryp7} alt="cryptocurrency" />
                <img className="cryp cryp8" src={cryp8} alt="cryptocurrency" />
                <img className="cryp cryp9" src={cryp9} alt="cryptocurrency" />
                <img className="cryp cryp10" src={cryp10} alt="cryptocurrency" />
                </div>
                </section>
                <section>second</section>
            </div>
        </>
    )
}

export default Home;