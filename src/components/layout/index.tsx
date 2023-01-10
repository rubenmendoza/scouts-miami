import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Navbar from "../navbar";
import Nav from "../mobile/nav";
import "../reset.sass";
import "../theme.sass";
import "./styles.sass";

export interface props {
  children?: React.ReactNode;
}

const Layout = ({ children }: props) => {
  const breakpoints = useBreakpoint();
  return (
    <>
      <div className="top centered">
        <div className="container">
          <small>Cub Scouts Miami Lakes / PSG Pack 247</small>
        </div>
      </div>
      <header className="centered">
        <div className="container row">
          {breakpoints.sm ? <Nav /> : null}
          <StaticImage
            alt="Pack 247 Logo"
            src="../../images/logo.svg"
            className="logowidth"
          />
          {breakpoints.sm ? null : <Navbar />}
        </div>
      </header>
      <article className="centered">
        <div className="container">{children}</div>
      </article>
      <footer className="centered">
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Layout;
