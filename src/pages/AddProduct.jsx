import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({});
  const handleInput = (e, field) => {
    const tempProduct = { ...product };
    tempProduct[field] = e.target.value;
    console.log(tempProduct);

    setProduct(tempProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ecommerce-project-backend-one.vercel.app/product", {
        product,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={(e) => handleInput(e, "image")}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => handleInput(e, "title")}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={(e) => handleInput(e, "description")}
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={(e) => handleInput(e, "price")}
        />
        <br />
        <input
          type="number"
          name="discount"
          placeholder="Discount"
          onChange={(e) => handleInput(e, "discount")}
        />
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={(e) => handleInput(e, "quantity")}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddProduct;
