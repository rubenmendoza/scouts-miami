import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Navbar from "../navbar/wrapper";
import NavMobile from "../navbar/mobile";
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
    <div className="layout">
      <header>
        <div className="top">
          <small>Cub Scouts Miami Lakes / PSG Pack 247</small>
        </div>
        <div className="header">
          {breakpoints.sm ? <NavMobile /> : null}
          {breakpoints.sm ? (
            <div className="center">
              <h2>Cub Scouts Troop 247</h2>
            </div>
          ) : null}
          <StaticImage
            alt="Cub Scouts Troop 247 Logo"
            src="../../images/logo.svg"
            className="logowidth"
          />
          {breakpoints.sm ? null : <Navbar />}
        </div>
      </header>
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
