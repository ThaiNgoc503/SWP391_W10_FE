import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LayoutCustomer from "./layout/LayoutCustomer";
import HomePageCus from "./pages/customer/HomePage";
import HomePage from "./pages/guess/HomePage";
import LayoutGuess from "./layout/LayoutGuess";
import AdvisoryHistory from "./pages/customer/AdvisoryHistory";
import ResultAdvisory from "./pages/customer/ResultAdvisory";
import ChildRecords from "./pages/customer/ChildRecords";
import AddNewChild from "./pages/customer/AddNewChild";
import AddRecords from "./pages/customer/AddRecords";
import ChartOfChild from "./pages/customer/ChartOfChild";
import BookingDoctor from "./pages/customer/BookingDoctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGuess />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/customer" element={<LayoutCustomer />}>
          <Route index element={<HomePageCus />} />
          <Route path="advisory" element={<AdvisoryHistory />} />
          <Route path="result-advisory" element={<ResultAdvisory />} />
          <Route path="child-records" element={<ChildRecords />} />
          <Route path="add-records" element={<AddRecords />} />
          <Route path="chart" element={<ChartOfChild />} />
          <Route path="addNewChild" element={<AddNewChild />} />
          <Route path="bookingDoctor" element={<BookingDoctor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
