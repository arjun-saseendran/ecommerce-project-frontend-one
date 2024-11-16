import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetails() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/product/details/${id}`
      )
      .then((res) => {
        setProduct(res.data);
        console.log(res.data.product);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      <div className="product-card">
        <img src={product.image} />
        <div>
          <p className="product-title">{product.title}</p>
          <p className="product-title">{product.description}</p>
          <p className="product-price">₹{product.price}</p>
          <Link to={"/cart"}>
            <button className="btn2">Add to cart</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
