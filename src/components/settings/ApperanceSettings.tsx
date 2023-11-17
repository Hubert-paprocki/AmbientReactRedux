import React from "react";
import ApperancePicker from "./ApperancePicker";
import BackgroundPicker from "./BackgroundPicker";

const ApperanceSettings = (): JSX.Element => {
  return (
    <div className="settings-box ">
      <BackgroundPicker />
      <ApperancePicker />
    </div>
  );
};

export default ApperanceSettings;
