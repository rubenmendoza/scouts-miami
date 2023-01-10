import * as React from "react";
import NavbarItem from "../navbar-item";

import "./styles.sass";

const navitems = [
  {
    url: "/",
    label: "Home",
    icon: "icon-home",
  },
  {
    url: "/about-us",
    label: "About Us",
    icon: "icon-247",
  },
  {
    url: "/news",
    label: "News",
    icon: "icon-article",
  },
  {
    url: "/media",
    label: "Gallery",
    icon: "icon-camera",
  },
  {
    url: "/events",
    label: "Events",
    icon: "icon-event",
  },
  {
    url: "/join-us",
    label: "Join Us",
    icon: "icon-scouts",
  },
  {
    url: "/contact",
    label: "Contact",
    icon: "icon-message",
  },
];

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          {navitems.map((navitem) => (
            <NavbarItem
              url={navitem.url}
              icon={navitem.icon}
              label={navitem.label}
              key={navitem.label.replaceAll(" ", "").toLowerCase()}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
