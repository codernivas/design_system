import React from "react"
import "./customButton.css"

interface CustomButtonProps {
  title: string
  onPress: () => void
  backgroundColor?: string
  textColor?: string
  prefix?: boolean
  suffix?: boolean
  prefixImg?: string
  suffixImg?: string
  disabled?: boolean
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
  disabled = false,
}) => {
  return (
    <button
      className={`custom-button ${disabled ? "button-disabled" : ""}`}
      onClick={onPress}
      style={{ backgroundColor, color: textColor }}
      disabled={disabled}
    >
      {prefix && prefixImg && (
        <img src={prefixImg} alt="prefix" className="button-prefix-img" />
      )}
      <span className="button-text">{title}</span>
      {suffix && suffixImg && (
        <img src={suffixImg} alt="suffix" className="button-suffix-img" />
      )}
    </button>
  )
}

export default CustomButton
