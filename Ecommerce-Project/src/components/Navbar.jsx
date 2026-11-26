import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { cartCount, wishlist } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Cart<span>ify</span>
        </Link>

        <SearchBar />

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Shop</NavLink>
          <NavLink to="/wishlist" onClick={closeMenu}>
            Wishlist
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu}>
            Cart
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </NavLink>
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
