import React from "react";
import { Link } from "react-router-dom";
import s from "./BackButton.module.scss";
const BackButton = ({ children, ...restProps }) => {
  return (
    <Link {...restProps} className={s["link"]}>
      {children}
    </Link>
  );
};

export default BackButton;
