import React from "react";
import PriceBuilder from "../PriceBuilder/PriceBuilder";
import DesignBuilder from "../DesignBuilder/DesignBuilder";
import s from "./CertificateBuilderLayout.module.scss";
import SummaryBuilder from "../SummaryBuilder/SummaryBuilder";
import CertificateBuilderButton from "../CertificateBuilderButton/CertificateBuilderButton";
const CertificateBuilderLayout = () => {
  return (
    <div className={s["container"]}>
      <div
        className={`${s["container__design"]} ${s["container__with-padding"]}`}
      >
        <DesignBuilder />
      </div>
      <div
        className={`${s["container__price"]} ${s["container__with-padding"]}`}
      >
        <PriceBuilder />
      </div>
      <div className={s["container__price-wrapper"]}>
        <div
          className={`${s["container__summary"]} ${s["container__with-padding"]}`}
        >
          <SummaryBuilder />
        </div>
        <div
          className={`${s["container__button"]} ${s["container__with-padding"]}`}
        >
          <CertificateBuilderButton />
        </div>
      </div>
    </div>
  );
};

export default CertificateBuilderLayout;
