import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Events = () => {
  return (
    <Layout>
      <h1>Events</h1>
    </Layout>
  );
};

export default Events;
export const Head: HeadFC = () => <Seo title="Events" />;
