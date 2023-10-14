import React from "react";
import ForwardButton from "ui/buttons/ForwardButton/ForwardButton";
import s from "./CertificateBuilderButton.module.scss";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";
import BaseSkeleton from "ui/skeleton/BaseSkeleton/BaseSkeleton";
import { useCertificateNavigation } from "hooks/certificateBuilderButton/useCertificateNavigation";
const CertificateBuilderButton = () => {
  const isDataLoading = useCheckIsLoading();
  const onClick = useCertificateNavigation();
  return (
    <div className={s["container"]}>
      {isDataLoading ? (
        <BaseSkeleton className={s["container__skeleton"]} />
      ) : (
        <ForwardButton type={"button"} onClick={onClick}>
          Оплатить
        </ForwardButton>
      )}
    </div>
  );
};

export default CertificateBuilderButton;
