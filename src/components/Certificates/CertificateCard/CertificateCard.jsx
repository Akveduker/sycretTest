import { CertificateContext } from "context/CertificateContext";
import React, { useContext } from "react";
import s from "./CertificateCard.module.scss";
import BaseSkeleton from "ui/skeleton/BaseSkeleton/BaseSkeleton";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";
import { cutFloat } from "utils/price/cutFloat";
import { certificateDesignArr } from "constants/certificate/design/certificateDesign";
const CertificateCard = () => {
  const [{ certifcateDesign, currentCertificate }] =
    useContext(CertificateContext);
  const isDataLoading = useCheckIsLoading();

  if (isDataLoading) {
    return <BaseSkeleton className={s["card-skeleton"]} />;
  }
  const price = currentCertificate["PRICE"];
  const { id } = certifcateDesign;
  const Background = certificateDesignArr.find((item) => item.id === id)["Big"];
  return (
    <div className={s["container"]}>
      <p className={s["container__title"]}>SYCRET</p>
      <div className={s["container__bg"]}>
        <Background />
      </div>
      <p className={s["container__price"]}>{cutFloat(price)} ₽</p>
    </div>
  );
};

export default CertificateCard;
