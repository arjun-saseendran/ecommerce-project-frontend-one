import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce-project-backend-one.vercel.app/product")
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
          return (
            <div key={product._id}>
              <Link
                className="link-style"
                to={`/product-details/${product._id}`}
              >
                <ProductCard product={product} />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className="loadmore-btn">Load more</button>
      </div>
    </>
  );
}

export default ProductList;
