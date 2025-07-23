import React from "react";
import "./customCheckbox.css";

interface CheckboxOption {
  value: any;
  label: any;
  disabled?: boolean;
}

interface CustomCheckboxProps {
  options: CheckboxOption[];
  selectedValues: any[];
  onChange: (selected: any[]) => void;
  checkboxColor?: string;
  direction?: "row" | "column";
  position?: "left" | "right";
  responsive?: boolean;
  disabled?: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  options,
  selectedValues,
  onChange,
  checkboxColor = "#007BFF",
  direction = "row",
  position = "left",
  responsive = true,
  disabled = false,
}) => {
  const handleCheckboxChange = (value: any) => {
    if (disabled) return;
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(newValues);
  };

  return (
    <div
      className={`checkbox-group ${responsive ? "responsive" : ""} direction-${direction}`}
      data-checkbox-color={checkboxColor}
    >
      {options.map((option, index) => {
        const isDisabled = disabled || option.disabled;
        const inputId = `checkbox-${index}`;

        return (
          <div key={index} className={`checkbox-item ${isDisabled ? "disabled" : ""}`}>
            {position === "left" && (
              <input
                id={inputId}
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                disabled={isDisabled}
                className="custom-checkbox"
                title={typeof option.label === "string" ? option.label : "Checkbox"}
              />
            )}

            <label htmlFor={inputId} className="checkbox-label">
              {option.label}
            </label>

            {position === "right" && (
              <input
                id={inputId}
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                disabled={isDisabled}
                className="custom-checkbox"
                title={typeof option.label === "string" ? option.label : "Checkbox"}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomCheckbox;
