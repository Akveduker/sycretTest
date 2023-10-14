import React from "react";
import s from "./ForwardButton.module.scss";
const ForwardButton = ({ children, ...otherProps }) => {
  return (
    <button className={s["button"]} {...otherProps}>
      {children}
    </button>
  );
};

export default ForwardButton;
