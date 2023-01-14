import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <h1> Contact Us</h1>
      <form name="contact" method="post">
        <fieldset>
          <span>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Name" required />
          </span>
          <span>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Email" required />
          </span>
          <span>
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text" placeholder="Email" required />
          </span>
          <span>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </span>
          <button>Send</button>
        </fieldset>
      </form>
    </Layout>
  );
};

export default Contact;
export const Head: HeadFC = () => <Seo title="Contact Us" />;
