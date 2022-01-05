import React, { useRef } from "react";

const Button = ({ text, icon, onClick, color, style }) => {
  const iconContainerRef = useRef(null);

  return (
    <button
      data-testid="button"
      onClick={onClick}
      style={{ backgroundColor: color, ...style }}
      onMouseEnter={() => {
        iconContainerRef.current.style.width = "100%";
      }}
      onMouseLeave={() => {
        iconContainerRef.current.style.width = "25%";
      }}
    >
      {
        <div
          className="btn-icon"
          ref={iconContainerRef}
          style={{ background: color }}
        >
          {icon}
        </div>
      }
      <div className="btn-text">{text}</div>
    </button>
  );
};

export default Button;
