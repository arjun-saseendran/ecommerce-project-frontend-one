import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../controllers/api.controllers";

function AdminLogin() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [admin, setAdmin] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [response, error] = await apiCall(
      `${apiUrl}/admin/login`,
      "POST",
      admin
    );

    if (response) {
      localStorage.setItem("token", response.token);
      navigate("/");
    } else {
      console.log(error);
    }
  };

  const handleInput = (e, field) => {
    const loginAdmin = { ...admin };
    loginAdmin[field] = e.target.value;
    setAdmin(loginAdmin);
  };

  return (
    <>
      <h1>Admin Login</h1>
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
        <Link to="/admin/signup">Register</Link>
      </p>
    </>
  );
}

export default AdminLogin;
