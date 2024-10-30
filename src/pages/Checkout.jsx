import React from "react";

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
        <input className="input2 btn2" type="submit" value="Confirm" />
      </form>
    </>
  );
}

export default Checkout;
