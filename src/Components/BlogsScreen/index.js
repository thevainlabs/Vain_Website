import React from "react";
import "./BlogsElement.css";
import blog1 from "../../Images/blog1.png";
import blog2 from "../../Images/blog2.png";
import blog3 from "../../Images/blog3.png";

const Blogs = () => {
  return (
    <div className="BlogsContainer">
      <h1 className="BlogsH1">Fresh Perspectives</h1>
      <div className="BlogsWrapper">
        <div className="BlogCard">
          <img src={blog1} alt="" className="imageBlog" />
          <h4>5 UI Trends 2022</h4>
          <p className="blogpara">
            Check out the blog consisting of the top 5 UX trends of 2022 to keep
            up with the UX world!
          </p>
        </div>
        <div className="BlogCard">
          <img src={blog2} alt="" className="imageBlog" />
          <h4>5 UI Trends 2022</h4>
          <p className="blogpara">
            Check out the blog consisting of the top 5 UX trends of 2022 to keep
            up with the UX world!
          </p>
        </div>
        <div className="BlogCard">
          <img src={blog3} alt="" className="imageBlog" />
          <h4>5 UI Trends 2022</h4>
          <p className="blogpara">
            Check out the blog consisting of the top 5 UX trends of 2022 to keep
            up with the UX world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
