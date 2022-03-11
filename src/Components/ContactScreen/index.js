import React from "react";
import "./ContactElement.css";
import fb from "../../Images/fb.png";
import insta from "../../Images/insta.png";
import linkedin from "../../Images/linkedin.png";
const Contact = () => {
  return (
    <div className="ContactContainer">
      <h1>CONTACT!</h1>
      <div className="ContactDetail">
        Call: +911234567890 <br />
        Mail: thevainlabs@gmail.com
      </div>
      <div className="ContactLink">
        <a href="/" className="ContactCard">
          <img src={fb} alt="Facebook" className="LinkImage" />
          <h5>Facebook</h5>
        </a>
        <a
          href="https://www.linkedin.com/company/thevainlabs/"
          className="ContactCard"
        >
          <img src={linkedin} alt="LinkedIn" className="LinkImage" />
          <h5>LinkedIn</h5>
        </a>
        <a
          href="https://www.instagram.com/thevainlabs/"
          className="ContactCard"
        >
          <img src={insta} alt="Instagram" className="LinkImage" />
          <h5>Instagram</h5>
        </a>
      </div>
    </div>
  );
};

export default Contact;
