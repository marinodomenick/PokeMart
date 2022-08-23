import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAPIHealth } from "../axios-services";
import "../style/index.css";

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
        <div className="navbars">
        <HNavBar />
          {/* <div className="verticalNav"> */}
        <VNavBar />
        {/* </div> */}
        </div>
        <div className="vertContent">
        <h2 className="floorHeader">1F - Trainer Zone</h2>
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
        </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
