import React from "react";

const ActionButtons = () => {
  const buttons = ["New", "Edit", "Delete", "Save", "Reset", "Close"];

  const getButtonStyle = (btn) => {
    let background = "#ffc107";
    let color = "#212529";

    if (btn === "Save") {
      background = "#28a745";
      color = "#fff";
    } else if (btn === "Delete") {
      background = "#dc3545";
      color = "#fff";
    } else if (btn === "Close") {
      background = "#6c757d";
      color = "#fff";
    } else if (btn === "New") {
      background = "#0156b2ff";
      color = "#fff";
    } else if (btn === "Edit") {
      background = "#106775ff";
      color = "#fff";
    }

    return {
      padding: "10px 16px",
      borderRadius: "6px",
      border: "1px solid #6c757d",
      background,
      color,
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      flex: 1,
      transition: "all 0.3s ease",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    };
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    }}>
      {buttons.map((btn) => (
        <button
          key={btn}
          style={getButtonStyle(btn)}
          onMouseOver={(e) => e.target.style.opacity = "0.8"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;