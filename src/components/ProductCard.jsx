import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const addToCart = () => {
    alert("Product added");
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: token } };
    axios
      .post(
        "https://ecommerce-project-backend-one.vercel.app/cart",
        {
          product: product._id,
          quantity: 1,
        },
        config
      )
      .then((res) => alert("Product added to cart"));
  };
  return (
    <>
      <div className="product-card">
        <img src={product.image} alt="iphone13-mobile-phone" />
        <div className="product-details">
          <p className="product-title">{product.title}</p>
          <p className="product-title">{product.description}</p>
          <p className="product-price">₹{product.price}</p>

          <button className="btn2">Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
