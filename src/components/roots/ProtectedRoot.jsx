import { useCheckIsCertificateChosen } from "hooks/certificateContext/useCheckIsCertificateChosen";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoot = () => {
  const isCertificateChosen = useCheckIsCertificateChosen();
  return isCertificateChosen ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoot;
