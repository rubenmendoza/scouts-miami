import { Link } from "gatsby";
import * as React from "react";

const navitems = [
  {
    url: "",
    name: "Home",
  },
  {
    url: "about-us",
    name: "About Us",
  },
  {
    url: "news",
    name: "News",
  },
  {
    url: "media",
    name: "Photos and Videos",
  },
  {
    url: "events",
    name: "Events",
  },
  {
    url: "join-us",
    name: "Join Us",
  },
  {
    url: "contact",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navitems.map((navitem) => (
          <li>
            <Link key={navitem.name} to={`/${navitem.url}`}>
              {navitem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
