import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 8,
    marginTop: 10,
    padding: "5px 20px",
    boxShadow: theme.shadow,
    backgroundColor: theme.backgroundLight,
  },
}));
const Surface = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default Surface;
