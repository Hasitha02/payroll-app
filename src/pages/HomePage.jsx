// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#1c3749ff",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };

  const buttonHover = {
    transform: "scale(1.05)",
    backgroundColor: "#2980b9",
  };

  const [hovered, setHovered] = React.useState(null);

  const buttons = [
    { label: "Payroll System", path: "/payroll" },
    { label: "Employee Details", path: "/employee" },
    { label: "Payroll Processing", path: "/processing" },
  ];

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6873a2ff 0%, #987171ff 100%)",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "40px", fontSize: "36px" }}>
        Payroll Management System
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "250px",
        }}
      >
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => navigate(btn.path)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...buttonStyle,
              ...(hovered === i ? buttonHover : {}),
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
