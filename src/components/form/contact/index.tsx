import React, { FormEvent, useState } from "react";
import InputField from "../input";
import Form from "../";

interface IContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface IOnSubmit<T> {
  (data: T): void;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // HTMLInputElement

  const onChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit: IOnSubmit<IContactFormData> = async (
    data: IContactFormData
  ) => {
    const apiURL = "https://scouttroop247.com/api";
    const message = `
    Message received from <strong>${formData.name}</strong>.<br /> 
    Email address is <strong>${formData.email}</strong>. <br />
    Message:<br />
    ${formData.message}
    `;
    await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: formData.email,
        subject: formData.subject,
        message: message,
      }),
    }).then(async (res) => {
      const resData = await res;
      if (resData.status === 200) {
        alert("Message Sent!");
      } else {
        alert("Message failed to send");
      }
    });
    console.log(formData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h4>Contact Form</h4>
      <fieldset>
        <InputField
          id="name"
          name="name"
          type="text"
          placeholder="Robert Baden-Powell"
          label="Your Full Name"
          errorText="Your name should only contain letters"
          required
          onChange={onChange}
        />
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="youremail@gmail.com"
          label="Your Email"
          errorText="Your email must have a proper format"
          required
          onChange={onChange}
        />
        <InputField
          id="subject"
          name="subject"
          type="text"
          placeholder="Comments"
          label="Subject"
          errorText="Please mate, only numbers and letters, e.g. Enquiry"
          required
          onChange={onChange}
        />
        <span className="input-wrapper">
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            onChange={onChange}
            value={formData.message}
          ></textarea>
        </span>
        <div
          className="g-recaptcha"
          data-sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY}
        />
        <span className="input-wrapper">
          <button className="button">Send</button>
        </span>
      </fieldset>
    </Form>
  );
};

export default ContactForm;
