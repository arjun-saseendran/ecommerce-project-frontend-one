import React from "react";

function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <ul className="cart-list">
        <li className="cart-item">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=20&crop=false"
            alt="iphone13-mobile-phone"
            width="100px"/>
          <p className="product-title">iPhone 13(128) Green</p>
          <p className="product-price">₹42999</p>
          <button>-</button>
          <p>3</p>
          <button>+</button>
        </li>
      </ul>
      <p>Total price: ₹42999</p>
    </>
  );
}

export default Cart;
