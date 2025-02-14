import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LayoutCustomer from "./layout/LayoutCustomer";
import HomePage from "./pages/guess/HomePage";
import LayoutGuess from "./layout/LayoutGuess";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGuess />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/customer" element={<LayoutCustomer />}>
          <Route index element={<HomePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
