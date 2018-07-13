import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";

const appEl = document.getElementById("react-app");

if (!appEl) {
    throw new Error("root element react-app was not defined");
}

ReactDOM.render(<App />, appEl);