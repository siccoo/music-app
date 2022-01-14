import React from "react";
import { FiChevronRight } from "react-icons/fi";
import ImgStar from "../../assets/images/image6.png";
import ImgDrake from "../../assets/images/image4.png";
import ImgSusamam from "../../assets/images/image3.png";
import ImgEminem from "../../assets/images/image5.png";
import ImgPhy from "../../assets/images/image1.png";
import ImgRihana from "../../assets/images/image2.png";

import "./music.scss";

const Music = () => {
  return (
    <section className="music__section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <div className="row">
              <div className="col-md-3">
                <div className="music-image">
                  <img src={ImgStar} alt="starboy" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="music-image">
                  <img src={ImgDrake} alt="starboy" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="music-image">
                  <img src={ImgSusamam} alt="starboy" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <div className="music-image">
                  <img src={ImgEminem} alt="starboy" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="music-image">
                  <img src={ImgPhy} alt="starboy" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="music-image">
                  <img src={ImgRihana} alt="starboy" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 align-self-center">
            <div>
              <h5>The music you love</h5>
              <p>
                With over 60 million tracks and tons of exclusive interviews and
                videos, TIDAL is here to bring you closer to the artists you
                listen to.
              </p>
              <span>
                <FiChevronRight className="playlist-arrow" /> More Featured
                Content
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
