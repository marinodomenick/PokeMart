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
  AllUsers,
  EditItem,
  CreateItem,
  Cart,
  Purchase,
} from "../components";
import useAuth from "../Hooks/useAuth";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const { user } = useAuth();

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
          {user.isAdmin ? (
            <Route path="/allusers" element={<AllUsers />} />
          ) : null}
          {user.isAdmin ? (
            <Route path="/edititem/:id" element={<EditItem />} />
          ) : null}
          {user.isAdmin ? (
            <Route path="/createitem" element={<CreateItem />} />
          ) : null}
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
