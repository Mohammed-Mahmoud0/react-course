import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: "black", color: "white" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
