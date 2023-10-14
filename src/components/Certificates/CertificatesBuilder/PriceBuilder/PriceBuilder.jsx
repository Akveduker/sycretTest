import { CertificateContext } from "context/CertificateContext";
import React, { useContext } from "react";
import BaseSkeleton from "ui/skeleton/BaseSkeleton/BaseSkeleton";
import s from "./PriceBuilder.module.scss";
import PriceSwitch from "ui/switch/PriceSwitch/PriceSwitch";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";

const PriceBuilder = () => {
  const [{ certificateFetchState }] = useContext(CertificateContext);
  const { data } = certificateFetchState;
  const isDataLoading = useCheckIsLoading();
  return (
    <div className={s["container"]}>
      <div className={s["title"]}>
        {isDataLoading ? (
          <BaseSkeleton className={s["title--skeleton"]} />
        ) : (
          <h3>Выберите желаемую сумму сертификата</h3>
        )}
      </div>
      <div className={s["list"]}>
        {isDataLoading ? (
          <BaseSkeleton className={s["list--skeleton"]} />
        ) : (
          <div className={s["list__container"]}>
            {data.map((certificate) => {
              return (
                <div key={certificate["ID"]} className={s["list__item"]}>
                  <PriceSwitch certificate={certificate} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceBuilder;
