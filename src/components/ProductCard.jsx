import React from "react";

function ProductCard({ product }) {
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
