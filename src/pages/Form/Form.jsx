import CertificatesForm from "components/Certificates/CertificatesForm/CertificatesForm";
import React from "react";
import s from "./Form.module.scss";
import CertificateCard from "components/Certificates/CertificateCard/CertificateCard";
import BackButton from "ui/buttons/BackButton/BackButton";
import MarginWrapper from "components/page/MarginWrapper/MarginWrapper";

const Form = () => {
  return (
    <MarginWrapper>
      <div className={s["page"]}>
        <h1 className={s["title"]}>Оформление</h1>
        <div className={s["container"]}>
          <div className={`${s["container__certificate"]}`}>
            <CertificateCard />
          </div>
          <div className={s["container__content"]}>
            <CertificatesForm />
          </div>
        </div>
        <div className={s["back-button"]}>
          <BackButton to={"/"}>Назад</BackButton>
        </div>
      </div>
    </MarginWrapper>
  );
};

export default Form;
