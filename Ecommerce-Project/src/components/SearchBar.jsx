import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import useDebounce from "../hooks/useDebounce";

// Navbar search: shows live suggestions while typing,
// and on Enter opens the Shop page with ?search=...
const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const { products } = useProducts();

  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const debouncedSearch = useDebounce(search, 300);

  // Same idea as the lecture: filter() + includes() on the title
  const results =
    debouncedSearch.trim() === ""
      ? []
      : products
          .filter((elem) =>
            elem.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase()),
          )
          .slice(0, 5);

  const closeSearch = () => {
    setSearch("");
    setShowResults(false);
    if (onSearch) onSearch();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    closeSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
        // Small delay so a click on a result works before the list hides
        onBlur={() => setTimeout(() => setShowResults(false), 150)}
      />
      <button type="submit" aria-label="Search">🔍</button>

      {showResults && debouncedSearch.trim() !== "" && (
        <div className="search-results">
          {results.length === 0 ? (
            <p className="search-empty">No products found for "{debouncedSearch}"</p>
          ) : (
            <>
              {results.map((elem) => (
                <Link
                  key={elem.id}
                  to={`/products/${elem.id}`}
                  className="search-item"
                  onClick={closeSearch}
                >
                  <img src={elem.image} alt="" />
                  <span>{elem.title}</span>
                  <strong>${elem.price.toFixed(2)}</strong>
                </Link>
              ))}
              <button type="submit" className="search-all">
                See all results for "{search}" &rarr;
              </button>
            </>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
