import React from "react";
import s from "./ErrorMessage.module.scss";
const ErrorMessage = ({ children }) => {
  return <p className={s["error"]}>{children}</p>;
};

export default ErrorMessage;
