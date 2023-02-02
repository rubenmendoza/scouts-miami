import React from "react";
import "./styles.sass";

interface Props {
  action?: string;
  children: React.ReactNode;
  onSubmit: (data: FormData) => void;
}

const Form = ({ action, children, onSubmit }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    // focusing the first invalid field
    const firstInvalidField = formElement.querySelector(
      ":invalid"
    ) as HTMLInputElement;

    firstInvalidField?.focus();

    // submit the dataObject if isValid===true
    if (isValid) {
      const dataObject = new FormData(formElement);
      onSubmit(dataObject);
    }
  };

  return (
    <form action={action} onSubmit={handleSubmit} noValidate>
      <div>{children}</div>
    </form>
  );
};

export default Form;
