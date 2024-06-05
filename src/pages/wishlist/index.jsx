import "./wishlist.scss";

import React, { memo } from "react";

import Products from "../../components/product/Products";
import { useSelector } from "react-redux";

const Wishlist = () => {
  let data = useSelector((state) => state.wishlistSlice.data);
  console.log(data);
  return (
    <div className="container">
      {data.length ? (
        <Products data={data} />
      ) : (
        <div className="wishlist">
          <h2>Not Found</h2>
        </div>
      )}
    </div>
  );
};

export default memo(Wishlist);
