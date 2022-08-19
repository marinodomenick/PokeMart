import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAPIHealth } from "../axios-services";
import "../style/App.css";

import {
  Login,
  Logout,
  Register,
  MyAccount,
  EditAccount,
  Items,
  SingleItem,
  Home,
  HNavBar,
  VNavBar,
  F1,
  Cart,
} from "../components";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

  useEffect(() => {
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! >:D" : "api is down xD");
    };
    getAPIStatus();
  }, []);

  return (
    <>
      <div>
        <HNavBar />
        <VNavBar />
        <h1>Hello, World!</h1>
        <p>API Status: {APIHealth}</p>
        <Routes>
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<SingleItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/editaccount" element={<EditAccount />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items/floor/:id" element={<F1 />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
