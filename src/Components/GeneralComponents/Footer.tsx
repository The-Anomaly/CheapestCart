import * as React from "react";
import "./footer.css";
import "./navbar.css";
import logo from "../../assets/logo.png";
import whatsapp from "../../assets/lightwhatsapp.png";
import twitter from "../../assets/lighttwitter.png"
import fb from "../../assets/lightfb.png";
import google from "../../assets/lightg.png"

const Footer = () => {
  return (
    <>
      <footer className="cc-footer">
        <div className="cc-footer-items">
          <div>
            <div className="cc-nav-logo">
              <img src={logo} alt="cheapestcart logo" />
              <span className="cc-nav-logotxt">
                CHEAPEST<sup>TM</sup> <br />
                CART
              </span>
            </div>
            <p className="cc-footer-items-txt1">
              Cheapestcart Inc. Your number 1 platform for all sorts of trades!
              Rapid confirmation and fast payout
            </p>
          </div>
          <div>
            <p className="cc-footer-items-hd">Services</p>
            <ul className="cc-footer-items-list">
              <li>Cryptocurrency Exchange</li>
              <li>Gift Cards</li>
              <li>Utilities</li>
              <li>Gadget Sales/Repairs</li>
              <li>Euro/Dollar Exchange</li>
            </ul>
          </div>
          <div>
            <p className="cc-footer-items-hd">Products</p>
            <ul className="cc-footer-items-list">
              <li>Bitcoin</li>
              <li>Giftcard</li>
              <li>Iphones</li>
              <li>Flight Booking</li>
            </ul>
          </div>
          <div>
            <p className="cc-footer-items-hd">Contact</p>
            <p className="cc-footer-items-txt2">
              Feel free to get in touch with us via phone or send us a message.
            </p>
            <p className="cc-footer-items-txt3">
              +234 803 291 2487 <br />
              info@cheapestcartinc.com
            </p>
          </div>
        </div>
        <hr />
        <div className="cc-ftr-cpy">
            <p>© Cheapest Cart Inc. 2021, All Rights Reserved</p>
            <div className="cc-ftr-socials">
            <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading"><img src={whatsapp} alt="whatsapp" /></a>
            <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading"><img src={twitter} alt="twitter" /></a>
            <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading"><img src={fb} alt="facebook" /></a>
            <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading"><img src={google} alt="google" /></a>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
