import React from "react";
import "./Home.css";
import Dining from "../assets/images/main/home/rooms-card1.svg";
import Living from "../assets/images/main/home/rooms-card2.svg";
import Bedroom from "../assets/images/main/home/rooms-card3.svg";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="hero-content">
          <div className="card">
            <h5>New Arrival</h5>
            <h2>Discover Our New Collection</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="rooms">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="cards">
            <div className="card">
              <img src={Dining} alt="Dining..." />
              <h4>Dining</h4>
            </div>
            <div className="card">
              <img src={Living} alt="Living..." />
              <h4>Living</h4>
            </div>
            <div className="card">
              <img src={Bedroom} alt="Bedroom..." />
              <h4>Bedroom</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
