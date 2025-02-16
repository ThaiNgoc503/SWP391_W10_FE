import React from "react";
import Header from "../components/doctor/Header";
import { Outlet } from "react-router";

const LayoutDoctor = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutDoctor;
