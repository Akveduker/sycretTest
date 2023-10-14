import React, { cloneElement, useState } from "react";
import { useNameFormActions } from "hooks/formInput/useNameFormActions";
import ErrorMessage from "ui/message/ErrorMessage/ErrorMessage";
import s from "./FormInput.module.scss";

const FormInput = ({ state, actions, children, title }) => {
  const { validation } = state;
  const { setValue, validateValue } = useNameFormActions(state.name, actions);
  const [inputValue, setInputValue] = useState(state.value);
  return (
    <label className={s["container"]}>
      <h3 className={s["container__title"]}>{title}</h3>
      {cloneElement(children, {
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value),
        onBlur: () => {
          setValue(inputValue);
          validateValue(inputValue);
        },
        className: typeof validation === "object" ? s["input--error"] : "",
      })}
      {typeof validation === "object" && (
        <div className={s["container__error"]}>
          <ErrorMessage>{state.validation.message}</ErrorMessage>
        </div>
      )}
    </label>
  );
};

export default FormInput;
