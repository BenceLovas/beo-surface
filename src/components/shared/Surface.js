import React from "react";

const Surface = ({ children }) => (
  <div
    style={{
      borderRadius: 8,
      marginTop: 10,
      padding: "5px 20px",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
      backgroundColor: "rgb(255, 255, 255)",
    }}
  >
    {children}
  </div>
);

export default Surface;
