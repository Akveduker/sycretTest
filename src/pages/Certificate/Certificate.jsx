import React, { useContext } from "react";
import { CertificateContext } from "context/CertificateContext";
import s from "./Certificate.module.scss";
import CertificateCard from "components/Certificates/CertificateCard/CertificateCard";
import CertificatesBuilder from "components/Certificates/CertificatesBuilder/CertificateBuilderLayout/CertificateBuilderLayout";
import BaseSkeleton from "ui/skeleton/BaseSkeleton/BaseSkeleton";
import MarginWrapper from "components/page/MarginWrapper/MarginWrapper";
const Certificate = () => {
  const [{ certificateFetchState }] = useContext(CertificateContext);
  const { isLoading } = certificateFetchState;
  return (
    <MarginWrapper>
      <div>
        <div className={s["title"]}>
          {isLoading ? (
            <BaseSkeleton className={s["title__skeleton"]} />
          ) : (
            <h1>Подарочный сертификат</h1>
          )}
        </div>
        <div className={s["container"]}>
          <div className={s["container__certificate"]}>
            <CertificateCard />
          </div>
          <div className={s["container__content"]}>
            <CertificatesBuilder />
          </div>
        </div>
      </div>
    </MarginWrapper>
  );
};

export default Certificate;
