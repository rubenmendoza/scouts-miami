import React from "react";
import { FormEvent, useState } from "react";
import "./styles.sass";

interface Props extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  type: string;
  errorText?: string;
}

const InputField = React.memo(
  ({ label, name, type, placeholder, errorText, ...rest }: Props) => {
    const [validationMessage, setValidationMessage] = useState<string>("");

    const onInvalid = (e: FormEvent) => {
      const target = e.target as HTMLInputElement;
      setValidationMessage(target.validationMessage);
    };

    const onBlur = (e: FormEvent) => {
      const target = e.target as HTMLInputElement;

      if (!!validationMessage) {
        setValidationMessage(target.validationMessage);
      }
    };

    return (
      <span className="input-wrapper">
        <label htmlFor="">{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onInvalid={onInvalid}
          onBlur={onBlur}
          {...rest}
        />
        {!!validationMessage && (
          <div className="input-error">{errorText || validationMessage}</div>
        )}
      </span>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
export type { Props };
