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
});

const darkTheme = createMuiTheme({
  background: "#262626",
  backgroundLight: "#414141",
  backgroundDark: "",
  textColor: "#6F6F6F",
  divider: "rgba(133,133,133,0.2)",
  shadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
  main: "#3f51b5",
  error: "#f50057",
  inputBorderColor: "#303030",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
