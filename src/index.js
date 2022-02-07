import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/indecision-app"
import "../style.scss";
ReactDOM.render(<IndecisionApp defaultOptions={[`ramiz`, `hassan`]} />, document.getElementById('root'));



