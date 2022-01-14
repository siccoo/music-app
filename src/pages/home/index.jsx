import React from "react";
import Navbar from "../../components/navbar";

import "./Home.scss";

import PlayStation from "../../assets/images/playstation.png";
import BlackBerry from "../../assets/images/blackberry.png";
import RedBull from "../../assets/images/redbull.png";
import TikTok from "../../assets/images/tiktok.png";
import Senheiser from "../../assets/images/sennheiser.png";
import Iphone11 from "../../assets/images/iphones-11.png";
import AppStore from "../../assets/images/app-store.png";
import GooglePlay from "../../assets/images/google-play.png";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className="home__header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
                <h3>
                  Discover, search, and play any song featuring voice control.
                </h3>
                <a className="button" href="#">
                  Try it free
                </a>
                <div className="btn-wrap">
                  <img src={AppStore} alt="appstore" />
                  <span>
                      <img src={GooglePlay} alt="googleplay" />
                  </span>
                </div>
            </div>
            <div className="header__image">
              {/* <img src={Iphone11} alt="iphone" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="home__brands">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="brand__list">
                <li>
                  <img src={PlayStation} alt="playstation" />
                </li>
                <li>
                  <img src={BlackBerry} alt="blackberry" />
                </li>
                <li>
                  <img src={RedBull} alt="redbull" />
                </li>
                <li>
                  <img src={TikTok} alt="tiktok" />
                </li>
                <li>
                  <img src={Senheiser} alt="sennheiser" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
