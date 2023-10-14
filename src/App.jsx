import React from "react";
import "styles/styles.scss";
import { Route, Routes } from "react-router-dom";
import ProtectedRoot from "components/roots/ProtectedRoot";
import Home from "pages/Home/Home";
import Certificate from "pages/Certificate/Certificate";
import Form from "pages/Form/Form";
import Payment from "pages/Payment/Payment";
import { routesNames } from "constants/router/routsNames";
import ProtectedPaymentRoot from "components/roots/ProtectedPaymentRoot";

const App = () => {
  const { form, payment, indexRoot } = routesNames;
  return (
    <Routes>
      <Route path={"/"} element={<Home />}>
        <Route path={"/"} element={<Certificate />} />
        <Route path={"/"} element={<ProtectedRoot />}>
          <Route path={form} element={<Form />} />
          <Route path={"/"} element={<ProtectedPaymentRoot />}>
            <Route path={payment} element={<Payment />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
