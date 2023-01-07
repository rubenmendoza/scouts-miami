import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const News = () => {
  return (
    <Layout>
      <h1>News</h1>
    </Layout>
  );
};

export default News;
export const Head: HeadFC = () => {
  return (
    <>
      <title>News</title>
      <meta name="description" content="Hello World" />
      <meta name="keywords" content="ello, orld" />
    </>
  );
};
