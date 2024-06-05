import "./createProduct.scss";

import React, { memo, useState } from "react";

import { useCreateProductMutation } from "../../../context/api/productsApi";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const [createProduct] = useCreateProductMutation();

  const handleCreate = async (e) => {
    e.preventDefault();
    let newProduct = {
      title: name,
      category,
      price: +price,
      url: image,
    };

    await createProduct(newProduct);
    navigate("/admin/manageProduct");

    setName("");
    setCategory("");
    setPrice("");
    setImage("");
  };

  return (
    <section className="create">
      <h2>Add Product</h2>
      <form onSubmit={handleCreate} action="" className="create__form">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder=" name"
        />

        <input
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder=" price"
        />
        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder=" category"
        />
        <input
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder=" image"
        />
        <button>Add</button>
      </form>
    </section>
  );
};

export default memo(CreateProduct);
