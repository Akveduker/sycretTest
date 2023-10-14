import { getCertificates } from "api/api";
import { useFetchData } from "hooks/fetch/useFetchData";
import { useEffect, useReducer } from "react";
import { certificateReducer } from "utils/reducers/reducers/certificateReducer";
import { useCreateCertificateActions } from "./useCreateCertificateActions";
import { certificateDesignArr } from "constants/certificate/design/certificateDesign";
import { getCertificateInitalState } from "utils/storage/getCertificateInitalState";

export const useCreateCertificateContext = () => {
  const [fetchState, getData] = useFetchData(getCertificates);
  const { isLoading, data } = fetchState;
  const [state, dispatch] = useReducer(
    certificateReducer,
    getCertificateInitalState({
      certifcateDesign: null,
      currentCertificate: null,
      certificateFetchState: fetchState,
    })
  );
  const actions = useCreateCertificateActions(dispatch);
  const { setFetchedData, setDesign, setCertificate } = actions;
  useEffect(() => {
    const controller = new AbortController();
    getData({ signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);
  useEffect(() => {
    setFetchedData({
      ...fetchState,
      data: Array.isArray(data) ? data.reverse() : null,
    });
    if (
      !isLoading &&
      data &&
      !state.certifcateDesign &&
      !state.currentCertificate
    ) {
      setDesign({
        id: certificateDesignArr[0]["id"],
      });
      setCertificate(data[0]);
    }
  }, [isLoading, data]);
  return [state, actions];
};
