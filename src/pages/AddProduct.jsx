import React, { useEffect, useState } from "react";
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
      Authorization: token,
      "Content-Type": "multipart/form-data",
    };

    const newProduct = new FormData();
    newProduct.append("image", product.image);
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("discount", product.discount);
    newProduct.append("stock", product.stock);

    const [response, error] = await apiCall(
      `${apiUrl}/product`,
      "POST",
      newProduct,
      { ...headers }
    );

    if (response) {
      navigate("/");
    } else {
      console.log(error);
    }
  };

  const handleInput = (e, field) => {
    setProduct({ ...product, [field]: e.target.value });
  };

  const handleImage = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          name="file"
          placeholder="Image"
          onChange={handleImage}
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
