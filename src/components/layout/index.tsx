import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../navbar";
import "../reset.sass";
import "../theme.sass";
import "./styles.sass";

export interface props {
  children?: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div className="container">
      <header>
        <StaticImage
          alt="Pack 247 Logo"
          src="../../images/logo.svg"
          className="logowidth"
        />
        <Navbar />
      </header>
      <article>
        <h1></h1>
        {children}
      </article>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
