import React, { createContext, useEffect, useState } from "react";
import { getData } from "../api/ProductAPI";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [product, setProduct] = useState([]);

  const setData = async () => {
    const data = await getData();
    setProduct(data);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div>
      <ProductDataContext value={product}>{props.children}</ProductDataContext>
    </div>
  );
};

export default ProductContext;
