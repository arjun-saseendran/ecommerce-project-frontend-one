import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';

function ProductList() {
  return (
    <>
      <form className="text-right">
        <input className="input1" type="text" placeholder="Search" />
        <input className="btn1" type="submit" value="Search" />
      </form>

      <h1>Product List</h1>
      <div className="product-list">
        <Link className="link-style" to={"/product-details/1"}>
          <ProductCard />
        </Link>
        <Link className="link-style" to={"/product-details/2"}>
          <ProductCard />
        </Link>
        <Link className="link-style" to={"/product-details/3"}>
          <ProductCard />
        </Link>
        <Link className="link-style" to={"/product-details/4"}>
          <ProductCard />
        </Link>
        <Link className="link-style" to={"/product-details/5"}>
          <ProductCard />
        </Link>
      </div>
      <div className="text-center">
        <button className="loadmore-btn">Load more</button>
      </div>
    </>
  );
}

export default ProductList