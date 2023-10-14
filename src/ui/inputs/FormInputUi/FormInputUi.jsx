import React from "react";
import s from "./FormInputUi.module.scss";
const FormInputUi = ({ className, ...props }) => {
  return <input {...props} className={`${s["input"]} ${className}`} />;
};

export default FormInputUi;
