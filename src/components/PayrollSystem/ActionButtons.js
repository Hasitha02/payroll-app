import React from "react";

const ActionButtons = () => {
  const buttons = [
    { label: "Edit", color: "#17a2b8" },
    { label: "Save", color: "#28a745" },
    { label: "Close", color: "#6c757d" }
  ];

  const buttonStyle = (color) => ({
    backgroundColor: color,
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    flex: 1,
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
      {buttons.map((button) => (
        <button
          key={button.label}
          style={buttonStyle(button.color)}
          onMouseOver={(e) => e.target.style.opacity = "0.8"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;