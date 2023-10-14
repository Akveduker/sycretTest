import { CertificateContext } from "context/CertificateContext";
import React, { useContext } from "react";
import s from "./DesignSwitch.module.scss";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";
const DesignSwitch = ({ banners }) => {
  const [{ certifcateDesign }, { setDesign }] = useContext(CertificateContext);
  const isDataLoading = useCheckIsLoading();
  const { Small, id } = banners;

  if (isDataLoading) return null;

  const active = certifcateDesign.id === id ? s["button--active"] : "";
  return (
    <button
      type="button"
      className={`${s["button"]} ${active}`}
      onClick={() => setDesign({ id })}
    >
      <Small />
    </button>
  );
};

export default DesignSwitch;
