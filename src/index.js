import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./components/ItemsProvider";
import "./style/index.css";
import AuthProvider from "./components/AuthProvider";
import UsersProvider from "./components/UsersProvider";
import SingleItemProvider from "./components/SingleItemProvider";

ReactDOM.render(
  <AuthProvider>
    <UsersProvider>
      <BrowserRouter>
        <ItemsProvider>
          <App />
        </ItemsProvider>
      </BrowserRouter>
    </UsersProvider>
  </AuthProvider>,

  document.getElementById("root")
);

// test comment
