import React from "react";
import Header from "../components/guess/Header";
import HomePage from "../pages/guess/HomePage";
import { Outlet } from "react-router";

const LayoutGuess = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutGuess;
