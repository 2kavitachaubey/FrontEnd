import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import useDebounce from "../hooks/useDebounce";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Products = () => {
  const { products, categories, loading, error, retry } = useProducts();

  // Search text and category live in the URL (?search=...&category=...)
  // so the navbar search and the category links on Home both work
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";

  // Two-way binding: input value <-> state
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState(1000);

  // Wait until the user stops typing before filtering
  const debouncedSearch = useDebounce(search, 400);

  // Change one URL param but keep the others
  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "" || value === "all") params.delete(key);
    else params.set(key, value);
    setSearchParams(params, { replace: true });
  };

  const resetFilters = () => {
    setSortBy("default");
    setMaxPrice(1000);
    setSearchParams({});
  };

  // Filter -> then sort. Derived from state, so no extra useState needed.
  let visibleProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    const matchesPrice = p.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (sortBy === "price-low") {
    visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    visibleProducts = [...visibleProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    visibleProducts = [...visibleProducts].sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className="container section">
      <div className="page-head">
        <h1>{search ? `Results for "${search}"` : "Shop all products"}</h1>
        <p>{loading ? "Loading..." : `${visibleProducts.length} products found`}</p>
      </div>

      <div className="shop-layout">
        <aside className="filters">
          <label className="field">
            <span>Search</span>
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => updateParam("search", e.target.value)}
            />
          </label>

          <div className="field">
            <span>Category</span>
            <div className="chips">
              {["all", ...categories].map((cat) => (
                <button
                  key={cat}
                  className={category === cat ? "chip active" : "chip"}
                  onClick={() => updateParam("category", cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Max price: ${maxPrice}</span>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>

          <label className="field">
            <span>Sort by</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top rated</option>
            </select>
          </label>

          <button className="btn btn-outline btn-full" onClick={resetFilters}>
            Reset filters
          </button>
        </aside>

        <section>
          {loading && <Loader />}
          {error && <ErrorMessage message={error} onRetry={retry} />}

          {!loading && !error && visibleProducts.length === 0 && (
            <div className="empty-state">
              <h2>No products match your filters</h2>
              <button className="btn" onClick={resetFilters}>Clear filters</button>
            </div>
          )}

          {!loading && !error && visibleProducts.length > 0 && (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
