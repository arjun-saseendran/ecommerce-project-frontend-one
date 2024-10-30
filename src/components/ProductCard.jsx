import React from 'react'

function ProductCard() {
  return (
    <>
      <div className='product-card'>
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=20&crop=false"
          alt="iphone13-mobile-phone"
        />
        <p className='product-title'>iPhone 13(128) Green</p>
        <p className='product-price'>₹42999</p>
        <button>Add to cart</button>
      </div>
    </>
  );
}

export default ProductCard