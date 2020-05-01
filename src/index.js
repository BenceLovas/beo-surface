import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const lightTheme = createMuiTheme({
  background: "rgb(240, 242, 245)",
  backgroundLight: "rgb(255, 255, 255)",
  backgroundDark: "",
  textColor: "#1c1e21",
  divider: "rgba(133,133,133,0.2)",
  shadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
  main: "#3f51b5",
  error: "rgb(240, 7, 7)",
  errorLight: "rgba(240, 7, 7, .3)",
  inputBorderColor: "rgb(220, 220, 220)",
});

const darkTheme = createMuiTheme({
  background: "#262626",
  backgroundLight: "#414141",
  backgroundDark: "",
  textColor: "#6F6F6F",
  divider: "rgba(133,133,133,0.2)",
  shadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
  main: green,
  error: "rgb(245, 0, 87)",
  errorLight: "rgba(245, 0, 87, .3)",
  inputBorderColor: "#303030",
  palette: {
    primary: green,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
