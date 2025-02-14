import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LayoutCustomer from "./layout/LayoutCustomer";
import HomePage from "./pages/customer/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutCustomer />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
