import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textInput: {
    height: 40,
    borderRadius: 20,
    background: theme.background,
    borderColor: (props) =>
      props.error ? theme.error : theme.inputBorderColor,
    borderWidth: 2,
    color: theme.textColor,
    outline: "none",
    borderStyle: "solid",
    boxSizing: "border-box",
    padding: "10px 14px",
    "&:active": {
      borderColor: (props) => (props.error ? theme.error : theme.main),
    },
    "&:focus": {
      borderColor: (props) => (props.error ? theme.errorLight : theme.main),
    },
    "&:hover:not(:focus) ": {
      borderColor: (props) =>
        props.error ? theme.errorLight : theme.inputBorderColor,
      borderWidth: (props) => (props.error ? 2 : 3),
      padding: (props) => (props.error ? null : "9px 13px"),
    },
  },
}));
const InputText = ({ value, onChange, error, placeholder }) => {
  const classes = useStyles({ error });

  return (
    <input
      type="text"
      className={classes.textInput}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputText;
