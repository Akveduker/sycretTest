import { storageNames } from "constants/storage/storageNames";
import { CertificateContext } from "context/CertificateContext";
import { useContext } from "react";

export const useCheckIsCertificateChosen = () => {
  const [{ currentCertificate, certifcateDesign }] =
    useContext(CertificateContext);
  const json = localStorage.getItem(storageNames.certificateState);
  if (!currentCertificate || !certifcateDesign || !json) return false;
  return true;
};
