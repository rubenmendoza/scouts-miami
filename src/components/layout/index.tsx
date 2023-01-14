import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Navbar from "../navbar/wrapper";
import Nav from "../mobile/nav";
import Footer from "../footer";
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
        <div className="container row menu-mobile">
          {breakpoints.sm ? <Nav /> : null}
          {breakpoints.sm ? <h2>Pack 247</h2> : null}
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
      <Footer />
    </>
  );
};

export default Layout;
