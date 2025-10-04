import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayrollSettings from "./pages/PayrollSystem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PayrollSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
