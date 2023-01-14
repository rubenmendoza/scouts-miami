import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Gallery = () => {
  return (
    <Layout>
      <h1>Gallery</h1>
    </Layout>
  );
};

export default Gallery;
export const Head: HeadFC = () => <Seo title="Gallery" />;
