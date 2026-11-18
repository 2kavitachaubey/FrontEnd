import React, { use, useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);
  let renderData = "";
  if (productData.length > 0) {
    renderData = productData.map((elem, idx) => (
      <Link className="product" key={idx} to={`/Products/${elem.id}`}>
        <img src={elem.image} alt="" />
        <h1>{elem.title}</h1>
        <h4>{elem.price}</h4>
        <p>{elem.description}</p>
      </Link>
    ));
  }
  return (
    <div>
      <Link className="details-back" to="/">
        &larr; Back to Home
      </Link>
      <div className="allProducts">{renderData};</div>
    </div>
  );
};

export default Products;
