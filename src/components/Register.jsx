import React, { useState } from "react";
import { registerUser } from "../axios-services/index";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="register">
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      <form
        className="registerForm"
        onSubmit={async (e) => {
          e.preventDefault();
          const registerResponse = await registerUser(
            username,
            password,
            name,
            email,
            address
          );
          setUser(registerResponse.user);
          setPassword("");
          setUsername("");
          setName("");
          setEmail("");
          setAddress("");

          const errMsg = registerResponse.message;
          setErrorMessage(errMsg);
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
        <input
          className="input"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
