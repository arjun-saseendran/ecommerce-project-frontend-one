import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../controllers/api.controllers";
import Cookies from "universal-cookie";

function ProductCard({ product }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const cookies = new Cookies();
  const addToCart = async () => {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
    const headers = { Authorization: accessToken };
    const [response, error] = await apiCall(
      `${apiUrl}/cart`,
      "POST",
      {
        product: product._id,
        quantity: 1,
      },
      headers
    );

    if (response) {
      console.log(response);
    } else {
      console.log(error);
      navigate("/login");
    }
  };
  return (
    <>
      <div className="product-card">
        <img src={`${apiUrl}/${product.image}`} />
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
