import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./components/ItemsProvider";
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
import "./style/index.css";
import SingleItemProvider from "./components/SingleItemProvider";

ReactDOM.render(
  <BrowserRouter>
    <SingleItemProvider>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </SingleItemProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// test comment
