import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "./playlist.scss";

import Starboy from "../../assets/images/starboy.png";
import Drake from "../../assets/images/drake.png";

const Playlist = () => {
  return (
    <section className="playlist">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Hand-picked playlists</h5>
            <p>
              Stream guest playlists curated by the artists you love. Also,
              check out our original playlists hand-picked by our team of
              experts.
            </p>
            <span>
              <FiChevronRight className="playlist-arrow" /> Discover Radioheat
            </span>
          </div>
          <div className="col-md-3">
            <div className="playlist-image">
              <img src={Starboy} alt="starboy" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="playlist-image">
              <img src={Drake} alt="drake" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
