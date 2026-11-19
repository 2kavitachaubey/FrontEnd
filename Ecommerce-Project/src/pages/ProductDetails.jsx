import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import Rating from "../components/Rating";
import ProductCard from "../components/ProductCard";
import ErrorMessage from "../components/ErrorMessage";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Fetch the single product whenever the id in the URL changes
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError("");
      setQuantity(1);
      try {
        const data = await getProductById(id);
        if (!data) throw new Error("Not found");
        setProduct(data);
      } catch {
        setError("This product could not be found.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container section">
        <div className="details skeleton-details">
          <div className="skeleton-img big"></div>
          <div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section">
        <ErrorMessage message={error} />
        <p className="center">
          <Link to="/products" className="link">&larr; Back to shop</Link>
        </p>
      </div>
    );
  }

  const saved = isInWishlist(product.id);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container section">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/products">Shop</Link> /{" "}
        <Link to={`/products?category=${encodeURIComponent(product.category)}`}>
          {product.category}
        </Link>
      </nav>

      <div className="details">
        <div className="details-img">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.title}</h1>
          <Rating rate={product.rating?.rate} count={product.rating?.count} />
          <p className="details-price">${product.price.toFixed(2)}</p>
          <p className="details-desc">{product.description}</p>

          <div className="qty-row">
            <div className="qty">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn" onClick={() => addToCart(product, quantity)}>
              Add to cart
            </button>
            <button className="btn btn-outline" onClick={() => toggleWishlist(product)}>
              {saved ? "♥ Saved" : "♡ Wishlist"}
            </button>
          </div>

          <ul className="perks">
            <li>✓ Free shipping on orders over $100</li>
            <li>✓ 30-day easy returns</li>
            <li>✓ Secure payment</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section">
          <h2 className="section-title">You may also like</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
