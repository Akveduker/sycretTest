import React, { useContext } from "react";
import { CertificateContext } from "context/CertificateContext";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";
import s from "./SummaryBuilder.module.scss";
import BaseSkeleton from "ui/skeleton/BaseSkeleton/BaseSkeleton";
import { cutFloat } from "utils/price/cutFloat";
const SummaryBuilder = () => {
  const isDataLoading = useCheckIsLoading();
  const [{ currentCertificate }] = useContext(CertificateContext);
  if (isDataLoading) {
    return <BaseSkeleton className={s["skeleton"]} />;
  }
  const { PRICE, SUMMA, DISCOUNT } = currentCertificate;

  return (
    <div className={s["container"]}>
      <p className={s["old"]}>
        <span className={s["old__price"]}>{cutFloat(PRICE)}</span>{" "}
        <span className={s["container__currency"]}>₽</span>
      </p>
      <div className={s["new"]}>
        <p className={s["new__price"]}>
          {cutFloat(SUMMA)} <span className={s["container__currency"]}>₽</span>
        </p>
        <p className={s["new__discount"]}>-{cutFloat(DISCOUNT)}%</p>
      </div>
    </div>
  );
};

export default SummaryBuilder;
