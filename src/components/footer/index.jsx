import React from "react";

import "./footer.scss";

import Logo from "../../assets/radio-logo.svg";

const Footer = () => {
  return (
    <div>
      <section className="footer__section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={Logo} alt="radiohead" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p>
                Radiohead is the first global music streaming service with high
                fidelity sound, hi-def video quality, along with expertly
                curated playlists and original content making it a trusted
                source for music and culture.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <div className="footer__head">Get Started</div>
              <ul>
                <li>Get Started</li>
                <li>Playlist Import</li>
                <li>Supported Devices</li>
                <li>Get Support</li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="footer__head">Discover</div>
              <ul>
                <li>About</li>
                <li>Magazine</li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="footer__head">Account</div>
              <ul>
                <li>Sign Up</li>
                <li>Redeem Voucher</li>
                <li>Redeem Giftcard</li>
                <li>Manage Account</li>
                <li>Store</li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="footer__head">Company</div>
              <ul>
                <li>Partners</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__section__dark">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                {" "}
                <a href="#">
                  {" "}
                  <i class="fa fa-facebook"> </i>{" "}
                </a>{" "}
              </li>
              <li class="list-inline-item">
                {" "}
                <a href="#">
                  {" "}
                  <i class="fa fa-twitter"> </i>{" "}
                </a>{" "}
              </li>
              <li class="list-inline-item">
                {" "}
                <a href="#">
                  {" "}
                  <i class="fa fa-instagram"> </i>{" "}
                </a>{" "}
              </li>
              <li class="list-inline-item">
                {" "}
                <a href="#">
                  {" "}
                  <i class="fa fa-google-plus"> </i>{" "}
                </a>{" "}
              </li>
              <li class="list-inline-item">
                {" "}
                <a href="#">
                  {" "}
                  <i class="fa fa-envelope"> </i>{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
