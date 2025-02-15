import React from "react";
import Header from "../components/customer/Header";
import HomePage from "../pages/customer/HomePage";
import { Outlet } from "react-router";

const LayoutCustomer = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutCustomer;
