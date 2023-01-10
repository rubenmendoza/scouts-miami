import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const News = () => {
  return (
    <Layout>
      <h1>News</h1>
    </Layout>
  );
};

export default News;
export const Head: HeadFC = () => <Seo title="News" />;
