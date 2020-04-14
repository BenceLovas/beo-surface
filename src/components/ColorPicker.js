import React from "react";
import RadioButton from "./RadioButton";
import Slide from "@material-ui/core/Slide";

const ColorPicker = ({ isOpen, colors, selectedValue, setSelectedValue }) => {
  return (
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
};

export default ColorPicker;
