import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/radio-logo.svg";

const Navbar = () => {
  return (
    <section className="nav-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light nav-bg justify-content-sm-start fixed-top">
          <Link
            to={"/"}
            className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto"
          >
            <img src={Logo} alt="radiohead" className="home-logo" />
          </Link>
          <button
            className="navbar-toggler align-self-start hidden-sm-up float-xs-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginTop: 5 + "px" }}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-btn1" to="/contact">
                  Contact Sales
                </Link>
              </li>
              <br />
              <li className="nav-item">
                <Link className="nav-btn1" to="/login">
                  Log In
                </Link>
              </li>
              <br />
              <li className="nav-item">
                <Link className="nav-btn" to="/">
                  Try for Free{" "}
                </Link>
              </li>
              <br />
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
