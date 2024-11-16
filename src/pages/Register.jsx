import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${apiUrl}/user/signup`,
        user
      )
      .then((res) => {
        alert("Registered successfully");
        navigate("/Login");
      })
      .catch((error) => {
        alert("Something went wrong. Try again!");
      });
  };

  const handleInput = (e, field) => {
    const newUser = { ...user };
    newUser[field] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <h1>Register</h1>
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
        <input className="input2 btn2" type="submit" value="Register" />
      </form>
      <p>
        Already have an account
        <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default Register;
