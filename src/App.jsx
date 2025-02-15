import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LayoutCustomer from "./layout/LayoutCustomer";
import HomePageCus  from "./pages/customer/HomePage";
import HomePage from "./pages/guess/HomePage";
import LayoutGuess from "./layout/LayoutGuess";
import AddNewChild from "./pages/customer/AddNewChild";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGuess />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/customer" element={<LayoutCustomer />}>
          <Route index element={<HomePageCus />} />
          <Route path="addNewChild" element={<AddNewChild />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
