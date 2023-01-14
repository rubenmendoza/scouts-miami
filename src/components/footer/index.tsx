import React from "react";
import SocialWrapper from "../social/wrapper";
import "./styles.sass";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <div className="copy">
          <img src={`${__dirname}static/images/icon-247.svg`} alt="Troop 247" />
          <div className="copyright">
            &#169; {new Date().getFullYear()} Cub Scouts Miami Lakes / PSG Troop
            247
          </div>
        </div>
        <SocialWrapper></SocialWrapper>
      </div>
      <div className="dev">
        <h6>Design and Development by Ruben Mendoza Hamburger</h6>
      </div>
    </footer>
  );
};

export default Footer;
