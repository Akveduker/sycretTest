import { CertificateContext } from "context/CertificateContext";
import React, { useContext } from "react";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";
import s from "./PriceSwitch.module.scss";
import { cutFloat } from "utils/price/cutFloat";
const PriceSwitch = ({ certificate }) => {
  const [{ currentCertificate }, { setCertificate }] =
    useContext(CertificateContext);

  const isDataLoading = useCheckIsLoading();
  if (isDataLoading) return null;
  const { PRICE, ID } = certificate;
  const active = currentCertificate["ID"] === ID ? s["button--active"] : "";

  const onClick = () => {
    setCertificate(certificate);
  };
  return (
    <button
      type="button"
      className={`${s["button"]} ${active}`}
      onClick={onClick}
    >
      {cutFloat(PRICE)} ₽
    </button>
  );
};

export default PriceSwitch;
