import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./components/ItemsProvider";
import "./style/index.css";
import AuthProvider from "./components/AuthProvider";
import UsersProvider from "./components/UsersProvider";
import CartProvider from "./components/CartProvider";

ReactDOM.render(
  <AuthProvider>
    <UsersProvider>
      <CartProvider>
        <BrowserRouter>
          <ItemsProvider>
            <App />
          </ItemsProvider>
        </BrowserRouter>
      </CartProvider>
    </UsersProvider>
  </AuthProvider>,

  document.getElementById("root")
);

// test comment
