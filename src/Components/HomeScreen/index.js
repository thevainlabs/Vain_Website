import React from "react";
import { Link } from "react-router-dom";
import "./HomeElement.css";
import homeimage from "../../Images/home-image.png";
const HomeScreen = () => {
  return (
    <>
      <div className="HomeBackground">
        <div className="Container">
          <div className="HomeSplit">
            <div className="HomeText">
              <h1>A NEW TWIST THAT KEEPS YOU RELEVANT</h1>
              <Link to="/schedulemeet">
                <button className="HomeBtn">Schedule Meet</button>
              </Link>
            </div>
            <div className="HomeImage">
              <img src={homeimage} style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
