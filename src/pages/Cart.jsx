import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../controllers/api.controllers";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function Cart() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const getCartData = async () => {
    
    const accessToken = cookies.get("accessToken");

    const headers = { Authorization: accessToken, withCredentials: true };

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
      const accessToken = cookies.get("refreshToken");

      const headers = {
        Authorization: accessToken,
      };

      const [response, error] = apiCall(
        `${apiUrl}/get-access-token`,
        "GET",
        null,
        headers
      );

      if (response) {
        cookies.set({ accessToken: response.accessToken });
        const headers = {
          Authorization: response.accessToken,
        };

        const [response, error] = apiCall(
          `${apiUrl}/cart`,
          "GET",
          null,
          headers
        );
        if (response) {
          setCartItems(response.cartItems);
        }
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const updateCartQunatity = async (id, quantity, index) => {
    const accessToken = cookies.get("accessToken")
    const headers = { Authorization: accessToken };
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
                className="quantity-btn"
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
                className="quantity-btn"
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
