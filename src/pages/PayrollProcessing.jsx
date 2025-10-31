import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PayrollProcessing = () => {
  const [activeTab, setActiveTab] = useState("ETF");
  const navigate = useNavigate();

  const thStyle = {
    padding: "8px",
    border: "1px solid #ddd",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid #ddd",
  };

  const inputStyle = {
    marginLeft: "10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const btnSave = {
    backgroundColor: "#2ecc71",
    color: "#fff",
    padding: "8px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const btnClose = {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "8px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const renderTable = () => {
    return (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          border: "1px solid #ccc",
        }}
      >
        <thead style={{ backgroundColor: "#f8f8f8" }}>
          <tr>
            <th style={thStyle}>EPF No</th>
            <th style={thStyle}>Emp Name</th>
            {activeTab === "ETF" ? (
              <th style={thStyle}>No. Days</th>
            ) : (
              <th style={thStyle}>Amount (Rs)</th>
            )}
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((i) => (
            <tr key={i} style={{ textAlign: "center" }}>
              <td style={tdStyle}>{1000 + i}</td>
              <td style={tdStyle}>Employee {i}</td>
              <td style={tdStyle}>---</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6873a2ff 0%, #ccccccff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
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

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Payroll Processing
        </h2>

        {/* Year & Month inputs */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <label>Year</label>
            <input type="text" placeholder="Enter Year" style={inputStyle} />
          </div>
          <div>
            <label>Month</label>
            <input type="text" placeholder="Enter Month" style={inputStyle} />
          </div>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: "flex", marginTop: "20px" }}>
          {["ETF", "EPF Company", "EPF Employee"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                backgroundColor:
                  activeTab === tab ? "#3498db" : "rgba(255,255,255,0.9)",
                color: activeTab === tab ? "#fff" : "#000",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table Section */}
        {renderTable()}

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <button style={btnSave}>Save</button>
          <button style={btnClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PayrollProcessing;
