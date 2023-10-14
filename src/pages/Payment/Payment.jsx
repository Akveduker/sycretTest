import { storageNames } from "constants/storage/storageNames";
import React from "react";
import Loader from "ui/loader/Loader/Loader";
import s from "./Payment.module.scss";
import { useSendPayment } from "hooks/payment/useSendPayment";
const Payment = () => {
  const { isLoading, isError, data } = useSendPayment();
  return (
    <div className={s["container"]}>
      <div className={s["loader"]}>
        <Loader />
      </div>
      <h1>Идет оплата...</h1>
      {!isLoading && !isError && <p>Данные доставлены</p>}
      {isError && <p>Ошибка</p>}
    </div>
  );
};

export default Payment;
