import React from "react";
import useUsers from "../Hooks/useUsers";

const AllUsers = () => {
  const { users } = useUsers();

  const usersToDisplay = users?.map((user, i) => {
    return (
      <div key={`Key ${i}`}>
        <h4>User: {user.username}</h4>
        <h5>Name: {user.name}</h5>
        <h5>Email: {user.email}</h5>
        <h5>Address: {user.address}</h5>
        <br />
      </div>
    );
  });

  return <div>{usersToDisplay}</div>;
};

export default AllUsers;
