import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../controllers/api.controllers";

function Cart() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [cartItems, setCartItems] = useState([]);
  const getCartData = async () => {
    const token = localStorage.getItem("token");

    const headers = { Authorization: token };

    const [response, error] = await apiCall(
      `${apiUrl}/cart`,
      "GET",
      null,
      headers
    );

    if (response) {
      console.log(response);

      setCartItems(response.cartItems);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const updateCartQunatity = async (id, quantity, index) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    const [response, error] = await apiCall(
      `${apiUrl}/cart/update-quantity`,
      "POST",
      { quantity, cartItemId: id },
      headers
    );

    if (response) {
      let tempCartItem = [...cartItems];
      tempCartItem[index].quantity = quantity;
      setCartItems(tempCartItem);
      getCartData();
    } else {
      console.log(error);
    }
  };

  const cartTotal = () => {
    return cartItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.product.price * cartItem.quantity,
      0
    );
  };

  return (
    <>
      <h1>Cart</h1>
      <ul className="cart-list">
        {cartItems.map((cartItem, index) => (
          <li className="cart-item" key={index}>
            <img src={`${apiUrl}/${cartItem.product.image}`} width="100px" />

            <p className="product-title">{cartItem.product.title}</p>

            <p className="cart-product-description">
              {cartItem.product.description}
            </p>

            <p className="product-price">₹{cartItem.product.price}</p>

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
      <p className="text-right">Total price: ₹{cartTotal()}</p>
      <Link className="btn2" to="/checkout">
        Checkout
      </Link>
    </>
  );
}

export default Cart;
