import React, { useState, useEffect } from 'react'
import { getMe, updateUser } from '../axios-services'
import useAuth from '../Hooks/useAuth';

const EditAccount = () => {
  const { user, setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log("the user is: ", user)

  return (
    <div className="updateUser">
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      <form
        className="updateUserForm"
        onSubmit={async (e) => {
          e.preventDefault();
          const updateUserResponse = await updateUser(
            user.id,
            username,
            password,
            name,
            address
          );
          setUser(updateUserResponse);
          setPassword("");
          setUsername("");
          setName("");
          setAddress("");
          //else statement?
          const errMsg = updateUserResponse.message;
          setErrorMessage(errMsg);
        }}
      >
        <input
          className="input"
          placeholder={user.username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          placeholder="password"
          value={password}
          //type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input"
          placeholder={user.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          placeholder={user.address}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" className="updateButton">
          Update Account
        </button>
      </form>
    </div>
  );
}

export default EditAccount