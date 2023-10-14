import React from "react";
import s from "./BaseSkeleton.module.scss";
const BaseSkeleton = ({ className }) => {
  return (
    <div className={`${s["skeleton"]} ${className}`}>
      <div className={s["skeleton__animation"]}></div>
    </div>
  );
};

export default BaseSkeleton;
