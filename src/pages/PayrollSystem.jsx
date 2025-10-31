import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/PayrollSystem/InputField";
import ActionButtons from "../components/PayrollSystem/ActionButtons";
import {
  containerStyle,
  cardStyle,
  headerStyle,
  dividerStyle,
} from "../components/PayrollSystem/styles";

const PayrollSystem = () => {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#5f859fff",
            color: "#fff",
            padding: "6px 14px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          ← Back to Home
        </button>

        <h2 style={headerStyle}>Payroll System</h2>

        {/* EPF and ETF Section */}
        <InputField
          label="EPF Employee Contribution"
          placeholder="Enter employee EPF %"
        />
        <InputField
          label="EPF Company Contribution"
          placeholder="Enter company EPF %"
        />
        <InputField label="ETF Rate" placeholder="Enter ETF rate %" />

        <hr style={dividerStyle} />

        {/* Processing and OT Section */}
        <InputField label="Current Processing Year" placeholder="YYYY" />
        <InputField label="Current Processing Month" placeholder="MM" />
        <InputField label="OT Rate" placeholder="Enter OT rate per hour" />

        {/* Action Buttons */}
        <ActionButtons />
      </div>
    </div>
  );
};

export default PayrollSystem;
