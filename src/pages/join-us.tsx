import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const JoinUs = () => {
  return (
    <Layout>
      <h1>Join Us</h1>
    </Layout>
  );
};

export default JoinUs;
export const Head: HeadFC = () => <Seo title="Join Us" />;
