import React from "react";
import PlayStation from "../../assets/images/playstation.png";
import BlackBerry from "../../assets/images/blackberry.png";
import RedBull from "../../assets/images/redbull.png";
import TikTok from "../../assets/images/tiktok.png";
import Senheiser from "../../assets/images/sennheiser.png";
import Iphone11 from "../../assets/images/iphones-11.png";

import "./brands.scss";

const Brands = () => {
  return (
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
                <img src={RedBull} alt="redbug" />
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
  );
};

export default Brands;
