import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { loginUser } from "../axios-services/index";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  return (
    <div className="login">
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      <form
        className="loginForm"
        onSubmit={async (e) => {
          e.preventDefault();
          const loginResponse = await loginUser(username, password);
          console.log("outcome of login response: ", loginResponse)
          if (loginResponse.user) {
            setErrorMessage("");
            setUser(loginResponse.user);
            setPassword("");
            setUsername("");

            navigate("/home")
          } else {
            setErrorMessage("Incorrect username or password.")
          }
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
