import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../controllers/api.controllers";

function AdminSignup() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [resposne, error] = await apiCall(
      `${apiUrl}/admin/signup`,
      "POST",
      user
    );
    if (resposne) {
      alert("Registered successfully");
      navigate("/admin/login");
    } else {
      alert("Something went wrong. Try again!");
    }
  };

  const handleInput = (e, field) => {
    const newUser = { ...user };
    newUser[field] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <h1>Admin Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input2"
          type="text"
          name="adminname"
          placeholder="Adminname"
          onChange={(e) => handleInput(e, "adminname")}
        />
        <input
          className="input2"
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => handleInput(e, "email")}
        />

        <input
          type="text"
          placeholder="Mobile"
          onChange={(e) => handleInput(e, "mobile")}
        />

        <input
          className="input2"
          type="text"
          placeholder="Password"
          onChange={(e) => handleInput(e, "password")}
        />

        <input
          className="input2"
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => handleInput(e, "confirmPassword")}
        />
        <div className="text-right mb-10">
          Agree the terms and conditions
          <input type="checkbox" />
        </div>
        <input className="input2 btn2" type="submit" value="Register" />
      </form>
      <p>
        Already have an account
        <Link to="/admin/login">Login</Link>
      </p>
    </>
  );
}

export default AdminSignup;
