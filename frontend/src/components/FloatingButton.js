import React from "react";

const FloatingButton = ({ color, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-btn"
      style={{ background: color }}
    >
      {icon}
    </button>
  );
};

export default FloatingButton;
