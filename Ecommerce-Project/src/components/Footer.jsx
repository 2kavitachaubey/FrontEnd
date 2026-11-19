import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="logo">
            Cart<span>ify</span>
          </Link>
          <p>Everyday products, honest prices, delivered fast.</p>
        </div>
        <div className="footer-links">
          <Link to="/products">Shop</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <p className="footer-bottom">
        © {new Date().getFullYear()} Cartify. Built with React. Product data from FakeStoreAPI.
      </p>
    </footer>
  );
};

export default Footer;
