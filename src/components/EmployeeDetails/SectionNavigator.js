import React from "react";

const SectionNavigator = ({ selectedSection, setSelectedSection }) => {
  const sections = ["personal", "job", "salary", "other"];

  const buttonStyle = (isSelected) => ({
    padding: "12px 20px",
    borderRadius: "8px",
    border: "2px solid #3498db",
    background: isSelected ? "#3498db" : "transparent",
    color: isSelected ? "#fff" : "#3498db",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    flex: 1,
    transition: "all 0.3s ease",
    textTransform: "capitalize",
  });

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "30px",
      gap: "10px",
    }}>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setSelectedSection(section)}
          style={buttonStyle(selectedSection === section)}
          onMouseOver={(e) => {
            if (selectedSection !== section) {
              e.target.style.backgroundColor = "#3498db";
              e.target.style.color = "#fff";
            }
          }}
          onMouseOut={(e) => {
            if (selectedSection !== section) {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#3498db";
            }
          }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default SectionNavigator;