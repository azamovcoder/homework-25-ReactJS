import "./singlePage.scss";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addWishlist } from "../../context/slice/wishlistSlice";
import { useGetSingleProductQuery } from "../../context/api/productsApi";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const dispatch = useDispatch();
  let wishlistData = useSelector((state) => state.wishlistSlice.data);

  const { Id } = useParams();
  const { data: product } = useGetSingleProductQuery(Id);
  console.log(product);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Id]);

  return (
    <div>
      <section className="single container">
        <div key={product?.id} className="single__card">
          <div className="single__card__img">
            <img src={product?.url} alt="" />
          </div>
          <div className="single__card__info">
            <h1 style={{ fontSize: "30px" }}>{product?.title}</h1>
            <p>Category : {product?.category}</p>
            <p>Price : {product?.price}$</p>
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
      </section>
    </div>
  );
};

export default SinglePage;
