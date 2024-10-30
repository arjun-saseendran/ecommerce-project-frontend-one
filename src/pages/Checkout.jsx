import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <>
      <h1>Address</h1>
      <form>
        <input className="input2" type="text" placeholder="Address Line 1" />
        <input className="input2" type="text" placeholder="Address Line 2" />
        <input className="input2" type="text" placeholder="City" />
        <input className="input2" type="text" placeholder="State" />
        <input className="input2" type="text" placeholder="Country" />
        <input className="input2" type="text" placeholder="Pincode" />
        <Link className="btn2" to="/orders">Confirm</Link>
      </form>
    </>
  );
}

export default Checkout;
