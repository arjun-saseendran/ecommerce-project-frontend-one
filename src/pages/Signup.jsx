import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../controllers/api.controllers";

function Signup() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [resposne, error] = await apiCall(
      `${apiUrl}/user/signup`,
      "POST",
      {...user, isAdmin: false}
    );
    if (resposne) {
      alert("Registered successfully");
      navigate("/login");
    } else {
      console.log(error);
      
    }
  };

  const handleInput = (e, field) => {
    const newUser = { ...user };
    newUser[field] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input2"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => handleInput(e, "username")}
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
        <input className="input2 btn2" type="submit" value="Signup" />
      </form>
      <p>
        Already have an account
        <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default Signup;
