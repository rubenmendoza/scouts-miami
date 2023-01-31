import React from "react";
import InputField from "../input";
import Form from "../";

const ContactForm = () => {
  const onSubmit = (data: FormData) => {
    const emaildata = Object.fromEntries(data.entries());
    const emailContent = `
    Message received from <strong>${emaildata.name}</strong>. 
    Their email address is <strong>${emaildata.email}</strong>. <br />
    They'd like to know about...
    ${emaildata.message}
    `;
    console.log(emaildata);
  };
  return (
    <Form onSubmit={onSubmit}>
      <h4>Contact Form</h4>
      <fieldset>
        <InputField
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          label="Your Full Name"
          required
        />
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
          label="Your Email"
          required
        />
        <InputField
          id="subject"
          name="subject"
          type="text"
          placeholder="Comment"
          label="Subject"
          required
        />
        <span>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </span>
        <button>Send</button>
      </fieldset>
    </Form>
  );
};

export default ContactForm;
