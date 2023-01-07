import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";

const links = [
  {
    text: "Responsive",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description: "media queries - Menu",
    color: "#E95800",
  },
  {
    text: "Add Pages",
    url: "https://www.gatsbyjs.com/docs/tutoria/",
    description: "media, evets, join-us, contact",
    color: "#E95800",
  },
  {
    text: "Add Contact form with captcha",
    url: "https://www.gatsbyjs.com/docs/tutori/",
    description: "captcha ",
    color: "#E95800",
  },
  {
    text: "Add Widgets",
    url: "https://www.gatsbyjs.com/docs/tuto/",
    description: "instagram, google calendar, twitter",
    color: "#E95800",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <Hero></Hero>
        <h2>To do</h2>
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <span>
                <a
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                >
                  {link.text}
                </a>

                <p>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Home Page</title>
      <meta name="description" content="Hello World" />
      <meta name="keywords" content="ello, orld" />
    </>
  );
};
