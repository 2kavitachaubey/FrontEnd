import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";

const ProductsDetails = () => {
  const productData = useContext(ProductDataContext);
  const { id } = useParams();
  const selectedProduct = productData.find((elem) => id == elem.id);
  if (!selectedProduct) {
    return <div className="details-message">{productData.length === 0 ? "Loading product..." : "Product not found."} <Link to="/Products">Back to products</Link></div>;
  }
  return (
    <main className="details-page">
      <Link className="details-back" to="/Products">&larr; Back to products</Link>
      <div className="details-card">
        <div className="details-image">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
        <div className="details-content">
          <p className="details-category">{selectedProduct.category}</p>
          <h1>{selectedProduct.title}</h1>
          <p className="details-rating">&#9733; {selectedProduct.rating?.rate} <span>({selectedProduct.rating?.count} reviews)</span></p>
          <h3 className="details-price">${selectedProduct.price.toFixed(2)}</h3>
          <div className="details-description">
            <h2>About this product</h2>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsDetails;
