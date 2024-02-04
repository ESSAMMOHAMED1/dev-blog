import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <maim>
      AuthLayout
      <Outlet />
    </maim>
  );
};

export default AuthLayout;
