import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./components/ItemsProvider";
import "./style/index.css";
import AuthProvider from "./components/AuthProvider";

ReactDOM.render(
  <BrowserRouter>
      <AuthProvider>
    <ItemsProvider>
      <App />
    </ItemsProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// test comment
