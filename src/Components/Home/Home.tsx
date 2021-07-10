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
import secure from "../../assets/secure.png";
import clock from "../../assets/clock.png";
import money from "../../assets/money.png";
import help from "../../assets/help.png";
import exchange from "../../assets/exchange.png";
import btc from "../../assets/btc.png";
import bitcoin from "../../assets/bitcoin.png";
import itunes from "../../assets/itunes.png";
import nike from "../../assets/nike.png";
import amazon from "../../assets/bitcoin.png";
import ebay from "../../assets/ebay.png";
import gplay from "../../assets/gplay.png";
import sephora from "../../assets/sephora.png";
import visa from "../../assets/visa.png";
import ps from "../../assets/ps.png";
import steam from "../../assets/steam.png";
import AE from "../../assets/ae.png";
import locker from "../../assets/locker.png";
import xbox from "../../assets/xbox.png";
import vanilla from "../../assets/vanilla.png";
import alt from "../../assets/alt.png";
import woman from "../../assets/woman.png";
import woman2 from "../../assets/woman2.png";
import bitcoin2 from "../../assets/bitcoin2.png";
import gift from "../../assets/gift.png";
import bulb from "../../assets/bulb.png";
import devices from "../../assets/devices.png";
import exchange2 from "../../assets/exchange2.png";
import discount from "../../assets/discount.png";
import lightlogo from "../../assets/cclightlogo.png";
import phone from "../../assets/phone.png";
import twitter from "../../assets/Twitter.png";
import envelope from "../../assets/Message.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import Footer from "../GeneralComponents/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import zigzag from "../../assets/zigzag.png";

