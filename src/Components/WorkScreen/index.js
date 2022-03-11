import React from "react";
import w1 from "../../Images/work1.png";
import w2 from "../../Images/work2.png";
import "./WorkScreen.css";
const Work = () => {
  return (
    <div className="WorkContainer">
      <div className="Container">
        <div className="TextBox">
          <h1>WHAT WE DO?</h1>
          <h5>Everything to perfect the user experience of your audience!</h5>
          <div className="ImageBox">
            <img src={w1} className="img1" />
            <img src={w2} className="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
