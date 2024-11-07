import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input className="input2" type="text" placeholder="Username" />
        <input className="input2" type="text" placeholder="Email" />
        <input className="input2" type="text" placeholder="Password" />
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
