import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const filterSearch = products.filter((elem) =>
    elem.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${search}`);
    setSearch("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>

      {search && (
        <div className="search-results">
          {filterSearch.length === 0 ? (
            <p className="search-empty">No products found</p>
          ) : (
            filterSearch.slice(0, 5).map((elem) => (
              <Link
                key={elem.id}
                to={`/products/${elem.id}`}
                className="search-item"
                onClick={() => setSearch("")}
              >
                <img src={elem.image} alt="" />
                <span>{elem.title}</span>
                <strong>${elem.price.toFixed(2)}</strong>
              </Link>
            ))
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
