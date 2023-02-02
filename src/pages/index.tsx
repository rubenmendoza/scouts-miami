import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Seo from "../components/seo";

const links = [
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
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
