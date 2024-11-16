import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { apiCall } from "../controllers/api.controllers";

function ProductList() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const [data, error] = apiCall(`${apiUrl}/product`, "GET");

    if (data) {
      setProducts(data);
    } else {
      console.log(error);
    }
  }, []);

  return (
    <>
      <form className="text-right">
        <input className="input1" type="text" placeholder="Search" />
        <input className="btn1" type="submit" value="Search" />
      </form>

      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
      <div className="text-center">
        <button className="loadmore-btn">Load more</button>
      </div>
    </>
  );
}

export default ProductList;
