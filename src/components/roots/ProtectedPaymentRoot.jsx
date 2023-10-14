import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { checkIsStorageDataCorrect } from "utils/payment/checkIsStorageDataCorrect";

const ProtectedPaymentRoot = () => {
  const isStorageDataCorrect = checkIsStorageDataCorrect();
  return isStorageDataCorrect ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedPaymentRoot;
