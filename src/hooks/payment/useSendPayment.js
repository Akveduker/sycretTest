import { buyCertificate } from "api/api";
import { storageNames } from "constants/storage/storageNames";
import { useFetchData } from "hooks/fetch/useFetchData";
import { useEffect, useMemo } from "react";
import { createPaymentBody } from "utils/payment/createPaymentBody";

export const useSendPayment = () => {
  const [state, sendData] = useFetchData(buyCertificate);
  const { isLoading, data, isError } = state;
  useEffect(() => {
    const controller = new AbortController();
    sendData(createPaymentBody(), { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);
  useMemo(() => {
    if (!isLoading && !isError && data) {
      localStorage.clear(storageNames.certificateState);
      localStorage.clear(storageNames.userData);
    }
  }, [isLoading, data, isError]);
  return state;
};
