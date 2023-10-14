import React from "react";
import s from "./MarginWrapper.module.scss";
const MarginWrapper = ({ children }) => {
  return <div className={s["container"]}>{children}</div>;
};

export default MarginWrapper;
