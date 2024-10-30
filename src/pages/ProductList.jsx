import React from 'react'
import ProductCard from '../components/ProductCard'

function ProductList() {
  return (
    <>
      <form>
        <input type="text" placeholder="Search" />
        <input type="submit" value="Search" />
      </form>

      <h1>Product List</h1>
      <div className='product-list'>
        <ProductCard />
      </div>
    </>
  );
}

export default ProductList