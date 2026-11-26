import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useCart();

  return (
    <div className="container section">
      <div className="page-head">
        <h1>My wishlist</h1>
        <p>{wishlist.length} saved items</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <h2>No saved items yet</h2>
          <p>Tap the ♡ on any product to save it for later.</p>
          <Link to="/products" className="btn">Browse products</Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
