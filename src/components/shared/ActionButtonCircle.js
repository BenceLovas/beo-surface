import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inner: {
    cursor: "pointer",
    display: "block",
    backgroundImage: theme.actionButton.backgroundImage,
    color: theme.actionButton.color,
    width: 40,
    height: 40,
    position: "relative",
    textAlign: "center",
    borderRadius: "50%",
    boxShadow: theme.actionButton.boxShadow,
    border: "none",
    outline: "none",
    "&:hover": {
      color: theme.actionButton.hover.color,
      background: theme.actionButton.hover.background,
    },
  },
}));
const ActionButtonCircle = ({ icon }) => {
  const classes = useStyles();
  return (
    <button type="submit" className={classes.inner}>
      {icon}
    </button>
  );
};

export default ActionButtonCircle;
