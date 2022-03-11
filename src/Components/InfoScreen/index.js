import React from "react";
import "./InfoElement.css";
const Info = () => {
  return (
    <div className="InfoContainer">
      <h1 className="InfoH1">LETS TALK</h1>
      <form action="">
        <input type="text" name="name" placeholder="Name" required></input>
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="business name" placeholder="Business Name" />
        <input
          type="link"
          name="business profile"
          placeholder="Business URL/ LinkedIN"
        />
        <textarea name="message" rows="3" placeholder="Description" required />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Info;
