import React from "react";
import "./CustomContentSwitcher.css";

interface TabOption {
  label: string;
  value: string;
  disabled?: boolean; // ✅ individual tab disable
}

interface CustomContentSwitcherProps {
  options: TabOption[];
  selected: string;
  onChange: (value: string) => void;

  backgroundColor?: string;
  activeColor?: string;
  textColor?: string;
  activeTextColor?: string;
  dividerColor?: string;
  disabled?: boolean; // ✅ full switcher disable
}

const CustomContentSwitcher: React.FC<CustomContentSwitcherProps> = ({
  options,
  selected,
  onChange,
  backgroundColor = "#fff",
  activeColor = "#1a1a1a",
  textColor = "#333",
  activeTextColor = "#fff",
  dividerColor = "#ddd",
  disabled = false,
}) => {
  return (
    <div
      className={`content-switcher ${disabled ? "disabled" : ""}`}
      style={{ backgroundColor, borderColor: dividerColor }}
    >
      {options.map((opt, index) => {
        const isActive = opt.value === selected;
        const isTabDisabled = disabled || opt.disabled;

        return (
          <React.Fragment key={opt.value}>
            <button
              className={`tab-button ${isActive ? "active" : ""}`}
              style={{
                backgroundColor: isActive ? activeColor : backgroundColor,
                color: isActive ? activeTextColor : textColor,
                cursor: isTabDisabled ? "not-allowed" : "pointer",
                opacity: isTabDisabled ? 0.5 : 1,
              }}
              onClick={() => {
                if (!isTabDisabled) onChange(opt.value);
              }}
              disabled={isTabDisabled}
            >
              {opt.label}
            </button>
            {index < options.length - 1 && (
              <div className="divider" style={{ backgroundColor: dividerColor }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CustomContentSwitcher;
