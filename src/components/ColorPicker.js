import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioButton from "./RadioButton";

const colors = ["#F27312", "#F48D13", "#F0C213", "#439975", "#1A3D48"];
const defaultColor = "#123566";

const ColorPicker = () => {
  const [selectedValue, setSelectedValue] = React.useState(defaultColor);

  return (
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
  );
};

export default ColorPicker;
