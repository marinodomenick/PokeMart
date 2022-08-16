import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./components/ItemsProvider";
import "./style/index.css";

ReactDOM.render(
  <BrowserRouter>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// test comment
