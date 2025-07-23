import React from "react";
import "./customButton.css";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  prefix?: boolean;
  suffix?: boolean;
  prefixImg?: string;
  suffixImg?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#007bff",
  textColor = "#fff",
  prefix = false,
  suffix = false,
  prefixImg,
  suffixImg,
}) => {
  return (
    <button
      className="custom-button"
      onClick={onPress}
      style={{ backgroundColor, color: textColor }}
    >
      {prefix && prefixImg && (
        <img src={prefixImg} alt="prefix" className="button-prefix-img" />
      )}
      <span className="button-text">{title}</span>
      {suffix && suffixImg && (
        <img src={suffixImg} alt="suffix" className="button-suffix-img" />
      )}
    </button>
  );
};

export default CustomButton;
