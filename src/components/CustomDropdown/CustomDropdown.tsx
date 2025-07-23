import React, { useState } from "react"
import "./customDropdown.css"

interface DropdownOption {
  label: string
  value: string | number
}

interface CustomDropdownProps {
  data: DropdownOption[]
  value: string | number | null
  onChange: (value: string | number | null) => void
  prefix?: boolean
  suffix?: boolean
  prefixImg?: string
  suffixImg?: string
  placeholder?: string
  disabled?: boolean
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  value,
  onChange,
  prefix = false,
  suffix = false,
  prefixImg,
  suffixImg,
  placeholder = "Select",
  disabled=false
}) => {
  const [isOpen, setIsOpen] = useState(false)

    const selectedLabel =
    data.find((d) => d.value === value)?.label || placeholder

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev)
  }

  const handleSelect = (val: string | number) => {
    if (!disabled) {
      onChange(val)
      setIsOpen(false)
    }
  }

  return (
    <div className={`dropdown-wrapper ${disabled ? "disabled" : ""}`}>
      {prefix && prefixImg && (
        <img src={prefixImg} alt="prefix" className="prefix-img" />
      )}

      <div className={`dropdown-display ${disabled ? "dropdown-disabled" : ""}`} onClick={toggleDropdown}>
        {selectedLabel}
        {suffix && suffixImg && (
          <img
            src={suffixImg}
            alt="suffix"
            className={`suffix-img ${isOpen ? "rotate" : ""}`}
          />
        )}
      </div>

      {!disabled && isOpen && (
        <div className="dropdown-options">
          {data.map((option) => (
            <div
              key={option.value}
              className={`dropdown-option-box ${
                value === option.value ? "selected-option" : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
