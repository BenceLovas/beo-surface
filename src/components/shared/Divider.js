import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: 16,
    height: 3,
    boxSizing: "border-box",
    background: theme.divider,
  },
}));
const Divider = () => {
  const classes = useStyles();
  return <div className={classes.wrapper}></div>;
};

export default Divider;
