import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function ProductCard({ product }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const addToCart = () => {
    alert("Product added");
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: token } };
    axios
      .post(
        `${apiUrl}/cart`,
        {
          product: product._id,
          quantity: 1
        },
        config
      )
      .then((res) => alert("Product added to cart "))
      .catch((error) => {
        console.log(error);

        if (error.response.status === 401) {
          navigate("/login");
        }
      });
  };
  return (
    <>
      <div className="product-card">
        <img src={product.image} alt="iphone13-mobile-phone" />
        <div className="product-details">
          <Link to={`/product-details/${product._id}`} className="link-style">
            <p className="product-title">{product.title}</p>
          </Link>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹{product.price}</p>

          <button className="btn2" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
