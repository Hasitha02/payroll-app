import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayrollSettings from "./pages/PayrollSystem";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PayrollSettings />} />
        <Route path="/employee" element={<EmployeeDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
