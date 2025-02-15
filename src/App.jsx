import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LayoutCustomer from "./layout/LayoutCustomer";
import HomePage from "./pages/guess/HomePage";
import HomePage2 from "./pages/customer/HomePage";
import LayoutGuess from "./layout/LayoutGuess";
import AdvisoryHistory from "./pages/customer/AdvisoryHistory";
import ResultAdvisory from "./pages/customer/ResultAdvisory";
import ChildRecords from "./pages/customer/ChildRecords";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGuess />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/customer" element={<LayoutCustomer />}>
          <Route index element={<HomePage2 />} />
          <Route path="advisory" element={<AdvisoryHistory />} />
          <Route path="result-advisory" element={<ResultAdvisory />} />
          <Route path="child-records" element={<ChildRecords />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
