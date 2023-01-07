import * as React from "react";
import NavbarItem from "../navbar-item";

import "./styles.sass";

const navitems = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/about-us",
    label: "About Us",
  },
  {
    url: "/news",
    label: "News",
  },
  {
    url: "/media",
    label: "Photos and Videos",
  },
  {
    url: "/events",
    label: "Events",
  },
  {
    url: "/join-us",
    label: "Join Us",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navitems.map((navitem) => (
          <NavbarItem
            url={navitem.url}
            label={navitem.label}
            key={navitem.label.replaceAll(" ", "").toLowerCase()}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
