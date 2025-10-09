import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeButton = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#8e44ad",
    color: "#fff",
    padding: "12px 30px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(142, 68, 173, 0.3)",
  };

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <button
        onClick={() => navigate("/employee")}
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.opacity = "0.8"}
        onMouseOut={(e) => e.target.style.opacity = "1"}
      >
        Employee
      </button>
    </div>
  );
};

export default EmployeeButton;