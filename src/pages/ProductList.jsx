import React from 'react'
import ProductCard from '../components/ProductCard'

function ProductList() {
  return (
    <>
      <form className='text-right'>
        <input className='input1' type="text" placeholder="Search" />
        <input className='btn1' type="submit" value="Search" />
      </form>

      <h1>Product List</h1>
      <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='text-center'>
        <button className='loadmore-btn'>Load more</button>
      </div>
    </>
  );
}

export default ProductList