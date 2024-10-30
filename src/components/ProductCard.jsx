import React from "react";


function ProductCard() {
  const addToCart = () => {
    alert("Added");
  };
  return (
    <>
      <div className="product-card">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=20&crop=false"
          alt="iphone13-mobile-phone"
        />
        <div className="product-details">
          <p className="product-title">iPhone 13(128) Green</p>
          <p className="product-price">₹42999</p>

          <button onClick={addToCart} className="btn2">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
