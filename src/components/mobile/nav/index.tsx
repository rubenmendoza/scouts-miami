import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import NavbarItem from "../../navbar-item";
import "./styles.sass";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
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
    <aside>
      <nav>
        <ul>
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
    </aside>
  );
};

export default Nav;
