import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

/* ---------- Static data for the home page sections ---------- */
const features = [
  { icon: "🚚", title: "Free shipping", text: "On all orders over $100" },
  { icon: "↩️", title: "Easy returns", text: "30-day hassle-free returns" },
  { icon: "🔒", title: "Secure checkout", text: "Your details stay safe" },
  { icon: "💬", title: "24/7 support", text: "We're here to help anytime" },
];

const steps = [
  { num: "1", title: "Browse", text: "Search or filter through our products to find what you like." },
  { num: "2", title: "Add to cart", text: "Pick a quantity, save favourites to your wishlist, and add to cart." },
  { num: "3", title: "Checkout", text: "Fill in your address, choose a payment method and place the order." },
];

const testimonials = [
  { name: "Priya", city: "Mumbai", text: "Super easy to find what I needed. Checkout took less than a minute!" },
  { name: "Rahul", city: "Delhi", text: "Loved the wishlist feature. My cart was still saved when I came back." },
  { name: "Ananya", city: "Pune", text: "Clean design and fast. The search shows results while I type." },
];

const faqs = [
  { q: "How long does delivery take?", a: "Orders usually arrive within 3–5 business days." },
  { q: "Is shipping free?", a: "Yes, shipping is free on every order over $100. Below that it's $9.99." },
  { q: "Can I return a product?", a: "Yes, you can return any product within 30 days of delivery." },
  { q: "Which payment methods do you accept?", a: "Card, UPI and Cash on Delivery." },
];

const Home = () => {
  const navigate = useNavigate();
  const { products, categories, loading, error, retry } = useProducts();
  const { addToCart } = useCart();

  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  /* ---------- Data derived from products ---------- */
  const trending = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  const topPick = trending[0];

  const budgetPicks = products
    .filter((p) => p.price < 50)
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  // For each category: first product's image + how many products it has
  const categoryInfo = categories.map((cat) => {
    const items = products.filter((p) => p.category === cat);
    return { name: cat, image: items[0]?.image, count: items.length };
  });

  const avgRating =
    products.length > 0
      ? (products.reduce((sum, p) => sum + p.rating.rate, 0) / products.length).toFixed(1)
      : "0";

  const stats = [
    { value: products.length, label: "Products" },
    { value: categories.length, label: "Categories" },
    { value: `${avgRating}★`, label: "Average rating" },
    { value: "$100+", label: "Free shipping" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      {/* ===== Hero ===== */}
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

      {/* ===== Features ===== */}
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

      {/* ===== Categories ===== */}
      <section className="container section">
        <h2 className="section-title">Shop by category</h2>
        <div className="category-grid">
          {categoryInfo.map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="category-card"
            >
              {cat.image && <img src={cat.image} alt={cat.name} />}
              <h3>{cat.name}</h3>
              <p>{cat.count} products</p>
            </Link>
          ))}
        </div>
      </section>

      {error && <ErrorMessage message={error} onRetry={retry} />}

      {/* ===== Top pick banner ===== */}
      {topPick && (
        <section className="container section">
          <div className="top-pick">
            <img src={topPick.image} alt={topPick.title} />
            <div className="top-pick-info">
              <p className="eyebrow">⭐ Top pick of the week</p>
              <h2>{topPick.title}</h2>
              <Rating rate={topPick.rating.rate} count={topPick.rating.count} />
              <p className="top-pick-price">${topPick.price.toFixed(2)}</p>
              <div className="hero-actions">
                <button className="btn" onClick={() => addToCart(topPick)}>
                  Add to cart
                </button>
                <Link to={`/products/${topPick.id}`} className="btn btn-outline">
                  View details
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Trending ===== */}
      <section className="container section">
        <div className="section-head">
          <h2 className="section-title">Trending now</h2>
          <Link to="/products" className="link">See all &rarr;</Link>
        </div>
        {loading ? (
          <Loader count={4} />
        ) : (
          <div className="product-grid">
            {trending.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* ===== Stats ===== */}
      <section className="stats">
        <div className="container stats-inner">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Budget picks ===== */}
      <section className="container section">
        <div className="section-head">
          <h2 className="section-title">Budget picks under $50</h2>
          <Link to="/products" className="link">Shop more &rarr;</Link>
        </div>
        {loading ? (
          <Loader count={4} />
        ) : (
          <div className="product-grid">
            {budgetPicks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* ===== How it works ===== */}
      <section className="container section">
        <h2 className="section-title center-title">How it works</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="container section">
        <h2 className="section-title center-title">What our customers say</h2>
        <div className="testimonials">
          {testimonials.map((t) => (
            <div className="testimonial" key={t.name}>
              <p className="stars">★★★★★</p>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-name">
                {t.name} <span>· {t.city}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ (click to open / close) ===== */}
      <section className="container section faq-section">
        <h2 className="section-title center-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div className="faq" key={item.q}>
              <button
                className="faq-question"
                aria-expanded={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                {item.q}
                <span>{openFaq === idx ? "−" : "+"}</span>
              </button>
              {openFaq === idx && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <section className="container section">
        <div className="newsletter">
          <h2>Get 10% off your first order</h2>
          <p>Subscribe to our newsletter for new arrivals and special offers.</p>
          {subscribed ? (
            <p className="newsletter-success">✓ Thanks for subscribing! Check your inbox.</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
