import React from "react";
import "./home.css";

const Home = () => {
  return (
    <header className="home">
      <div className="header-container">
        <div className="header-container-inner header-open">
          <h1>Foodhub, Where Food Lovers Unite!</h1>
          <p>
            Step into the heart of Foodhub, a vibrant community where food
            enthusiasts share a common passion. Connect with fellow food lovers,
            discover new flavors, and create lasting culinary memories. Join our
            community, and let's celebrate the joy of cooking and sharing
            together!
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Home;
