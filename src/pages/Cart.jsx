import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const getCartData = () => {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: token } };
    axios
      .get("https://ecommerce-project-backend-one.vercel.app/cart", config)
      .then((res) => {
        setCartItems(res.data.cartItems);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    getCartData();
  }, []);

  const updateCartQunatity = (id, quantity, index) => {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: token } };

    const data = {
      quantity,
      cartItemId: id,
    };

    axios
      .post(
        "https://ecommerce-project-backend-one.vercel.app/cart/update-quantity",
        data,
        config
      )
      .then(() => {
        let tempCartItem = [...cartItems]
        tempCartItem[index].quantity = quantity
        setCartItems(tempCartItem)
      })
      .catch((error) => console.log(error.response));
  };
  return (
    <>
      <h1>Cart</h1>
      <ul className="cart-list">
        {cartItems.map((cartItem, index) => (
          <li className="cart-item">
            <img src={cartItem.product.image} width="100px" />
            <p className="product-title">{cartItem.product.title}</p>
            <p className="product-title">{cartItem.product.description}</p>
            <p className="product-price">{cartItem.product.price}</p>
            <div>
              <button
                onClick={() => {
                  updateCartQunatity(
                    cartItem._id,
                    cartItem.quantity - 1,
                    index
                  );
                }}
              >
                -
              </button>
              <span className="cart-item-quantity">{cartItem.quantity}</span>
              <button
                onClick={() => {
                  updateCartQunatity(
                    cartItem._id,
                    cartItem.quantity + 1,
                    index
                  );
                }}
              >
                +
              </button>
            </div>
            <p className="product-total">
              ₹{cartItem.product.price * cartItem.quantity}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-right">Total price: ₹42999</p>
      <Link className="btn2" to="/checkout">
        Checkout
      </Link>
    </>
  );
}

export default Cart;
