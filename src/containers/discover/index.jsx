import React from "react";
import AppStore from "../../assets/images/app-store.png";
import GooglePlay from "../../assets/images/google-play.png";

import "./discover.scss";

const Discover = () => {
  return (
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
  );
};

export default Discover;
