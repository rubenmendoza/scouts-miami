import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import NavbarItem from "../link";
import "./styles.sass";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson(filter: { items: { elemMatch: { icon: { ne: null } } } }) {
        nodes {
          items {
            icon
            label
            url
          }
        }
      }
    }
  `);

  return (
    <nav className="navbar-wrapper">
      <ul role="list">
        {data.allDataJson.nodes[0].items.map(
          (navitem: { url: string; icon: string; label: string }) => (
            <NavbarItem
              url={navitem.url}
              label={navitem.label}
              icon={navitem.icon}
              key={navitem.label.replaceAll(" ", "").toLowerCase()}
            />
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
