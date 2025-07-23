import React from "react"
import "./customInput.css"

interface CustomInputProps {
  value: string | number
  onChange: (value: string | number) => void
  placeholder?: string
  type?: "text" | "number"
  prefix?: boolean
  suffix?: boolean
  prefixImg?: string
  suffixImg?: string
  disabled?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  prefix = false,
  suffix = false,
  disabled = false,
  prefixImg,
  suffixImg,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    if (type === "number") {
      // Only allow: empty string, -, -1, 0, 0.5, -0.5, etc.
      const regex = /^-?\d*(\.\d*)?$/
      if (val === "" || regex.test(val)) {
        onChange(
          val === "" || val === "-" || val === "." || val === "-."
            ? val
            : Number(val)
        )
      }
    } else {
      onChange(val)
    }
  }

  return (
    <div className="custom-input-container">
      {prefix && prefixImg && (
        <img src={prefixImg} alt="prefix" className="prefix-icon" />
      )}

      <input
        className={`custom-input ${prefix ? "has-prefix" : ""} ${
          suffix ? "has-suffix" : ""
        } ${disabled ? "input-disabled" : ""}`}
        type="text" // Use "text" to handle manual validation
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />

      {suffix && suffixImg && (
        <img src={suffixImg} alt="suffix" className="suffix-icon" />
      )}
    </div>
  )
}

export default CustomInput
