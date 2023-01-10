import { HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutUs = () => {
  return (
    <Layout>
      <h1>About Us</h1>
    </Layout>
  );
};

export default AboutUs;
export const Head: HeadFC = () => <Seo title="About Us" />;
