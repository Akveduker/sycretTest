import React from "react";
import { Outlet } from "react-router-dom";

import WithCertificateContext from "components/providers/WithCertificateContext";

const Home = () => {
  return (
    <div>
      <WithCertificateContext>
        <Outlet />
      </WithCertificateContext>
    </div>
  );
};

export default Home;
