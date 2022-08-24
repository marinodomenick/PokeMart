import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <span>Home, cool adssssssss</span>
    </div>
  );
};

export default Home;
