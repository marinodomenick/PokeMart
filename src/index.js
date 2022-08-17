import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./components/ItemsProvider";
import "./style/index.css";
import AuthProvider from "./components/AuthProvider";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </BrowserRouter>
  </AuthProvider>,

  document.getElementById("root")
);

// test comment
