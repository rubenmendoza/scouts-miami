import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <h1> Contact Us</h1>
    </Layout>
  );
};

export default Contact;
export const Head: HeadFC = () => <Seo title="Contact Us" />;
