import React from "react";
import { labelStyle, inputStyle } from "./styles";

const SalarySection = () => {
  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Basic Salary:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Fixed Allowance:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>PRA:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={labelStyle}>Incentive:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
    </div>
  );
};

export default SalarySection;