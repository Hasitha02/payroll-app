import React from "react";
import { labelStyle, inputStyle } from "./styles";

const PersonalSection = () => {
  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Address:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Phone:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>NIC:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Gender:</label>
        <div style={{ display: "flex", gap: "20px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <input type="radio" name="gender" />
            Male
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <input type="radio" name="gender" />
            Female
          </label>
        </div>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={labelStyle}>Date of Birth:</label>
        <input 
          type="date" 
          style={{ 
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ced4da",
            fontSize: "14px",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
    </div>
  );
};

export default PersonalSection;