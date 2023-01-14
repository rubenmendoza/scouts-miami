import React from "react";
import "./styles.sass";

interface iProps {
  icon: string;
  hashtag: string;
  url: string;
  provider: string;
}

const SocialLink = ({ icon, hashtag, url, provider }: iProps) => {
  icon = `${__dirname}static/images/${icon}.svg`;
  return (
    <a href={url} target="_blank" className="social-link">
      <img src={icon} alt={provider} />
      <span>{hashtag}</span>
    </a>
  );
};

export default SocialLink;
