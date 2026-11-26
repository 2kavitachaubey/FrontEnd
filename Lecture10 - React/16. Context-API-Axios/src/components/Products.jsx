import React, { useState, useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);
  let renderData = "";
  const [search, setSearch] = useState("");

  const filterSearch = productData.filter((elem) =>
    elem.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (productData.length > 0) {
    renderData = filterSearch.map((elem, idx) => (
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
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <div className="allProducts">{renderData};</div>
    </div>
  );
};

export default Products;
