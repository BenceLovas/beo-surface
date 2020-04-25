import React from "react";
import Slide from "@material-ui/core/Slide";
import RadioButton from "./RadioButton";

const ColorPicker = ({ isOpen, colors, selectedValue, setSelectedValue }) => (
  <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
    <div>
      {colors.map((color) => (
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
