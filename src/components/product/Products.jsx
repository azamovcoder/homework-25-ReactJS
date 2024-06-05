import "./products.scss";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { addWishlist } from "../../context/slice/wishlistSlice";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  let wishlistData = useSelector((state) => state.wishlistSlice.data);

  let products = data?.map((product) => (
    <div className="product__card" key={product.id}>
      <NavLink to={`singlePage/${product.id}`}>
        <div className="product__card__img">
          <img src={product.url} alt={product.title} />
        </div>
      </NavLink>
      <div className="product__card__info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
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
      </div>
    </div>
  ));

  return (
    <>
      <section className="product">
        <div className="container product__cards">{products}</div>
      </section>
    </>
  );
};

export default memo(Products);
