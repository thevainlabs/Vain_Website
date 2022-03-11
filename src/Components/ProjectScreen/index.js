import React from "react";
import bg from "../../Images/Work_bg.png";
import { Link } from "react-router-dom";
import "./ProjectElement.css";
const Project = () => {
  return (
    <div className="ProjectScreen">
      <div className="container">
        <h6>UXized Projects</h6>
        <ul className="ProjectList">
          <li>
            <Link to="/" className="ProjectLink">
              <h5>Project 1</h5>
            </Link>
          </li>
          <li>
            <Link to="/" className="ProjectLink">
              <h5>Project 2</h5>
            </Link>
          </li>
          <li>
            <Link to="/" className="ProjectLink">
              <h5>Project 3</h5>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
