import React, { Fragment } from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: (props) => props.color,
  },
});
const RadioButton = ({ value, color, setSelectedValue, selectedValue }) => {
  const classes = useStyles({ color });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Radio
        checked={selectedValue === value}
        onChange={handleChange}
        value={value}
        classes={{
          root: classes.root,
        }}
        color="default"
      />
    </>
  );
};

export default RadioButton;
