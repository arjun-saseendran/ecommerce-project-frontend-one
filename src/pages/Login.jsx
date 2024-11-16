import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { constants } from "../constants";

function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${constants.apiUrl}/user/login`, user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleInput = (e, field) => {
    const loginUser = { ...user };
    loginUser[field] = e.target.value;
    setUser(loginUser);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input2"
          type="text"
          placeholder="Email"
          onChange={(e) => handleInput(e, "email")}
        />
        <input
          className="input2"
          type="text"
          placeholder="Password"
          onChange={(e) => handleInput(e, "password")}
        />
        <input className="input2 btn2" type="submit" value="Login" />
      </form>
      <p>
        Create an account
        <Link to="/register">Register</Link>
      </p>
    </>
  );
}

export default Login;
