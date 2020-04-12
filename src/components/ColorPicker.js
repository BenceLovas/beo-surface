import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioButton from "./RadioButton";
import Slide from "@material-ui/core/Slide";

const colors = ["#F27312", "#F48D13", "#F0C213", "#439975", "#1A3D48"];
const defaultColor = "#123566";

const ColorPicker = ({ isOpen }) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultColor);

  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <div>
        {colors.map((color) => (
          <RadioButton
            value={color}
            color={color}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        ))}
      </div>
    </Slide>
  );
};

export default ColorPicker;
