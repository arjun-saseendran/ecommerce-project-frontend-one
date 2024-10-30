import React from 'react'
import { Link } from 'react-router-dom';

function ProductDetails() {
  return (
    <>
      <div className="product-card">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=20&crop=false"
          alt="iphone13-mobile-phone"
        />
        <div>
          <p className="product-title">iPhone 13(128) Green</p>
          <p className="product-price">₹42999</p>
          <Link to={"/cart"}>
            <button className="btn2">Add to cart</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetails