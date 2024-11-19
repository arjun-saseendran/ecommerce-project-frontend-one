import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../controllers/api.controllers";
import Cookies from "universal-cookie";

function Login() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const headers = {
      "Content-Type": "application/json",
    };
    e.preventDefault();

    const [response, error] = await apiCall(
      `${apiUrl}/user/login`,
      "POST",
      user,
      headers
    );

    if (response) {
      cookies.set("accessToken", response.accessToken);
      cookies.set("refreshToken", response.refreshToken);
      setLogin(true);
    } else {
      console.log(error);
    }
  };

  const handleInput = (e, field) => {
    const loginUser = { ...user };
    loginUser[field] = e.target.value;
    setUser(loginUser);

    console.log(user);
  };

  useEffect(() => {
    if (login) {navigate("/")}
  }, [login]);

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
        <Link to="/signup">Signup</Link>
      </p>
    </>
  );
}

export default Login;
