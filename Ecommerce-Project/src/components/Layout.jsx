import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";

const Layout = () => {
  const { pathname } = useLocation();
  const { toast } = useCart();

  // Scroll to top whenever the page (route) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />

      {/* Conditional rendering: only show the toast when there is a message */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default Layout;
