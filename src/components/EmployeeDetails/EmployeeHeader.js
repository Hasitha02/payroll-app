import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import { topSectionStyle, labelStyle, inputStyle } from "./styles";

const EmployeeHeader = () => {
  return (
    <div style={topSectionStyle}>
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={labelStyle}>Employee No:</label>
          <input 
            type="text" 
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = "#3498db"}
            onBlur={(e) => e.target.style.borderColor = "#ced4da"}
          />
        </div>
        <div>
          <label style={labelStyle}>Employee Name:</label>
          <input 
            type="text" 
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = "#3498db"}
            onBlur={(e) => e.target.style.borderColor = "#ced4da"}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginLeft: "30px" }}>
        <ProfilePhoto />
      </div>
    </div>
  );
};

export default EmployeeHeader;