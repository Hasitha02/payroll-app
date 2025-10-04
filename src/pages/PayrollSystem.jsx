import React from "react";

const PayrollSystem = () => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      backgroundImage: "url('https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80&blur=50')", 
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div style={{ 
        width: "500px", 
        padding: "20px", 
        border: "1px solid #93801fff", 
        borderRadius: "8px", 
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
          Payroll System
        </h2>

        <div style={{ marginBottom: "10px" }}>
          <label>EPF Employee Contribution</label>
          <input type="text" placeholder="Enter employee EPF %" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>EPF Company Contribution</label>
          <input type="text" placeholder="Enter company EPF %" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>ETF Rate</label>
          <input type="text" placeholder="Enter ETF rate %" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <hr style={{ margin: "20px 0" }} />

        <div style={{ marginBottom: "10px" }}>
          <label>Current Processing Year</label>
          <input type="text" placeholder="YYYY" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Current Processing Month</label>
          <input type="text" placeholder="MM" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>OT Rate</label>
          <input type="text" placeholder="Enter OT rate per hour" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={{ backgroundColor: "#3498db", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>Edit</button>
          <button style={{ backgroundColor: "#2ecc71", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>Save</button>
          <button style={{ backgroundColor: "#e74c3c", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PayrollSystem;
