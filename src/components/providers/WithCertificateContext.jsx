import { CertificateContext } from "context/CertificateContext";
import { useCreateCertificateContext } from "hooks/certificateContext/useCreateCertificateContext";
import React from "react";

const WithCertificateContext = ({ children }) => {
  const state = useCreateCertificateContext();

  return (
    <CertificateContext.Provider value={state}>
      {children}
    </CertificateContext.Provider>
  );
};

export default WithCertificateContext;
