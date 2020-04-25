import React from "react";
import Slide from "@material-ui/core/Slide";
import RadioButton from "./RadioButton";

const ColorPicker = ({
  isOpen,
  colors,
  selectedValue,
  setSelectedValue,
  selectedColors,
}) => (
  <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
    <div>
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
  </Slide>
);

export default ColorPicker;
