import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Rating from "./Rating";

// Receives one product through props
const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const saved = isInWishlist(product.id);

  return (
    <article className="product-card">
      <button
        className={saved ? "wish-btn active" : "wish-btn"}
        aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        onClick={() => toggleWishlist(product)}
      >
        {saved ? "♥" : "♡"}
      </button>

      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="product-card-img">
          <img src={product.image} alt={product.title} loading="lazy" />
        </div>
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
      </Link>

      <Rating rate={product.rating?.rate} count={product.rating?.count} />

      <div className="product-card-bottom">
        <span className="price">${product.price.toFixed(2)}</span>
        <button className="btn btn-small" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
