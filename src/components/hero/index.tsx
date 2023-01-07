import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./styles.sass";

const Hero = () => {
  return (
    <div className="hero-container">
      <StaticImage
        alt="Cub Scouts Pack 247 - Miami Lakes / PSN"
        src="../../images/scouts-miami-247_hero2.jpg"
      />
      <div className="hero hero-title">Cub Scouts Pack 247</div>
      <div className="hero hero-subtitle">Miami Lakes / PSN</div>
    </div>
  );
};

export default Hero;
