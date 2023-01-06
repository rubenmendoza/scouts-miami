import { Link } from "gatsby";
import * as React from "react";

import "./navbar-item.sass";

interface iProps {
  label: string;
  url: string;
}

const NavbarItem = ({ url, label }: iProps) => {
  return (
    <li>
      <Link to={url}>{label}</Link>
    </li>
  );
};

export default NavbarItem;
