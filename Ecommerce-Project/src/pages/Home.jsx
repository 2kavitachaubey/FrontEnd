import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const features = [
  { icon: "🚚", title: "Free shipping", text: "On all orders over $100" },
  { icon: "↩️", title: "Easy returns", text: "30-day hassle-free returns" },
  { icon: "🔒", title: "Secure checkout", text: "Your details stay safe" },
];

const Home = () => {
  const navigate = useNavigate();
  const { products, categories, loading, error, retry } = useProducts();

  // Top 4 rated products for the "Trending" section
  const trending = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow">New season, new arrivals</p>
            <h1>Shop smarter, live better.</h1>
            <p>
              Clothing, jewellery and electronics picked for everyday life.
              Free shipping on orders over $100.
            </p>
            <div className="hero-actions">
              <button className="btn" onClick={() => navigate("/products")}>
                Shop now
              </button>
              <Link to="/wishlist" className="btn btn-outline">
                View wishlist
              </Link>
            </div>
          </div>
          <div className="hero-images">
            {products.slice(0, 3).map((p) => (
              <img key={p.id} src={p.image} alt={p.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="container section features">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <span className="feature-icon">{f.icon}</span>
            <div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container section">
        <h2 className="section-title">Shop by category</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="category-card"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2 className="section-title">Trending now</h2>
          <Link to="/products" className="link">See all &rarr;</Link>
        </div>
        {loading && <Loader count={4} />}
        {error && <ErrorMessage message={error} onRetry={retry} />}
        {!loading && !error && (
          <div className="product-grid">
            {trending.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