const Home = () => {
  const [state, setState] = React.useState({
    num: document.getElementById("num")?.innerText,
  });
  const { num } = state;
  let i = 0;
  React.useEffect(() => {
    window.scrollTo(-0, -0);
    AOS.init({
      duration: 800,
      offset: 100,
      delay: 50,
      easing: "ease-in-out",
    });
    AOS.refresh();
    const increase = () => {
      if (i < 1000) {
        if (i < 100) {
          i+=5;
          setState({
            ...state,
            num: JSON.stringify(i),
          });
        } else {
          i += 50;
          setState({
            ...state,
            num: JSON.stringify(i),
          });
        }
      }
    };
    setTimeout(() => {
      setInterval(increase, 50);
    }, 1500);
  }, []);
  return (
    <>
      <NavBar />
      <div className="cc-home-container">
        <section className="cc-hero-sec" id="home">
          <h1 className="cc-hero-ttl">The future is here, don't be left out</h1>
          <p className="cc-hero-txt">
            Cheapestcart Inc. Your number 1 platform for all sorts of trades!
            <br />
            Rapid confirmation and fast payout
          </p>
          <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20a%20trade">
            <button className="cc-hero-btn">Start Trading</button>
          </a>
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
        <section className="cc-sec2">
          <div className="cc-sec2-1">
            <div id="num" className="cc-sec2-txt">
              {num}+ <span>Satisfied Clients</span>
            </div>
            <div className="cc-sec2-pros">
              <div className="cc-sec2-pros-list" data-aos="fade-up">
                <div className="cc-sec2-pros-list-icon">
                  <img src={secure} alt="" />
                </div>
                <p className="cc-sec2-pros-list-txt">Safe & Secure</p>
              </div>
              <div className="cc-sec2-pros-list" data-aos="fade-up">
                <div className="cc-sec2-pros-list-icon">
                  <img src={clock} alt="" />
                </div>
                <p className="cc-sec2-pros-list-txt">24/7 Availability</p>
              </div>
              <div className="cc-sec2-pros-list" data-aos="fade-up">
                <div className="cc-sec2-pros-list-icon">
                  <img src={money} alt="money bag" />
                </div>
                <p className="cc-sec2-pros-list-txt">Fast Payment</p>
              </div>
              <div className="cc-sec2-pros-list" data-aos="fade-up">
                <div className="cc-sec2-pros-list-icon">
                  <img src={help} alt="" />
                </div>
                <p className="cc-sec2-pros-list-txt">Friendly Support</p>
              </div>
            </div>
          </div>
          <div className="cc-sec2-2">
            <div className="cc-sec2-exchange" data-aos="slide-right">
              <img src={exchange} alt="" />
              <img src={btc} alt="bitcoin" />
            </div>
            <div className="cc-sec2-info">
              <p className="cc-sec2-info-txt1">About Cheapest Cart Inc.</p>
              <h3 className="cc-sec2-info-hd">
                We are a top Exchange Platform
              </h3>
              <p className="cc-sec2-info-txt2">
                We are a company that is committed to providing you a platform
                with which you can trade gift cards and bitcoin in a safe,
                credible and profitable manner, sale of Laptops, Phones and
                Accessories, payment of utilities, flight reservations and
                bookings, Foreign Exchange e.t.c.
                <br />
                Our no1 goal is to make sure that you make massive profits on
                each trade.
              </p>
            </div>
          </div>
        </section>
        <section className="cc-sec3" >
          <p className="cc-sec3-txt">We offer you a cocktail of varieties</p>
          <h4 className="cc-sec3-hd">
            Life is all about varieties, we are in the mix of it all <br/> BRINGING
            YOU THE BEST RATES!
          </h4>
          <div className="cc-sec3-grid">
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={bitcoin} alt="bitcoin" />
              <div className="cc-sec3-grid-item-details">
                <p>Bitcoin</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20bitcoin">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={itunes} alt="itunes" />
              <div className="cc-sec3-grid-item-details">
                <p>iTunes</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20itunes">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={nike} alt="nike" />
              <div className="cc-sec3-grid-item-details">
                <p>Nike</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20nike">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={amazon} alt="amazon" />
              <div className="cc-sec3-grid-item-details">
                <p>Amazon</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20shop%20on%20amazon">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={ebay} alt="ebay" />
              <div className="cc-sec3-grid-item-details">
                <p>eBay</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20shop%20on%20ebay">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={gplay} alt="google play" />
              <div className="cc-sec3-grid-item-details">
                <p>Google Play</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%make%20a%20payment%20on%20google%20play">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={sephora} alt="sephora" />
              <div className="cc-sec3-grid-item-details">
                <p>Sephora</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20sephora">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={visa} alt="visa" />
              <div className="cc-sec3-grid-item-details">
                <p>Visa</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20visa">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={ps} alt="playstation" />
              <div className="cc-sec3-grid-item-details">
                <p>Playstation</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20playstation">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={steam} alt="steam" />
              <div className="cc-sec3-grid-item-details">
                <p>Steam</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20steam">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={AE} alt="american express" />
              <div className="cc-sec3-grid-item-details">
                <p>American Express</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20american%20express">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={locker} alt="locker" />
              <div className="cc-sec3-grid-item-details">
                <p>Locker</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20locker">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={xbox} alt="xbox" />
              <div className="cc-sec3-grid-item-details">
                <p>Xbox</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20xbox">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={vanilla} alt="vanilla" />
              <div className="cc-sec3-grid-item-details">
                <p>Vanilla</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20vanilla">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
            <div className="cc-sec3-grid-item" data-aos="fade-up">
              <img src={alt} alt="alt coins" />
              <div className="cc-sec3-grid-item-details">
                <p>Alt Coins</p>
                <p>You can click the button to start trading right a way</p>
                <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20sell%20alt%20coins">
                  <button>Start Trading</button>
                </a>
              </div>
            </div>
          </div>
          <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading">
            <button className="cc-sec3-btn">Others</button>
          </a>
        </section>
        <section className="cc-sec4">
          <div className="cc-sec2-info">
            <p className="cc-sec2-info-txt1">At Cheapest Cart Inc.</p>
            <h3 className="cc-sec2-info-hd">
              We consider customer satisfaction a top Priority
            </h3>
            <p className="cc-sec2-info-txt2">
              To achieve this, we have got processes in place to discourage any
              factor that will lead to a bad experience with us, We are commited
              to keeping that smile on your face
            </p>
            <ul className="cc-sec4-ul">
              <li>Secure Trades</li>
              <li>24/7 customer care</li>
              <li>Mouth watering rates</li>
              <li>Friendly Bonus etc</li>
            </ul>
            <p className="cc-sec4-txt">You can never go wrong with us</p>
            <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading">
              <button className="cc-sec4-btn">Start Trading</button>
            </a>
          </div>
          <img className="cc-woman" src={woman} alt="" data-aos="zoom-out-up" />
        </section>
        <section className="cc-sec5" id="services">
          <h4 className="cc-sec5-ttl">Services we offer</h4>
          <p className="cc-sec5-txt">
            We told you about varieties, at Cheapest Cart Inc, your one stop for
            all your needs
          </p>
          <div className="cc-sec5-list">
            <div className="cc-sec5-item-sec">
              <div className="cc-sec5-item">
                <div className="cc-sec5-item-img cc-sec5-item-img-1">
                  <img src={bitcoin2} alt="bitcoin" />
                </div>
                <p className="cc-sec5-item-hd">Cryptocurrency exhange</p>
                <p className="cc-sec5-item-txt">
                  Trade your Bitcoin, Ethereum, Dogecoin, and other
                  cryptocurrencies 24/7 and for the best rates you can find
                </p>
              </div>
              <div className="cc-sec5-item">
                <div className="cc-sec5-item-img cc-sec5-item-img-2">
                  <img src={gift} alt="giftcard" />
                </div>
                <p className="cc-sec5-item-hd">Giftcard Sale</p>
                <p className="cc-sec5-item-txt">
                  Buying and redeeming all country giftcards like itunes, steam
                  wallet, nike, amazon, ebay, google play, american express,
                  playstation, xbox, vanilla, visa, my vanilla, one vanilla,
                  foot locker, marcy, sephora etc.
                </p>
              </div>
            </div>
            <div className="cc-sec5-item-sec">
              <div className="cc-sec5-item">
                <div className="cc-sec5-item-img cc-sec5-item-img-3">
                  <img src={devices} alt="gadget" />
                </div>
                <p className="cc-sec5-item-hd">Gadget Sales/Repairs</p>
                <p className="cc-sec5-item-txt">
                  Selling & repairs of iphones, laptops, apple watches, airpods,
                  playstation, and consoles etc.{" "}
                </p>
              </div>
              <div className="cc-sec5-item">
                <div className="cc-sec5-item-img cc-sec5-item-img-4">
                  <img src={exchange2} alt="currency exchange" />
                </div>
                <p className="cc-sec5-item-hd">Dollar/Euro Exchange</p>
                <p className="cc-sec5-item-txt">
                  Through us, businesses and individuals can place orders and
                  broker foreign currency transactions more conveniently than
                  ever before. We trade in major global currencies, including
                  the US dollar, UK pound sterling and the Euro
                </p>
              </div>
            </div>
            <div className="cc-sec5-item-sec">
              <div className="cc-sec5-item">
                <div className="cc-sec5-item-img cc-sec5-item-img-5">
                  <img src={discount} alt="discount" />
                </div>
                <p className="cc-sec5-item-hd">Utilities Bills</p>
                <p className="cc-sec5-item-txt">
                  Payment of utilities like cable bills, light bills, airtime,
                  and data subscriptions.
                </p>
              </div>
              <div className="cc-sec5-item">
                <div className="cc-sec5-item-img cc-sec5-item-img-6">
                  <img src={bulb} alt="tips" />
                </div>
                <p className="cc-sec5-item-hd">Trading Tips/Education</p>
                <p className="cc-sec5-item-txt">
                  We give best advice on investment options, how to maximize
                  your funds and make profits
                </p>
              </div>
            </div>
            <img
              className="cc-sec5-woman"
              src={woman2}
              alt=""
              data-aos="zoom-in-up"
            />
            <img className="cc-sec5-line" src={zigzag} alt="connecting line" />
            <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading">
              <button className="cc-sec5-btn">Get in touch Now!</button>
            </a>
          </div>
        </section>
        <section className="cc-sec6" id="contact">
          <h4 className="cc-sec5-ttl">Contact us </h4>
          <p className="cc-sec5-txt">
            We are available 24/7 to take your tradings
          </p>
          <form className="cc-sec6-form">
            <input
              className="cc-sec6-form-input"
              type="text"
              name="name"
              placeholder="Enter your Full Name"
            />
            <input
              className="cc-sec6-form-input"
              type="email"
              name="email"
              placeholder="Enter your Email"
            />
            <textarea
              className="cc-sec6-form-input cc-sec6-form-txtarea"
              name="message"
              placeholder="Enter your Message"
            ></textarea>
            <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading">
              <button className="cc-sec6-form-btn">Leave a Message</button>
            </a>
            <p className="cc-sec6-form-or">or</p>
            <div className="cc-sec6-form-socials">
              <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading">
                <div className="cc-sec6-form-socials-item">
                  <div>
                    <img src={phone} alt="" />
                  </div>
                  <p>Phone</p>
                </div>
              </a>
              <a target="_blank" href="">
                <div className="cc-sec6-form-socials-item">
                  <div>
                    <img src={envelope} alt="" />
                  </div>
                  <p>Email</p>
                </div>
              </a>
              <a target="_blank" href="https://twitter.com/cheapestcartinc">
                <div className="cc-sec6-form-socials-item">
                  <div>
                    <img src={twitter} alt="" />
                  </div>
                  <p>Twitter</p>
                </div>
              </a>
              <a target="_blank" href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20trading">
                <div className="cc-sec6-form-socials-item">
                  <div>
                    <img src={whatsapp} alt="" />
                  </div>
                  <p>Whatsapp</p>
                </div>
              </a>
              <a target="_blank" href="https://instagram.com/cheapestcartinc_">
              <div className="cc-sec6-form-socials-item">
                <div>
                  <img src={instagram} alt="" />
                </div>
                <p>Instagram</p>
              </div>
              </a>
            </div>
          </form>
          <img
            className="cc-sec6-logo1"
            src={lightlogo}
            alt="cheapestcartlogo"
            data-aos="slide-up"
          />
          <img
            className="cc-sec6-logo2"
            src={lightlogo}
            alt="cheapestcartlogo"
            data-aos="slide-down"
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
