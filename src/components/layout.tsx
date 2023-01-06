import { PageProps } from "gatsby";
import * as React from "react";
import Navbar from "./navbar";

export interface props {
  children?: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <>
      <header>
        <p>Logo</p>
        <Navbar />
      </header>
      <article>
        <h1></h1>
        {children}
      </article>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Layout;
