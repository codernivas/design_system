import React from "react";
import "./customCheckbox.css";

interface CheckboxOption {
  value: any;
  label: any;
}

interface CustomCheckboxProps {
  options: CheckboxOption[];
  selectedValues: any[];
  onChange: (selected: any[]) => void;
  checkboxColor?: string;
  direction?: "row" | "column";
  position?: "left" | "right";
  responsive?: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  options,
  selectedValues,
  onChange,
  checkboxColor = "#007BFF",
  direction = "row",
  position = "left",
  responsive = true,
}) => {
  const handleCheckboxChange = (value: any) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(newValues);
  };

  return (
    <div
      className={`checkbox-group ${responsive ? "responsive" : ""}`}
      style={{ flexDirection: direction }}
    >
      {options.map((option, index) => (
        <div key={index} className="checkbox-item">
          {position === "left" && (
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="custom-checkbox"
              style={{ accentColor: checkboxColor }}
            />
          )}
          <label className="checkbox-label">{option.label}</label>
          {position === "right" && (
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="custom-checkbox"
              style={{ accentColor: checkboxColor }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomCheckbox;
