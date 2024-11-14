import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const getCartData = () => {
    const token = localStorage.getItem("token")
    const config = { headers: {Authorization: token} }
    axios.get("https://ecommerce-project-backend-one.vercel.app/cart", config).then(res => {
      setCartItems(res.data.cartItems)
    }).catch(error => console.log(error.response)
    )
  }
  return (
    <>
      <h1>Cart</h1>
      <ul className="cart-list">
        <li className="cart-item">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=20&crop=false"
            alt="iphone13-mobile-phone"
            width="100px"
          />
          <p className="product-title">iPhone 13(128) Green</p>
          <p className="product-price">₹42999</p>
          <div>
            <button>-</button>
            <span className="cart-item-quantity">3</span>
            <button>+</button>
          </div>
          <p className="product-total">₹128997</p>
        </li>
        <li className="cart-item">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=20&crop=false"
            alt="iphone13-mobile-phone"
            width="100px"
          />
          <p className="product-title">iPhone 13(128) Green</p>
          <p className="product-price">₹42999</p>
          <div>
            <button>-</button>
            <span className="cart-item-quantity">3</span>
            <button>+</button>
          </div>
          <p className="product-total">₹128997</p>
        </li>
        <li className="cart-item">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=20&crop=false"
            alt="iphone13-mobile-phone"
            width="100px"
          />
          <p className="product-title">iPhone 13(128) Green</p>
          <p className="product-price">₹42999</p>
          <div>
            <button>-</button>
            <span className="cart-item-quantity">3</span>
            <button>+</button>
          </div>
          <p className="product-total">₹128997</p>
        </li>
      </ul>
      <p className="text-right">Total price: ₹42999</p>
      <Link className="btn2" to='/checkout'>Checkout</Link>
    </>
  );
}

export default Cart;
