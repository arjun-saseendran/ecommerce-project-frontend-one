import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { constants } from "../constants";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${constants.apiUrl}/product`)
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
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
