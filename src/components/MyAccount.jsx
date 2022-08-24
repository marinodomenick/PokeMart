import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { getUserById } from "../axios-services";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({});
  const id = user.id;
  useEffect(() => {
    async function getData() {
      if (user) {
        const userObj = await getUserById(id);
        setUserData(userObj);
      }
    }
    getData();
  }, [user]);

  return (
    <div className='myAcc'>
      {" "}
      My Account <br />
      <Link to="/editaccount">Edit Account Information</Link>
      <br />
      <div>
        {userData?.username}
        <br />
        {userData?.name}
        <br />
        {userData?.address}
        <br />
        {userData?.email}
        <br />
      </div>
      {user.isAdmin ? <Link to="/allusers">View all users</Link> : null}
      <br />
      {user.isAdmin ? <Link to="/createitem">Create a New Item</Link> : null}
    </div>
  );
};

export default MyAccount;
