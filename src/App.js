import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PayrollSystem from "./pages/PayrollSystem"; // your existing file
import EmployeeDetails from "./pages/EmployeeDetails"; // your existing file
import PayrollProcessing from "./pages/PayrollProcessing"; // the one we just built

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payroll" element={<PayrollSystem />} />
        <Route path="/employee" element={<EmployeeDetails />} />
        <Route path="/processing" element={<PayrollProcessing />} />
      </Routes>
    </Router>
  );
};

export default App;
