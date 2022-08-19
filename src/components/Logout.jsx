import React from 'react'
import useAuth from "../Hooks/useAuth";
import { logoutUser } from "../axios-services/index";

const Logout = () => {
    const { setUser } = useAuth();
  return (
    <div>
         <button
        className="logoutButton"
        onClick={(e) => {
          e.preventDefault();
          const response = logoutUser();
          setUser({});
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Logout