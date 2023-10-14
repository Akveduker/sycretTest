import { CertificateContext } from "context/CertificateContext";
import { useContext } from "react";

export const useCheckIsLoading = () => {
  const [{ certificateFetchState, certifcateDesign, currentCertificate }] =
    useContext(CertificateContext);
  const { isLoading, data } = certificateFetchState;
  if (!certifcateDesign || isLoading || !data || !currentCertificate) {
    return true;
  }
  return false;
};
