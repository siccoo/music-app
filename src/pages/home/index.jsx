import React from "react";
import { Navbar, Footer } from "../../components";
import { Brands, Discover, Music, Playlist, Why } from "../../containers";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <Discover />
      <Brands />
      <Music />
      <Playlist />
      <Why />
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
