import React, { useState } from "react";
import EmployeeHeader from "../components/EmployeeDetails/EmployeeHeader";
import SectionNavigator from "../components/EmployeeDetails/SectionNavigator";
import PersonalSection from "../components/EmployeeDetails/PersonalSection";
import JobSection from "../components/EmployeeDetails/JobSection";
import SalarySection from "../components/EmployeeDetails/SalarySection";
import OtherSection from "../components/EmployeeDetails/OtherSection";
import ActionButtons from "../components/EmployeeDetails/ActionButtons";
import { containerStyle, cardStyle, headerStyle, sectionContentStyle } from "../components/EmployeeDetails/styles";

const EmployeeDetails = () => {
  const [selectedSection, setSelectedSection] = useState("personal");

  const renderSection = () => {
    switch (selectedSection) {
      case "personal":
        return <PersonalSection />;
      case "job":
        return <JobSection />;
      case "salary":
        return <SalarySection />;
      case "other":
        return <OtherSection />;
      default:
        return <PersonalSection />;
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headerStyle}>Employee Details</h2>

        <EmployeeHeader />

        <SectionNavigator 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection} 
        />

        <div style={sectionContentStyle}>
          {renderSection()}
        </div>

        <ActionButtons />
      </div>
    </div>
  );
};

export default EmployeeDetails;