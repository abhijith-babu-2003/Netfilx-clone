import React from "react";
import "./Home.css";
import Navbar from "../../Compenents/NavBar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitileCards from "../../Compenents/TitileCards/TitileCards";
import Footer from "../../Compenents/Footer/Footer";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Banner" className="banner-img" />

        <div className="hero-caption">
          <img src={hero_title} alt="Title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

          <TitileCards />
        </div>
      </div>
      <div className="more-cards">
         <TitileCards  title={"Blockbuster Movies"} />
          <TitileCards title={"Only on Netflix"} />
           <TitileCards title={"Upcoming"}/>
              <TitileCards title={"Top Pics for You"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
