import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface iProps {
  title: string;
}

const Seo = ({ title }: iProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
