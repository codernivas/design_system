import React from "react";
import "./customIconButton.css";

interface CustomIconButtonProps {
  iconImg: string;
  onPress: () => void;
  showNotification?: boolean;
  notificationCount?: number;
  backgroundColor?: string;
  size?: number; // optional size in px (e.g., 40)
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  iconImg,
  onPress,
  showNotification = false,
  notificationCount = 0,
  backgroundColor = "#f0f0f0",
  size = 40,
}) => {
  return (
    <div
      className="custom-icon-button"
      style={{
        backgroundColor,
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
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
  );
};

export default CustomIconButton;
