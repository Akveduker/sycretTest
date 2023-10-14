import { routesNames } from "constants/router/routsNames";
import { storageNames } from "constants/storage/storageNames";
import { CertificateContext } from "context/CertificateContext";
import { useCheckIsLoading } from "hooks/certificateContext/useCheckIsLoading";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const useCertificateNavigation = () => {
  const isDataLoading = useCheckIsLoading();
  const [{ certificateFetchState, ...state }] = useContext(CertificateContext);
  const navigate = useNavigate();
  const onClick = () => {
    if (!isDataLoading) {
      localStorage.setItem(
        storageNames.certificateState,
        JSON.stringify(state)
      );
      navigate(`${routesNames.form}`);
    }
  };
  return onClick;
};
