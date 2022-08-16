import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
import "./style/index.css";
import AuthProvider from "./components/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
