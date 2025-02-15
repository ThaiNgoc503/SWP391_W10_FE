import React from "react";
import Header from "../components/customer/Header";
import HomePageCus from "../pages/customer/HomePage";
import { Outlet } from "react-router";

const LayoutCustomer = () => {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <Outlet />
    </div>
  );
};

export default LayoutCustomer;
