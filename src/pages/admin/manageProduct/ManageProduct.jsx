import "./manageProduct.scss";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { memo } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../context/api/productsApi";
import { useDispatch, useSelector } from "react-redux";

import { addWishlist } from "../../../context/slice/wishlistSlice";

const ManageProduct = () => {
  let wishlistData = useSelector((state) => state.wishlistSlice.data);

  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const dispatch = useDispatch();
  let products = data?.map((product) => (
    <div className="manage__card" key={product.id}>
      <div className="manage__card__img">
        <img src={product.url} alt={product.title} />
      </div>
      <div className="manage__card__info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <div className="manage__btns">
          <button
            onClick={() => dispatch(addWishlist(product))}
            className="product__card__like__btn"
          >
            {wishlistData.some((el) => el.id === product.id) ? (
              <FaHeart color="crimson" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="manage">
      <div className="manage__cards">{products}</div>
    </section>
  );
};

export default memo(ManageProduct);
