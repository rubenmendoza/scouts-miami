import { Link } from "gatsby";
import * as React from "react";

import "./styles.sass";

interface iProps {
  icon: string;
  label: string;
  url: string;
}

const NavbarItem = ({ url, label, icon }: iProps) => {
  icon = `${__dirname}static/images/${icon}.svg`;
  return (
    <li className="navbar-item">
      <Link to={url}>
        <img src={icon} alt={label} />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavbarItem;
