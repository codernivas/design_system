import React from "react"
import "./customIconButton.css"

interface CustomIconButtonProps {
  iconImg: string
  onPress: () => void
  showNotification?: boolean
  notificationCount?: number
  backgroundColor?: string
  size?: number 
  disabled?: boolean
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  iconImg,
  onPress,
  showNotification = false,
  notificationCount = 0,
  backgroundColor = "#f0f0f0",
  size = 40,
  disabled = false,
}) => {
  return (
    <div
      className={`custom-icon-button ${disabled ? "icon-button-disabled" : ""}`}
      style={{
        backgroundColor,
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={onPress}
    >
      <img src={iconImg} alt="icon" className="icon-img" />
      {showNotification && (
        <span className="notification-badge">
          {notificationCount > 99 ? "99+" : notificationCount}
        </span>
      )}
    </div>
  )
}

export default CustomIconButton
