import React from "react";
import useAuth from "../Hooks/useAuth";
import { logoutUser } from "../axios-services/index";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="logoutButton"
        onClick={(e) => {
          e.preventDefault();
          const response = logoutUser();
          setUser({});
          navigate("/home");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
