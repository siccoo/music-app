import React from 'react'
import Navbar from '../../components/navbar';

import "./Home.scss";

import PlayStation from "../../assets/images/playstation.png";
import BlackBerry from "../../assets/images/blackberry.png";
import RedBull from "../../assets/images/redbull.png";
import TikTok from "../../assets/images/tiktok.png";
import Senheiser from "../../assets/images/sennheiser.png";


const Home = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>

            <section className='home__header'>
                <div className='header__content__wrap'>
                    <div className='header__text'>

                    </div>
                    <div className='header__image'>

                    </div>
                </div>
            </section>

            {/* BRANDS SECTION */}
            <section className='home__brands'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <ul className='brand__list'>
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
    )
}

export default Home;
