import { Link } from "gatsby";
import * as React from "react";

import "./styles.sass";

interface iProps {
  label: string;
  url: string;
}

const NavbarItem = ({ url, label }: iProps) => {
  return (
    <li className="navbar-item">
      <Link to={url} className="medium">
        {label}
      </Link>
    </li>
  );
};

export default NavbarItem;
