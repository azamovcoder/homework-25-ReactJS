import React, { Fragment, memo } from "react";

import Products from "../../components/product/Products";
import { useGetProductsQuery } from "../../context/api/productsApi";

const Home = () => {
  const { data } = useGetProductsQuery();
  return (
    <Fragment>
      <Products data={data} />
    </Fragment>
  );
};

export default memo(Home);
