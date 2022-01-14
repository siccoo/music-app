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
          <div>
              <div className="col-md-3"></div>
              <div className="col-md-1"></div>
              <div className="col-md-2"></div>
              <div className="col-md-2"></div>
              <div className="col-md-2"></div>
              <div className="col-md-2"></div>
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
