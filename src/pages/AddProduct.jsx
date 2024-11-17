import React, { useState } from "react";
import { apiCall } from "../controllers/api.controllers";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    };

    const [response, error] = await apiCall(
      `${apiUrl}/admin/add-product`,
      "POST",
      product,
      headers
    );

    if (response) {
      console.log(response);
    } else {
      console.log(error);
    }
  };

  const handleInput = (e, field) => {
    const tempProduct = { ...product };
    tempProduct[field] = e.target.value;
    console.log(tempProduct);

    setProduct(tempProduct);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
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
          name="stock"
          placeholder="Stock"
          onChange={(e) => handleInput(e, "stock")}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddProduct;
