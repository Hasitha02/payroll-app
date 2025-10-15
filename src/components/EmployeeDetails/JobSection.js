import React from "react";
import { labelStyle, inputStyle } from "./styles";

const JobSection = () => {
  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Employee Type:</label>
        <div style={{ display: "flex", gap: "20px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <input type="radio" name="type" />
            Permanent
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <input type="radio" name="type" />
            Contract
          </label>
        </div>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Department:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Post:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>EPF No:</label>
        <input 
          type="text" 
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#3498db"}
          onBlur={(e) => e.target.style.borderColor = "#ced4da"}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={labelStyle}>EPF/ETF Active:</label>
        <div style={{ display: "flex", gap: "20px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <input type="radio" name="epfStatus" />
            Yes
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <input type="radio" name="epfStatus" />
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default JobSection;