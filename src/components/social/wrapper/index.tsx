import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SocialLink from "../link";
import "./styles.sass";

const SocialWrapper = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson(
        filter: { sociallinks: { elemMatch: { hashtag: { ne: null } } } }
      ) {
        nodes {
          sociallinks {
            hashtag
            icon
            provider
            url
          }
        }
      }
    }
  `);
  return (
    <nav>
      <ul className="social-list" role="list">
        {data.allDataJson.nodes[0].sociallinks.map(
          (sociallink: {
            url: string;
            hashtag: string;
            icon: string;
            provider: string;
          }) => (
            <li key={sociallink.provider.replaceAll(" ", "").toLowerCase()}>
              <SocialLink
                url={sociallink.url}
                hashtag={sociallink.hashtag}
                icon={sociallink.icon}
                provider={sociallink.provider}
              />
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default SocialWrapper;
