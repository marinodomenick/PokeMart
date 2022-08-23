import React, { useState, useEffect } from "react";
import { getUsers } from "../axios-services";
import UsersContext from "../Context/UsersContext";

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const users = await getUsers();

      setUsers(users);
    };
    getAllUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
