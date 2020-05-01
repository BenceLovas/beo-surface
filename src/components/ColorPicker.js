import React from "react";
import Fade from "@material-ui/core/Fade";
import RadioButton from "./RadioButton";

const ColorPicker = ({
  isOpen,
  colors,
  selectedValue,
  setSelectedValue,
  selectedColors,
}) => (
  <Fade direction="left" in={isOpen} mountOnEnter unmountOnExit>
    <div style={{ display: "flex" }}>
      {colors
        .filter((color) => {
          return !selectedColors.includes(color.background);
        })
        .map((color) => (
          <RadioButton
            key={color.background}
            value={color.background}
            color={color.background}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        ))}
    </div>
  </Fade>
);

export default ColorPicker;
