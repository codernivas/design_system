import React from "react";
import "./CustomRadioButton.css";

interface RadioOption {
  value: any;
  label: any;
  disabled?: boolean;
}

interface CustomRadioButtonProps {
  options: RadioOption[];
  selectedValue: any;
  onChange: (value: any) => void;
  direction?: "row" | "column";
  position?: "left" | "right";
  color?: string;
  disabled?: boolean;
  responsive?: boolean;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  options,
  selectedValue,
  onChange,
  direction = "row",
  position = "left",
  color = "#007BFF",
  disabled = false,
  responsive = true,
}) => {
  return (
    <div
      className={`radio-group ${responsive ? "responsive" : ""} direction-${direction}`}
      style={{ "--radio-color": color } as React.CSSProperties}
    >
      {options.map((option, index) => {
        const isDisabled = disabled || option.disabled;
        const inputId = `radio-${index}`;

        return (
          <div key={index} className={`radio-item ${isDisabled ? "disabled" : ""}`}>
            {position === "left" && (
              <input
                id={inputId}
                type="radio"
                name="custom-radio-group"
                checked={selectedValue === option.value}
                onChange={() => !isDisabled && onChange(option.value)}
                disabled={isDisabled}
                className="custom-radio"
              />
            )}
            <label htmlFor={inputId} className="radio-label">
              {option.label}
            </label>
            {position === "right" && (
              <input
                id={inputId}
                type="radio"
                name="custom-radio-group"
                checked={selectedValue === option.value}
                onChange={() => !isDisabled && onChange(option.value)}
                disabled={isDisabled}
                className="custom-radio"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomRadioButton;
