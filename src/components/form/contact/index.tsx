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

  const onChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit: IOnSubmit<IContactFormData> = async (
    data: IContactFormData
  ) => {
    const apiURL = "https://scouttroop247.com/api";
    const message = `
    Message received from <strong>${data.name}</strong>.<br /> 
    Email address is <strong>${data.email}</strong>. <br />
    Message:<br />
    ${data.message}
    `;
    await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        email: data.email,
        subject: data.subject,
        message: message,
      }),
    }).then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === 200) {
        alert("Message Sent!");
      } else {
        alert("Message failed to send");
      }
    });
    console.log(message);
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
          onChange={onChange}
        />
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
          label="Your Email"
          required
          onChange={onChange}
        />
        <InputField
          id="subject"
          name="subject"
          type="text"
          placeholder="Comment"
          label="Subject"
          required
          onChange={onChange}
        />
        <span>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={onChange}
            value={formData.message}
          ></textarea>
        </span>
        <button>Send</button>
      </fieldset>
    </Form>
  );
};

export default ContactForm;
