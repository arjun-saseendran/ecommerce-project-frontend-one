import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <h1>Register</h1>
      <form>
        <input className="input2" type="text" placeholder="Username" />
        <input className="input2" type="text" placeholder="Email" />
        <input className="input2" type="text" placeholder="Mobile" />
        <input className="input2" type="text" placeholder="Password" />
        <input className="input2" type="text" placeholder="Confirm Password" />
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
