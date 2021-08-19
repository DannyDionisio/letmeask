import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./contexts/ThemeContext";

import "./services/firebase";

import "./styles/global.scss";

ReactDOM.render(
  <ThemeContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContext>,
  document.getElementById("root")
);
