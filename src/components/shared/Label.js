import React from "react";

const Label = ({ text, color, background }) => {
  return (
    <div
      style={{
        padding: "5px 10px",
        margin: 3,
        boxSizing: "border-box",
        background: background,
        borderRadius: 3,
        color: color,
        fontSize: 14,
      }}
    >
      {text}
    </div>
  );
};

export default Label;
