import React from "react";
import { labelStyle, inputStyle } from "./styles";

const InputField = ({ label, placeholder, type = "text" }) => {
  const handleFocus = (e) => {
    e.target.style.borderColor = "#3498db";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#ced4da";
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputField;