import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { loginUser, logoutUser } from "../axios-services/index";

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="login">
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      <button
        className="logoutButton"
        onClick={(e) => {
          e.preventDefault();
          const response = logoutUser();
          setUser({});
          setErrorMessage("");
        }}
      >
        Logout
      </button>

      <form
        className="loginForm"
        onSubmit={async (e) => {
          e.preventDefault();
          const loginResponse = await loginUser(username, password);
          setErrorMessage("");
          setUser(loginResponse.user);
          setPassword("");
          setUsername("");

          const errMessage = loginResponse.message;
          setErrorMessage(errMessage);
        }}
      >
        <input
          className="input"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          placeholder="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
}
