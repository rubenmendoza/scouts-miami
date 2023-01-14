import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import NavbarItem from "../../navbar/link";
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
  const [isActive, setActive] = React.useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <aside className={isActive ? "active" : ""}>
        <div className="header">
          <a href="#" onClick={toggleClass}>
            <img
              src={`${__dirname}static/images/icon-close.svg`}
              alt=""
              width={32}
              height={32}
            />
          </a>
        </div>
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

      <a href="#" onClick={toggleClass}>
        <img
          src={`${__dirname}static/images/icon-menu.svg`}
          alt=""
          width={32}
          height={32}
        />
      </a>
    </>
  );
};

export default Nav;
