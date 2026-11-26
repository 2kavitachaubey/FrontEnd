import { createContext, useContext, useEffect, useState } from "react";

const CartDataContext = createContext();

// Read saved data from localStorage (falls back to [] if nothing / broken data)
const loadFromStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => loadFromStorage("cartify-cart"));
  const [wishlist, setWishlist] = useState(() => loadFromStorage("cartify-wishlist"));
  const [toast, setToast] = useState("");

  // Save to localStorage every time cart / wishlist changes
  useEffect(() => {
    localStorage.setItem("cartify-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cartify-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Hide the toast message after 2 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  /* ---------- Cart ---------- */
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setToast(`Added "${product.title.slice(0, 25)}..." to cart`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => setCart([]);

  /* ---------- Wishlist ---------- */
  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      setToast("Removed from wishlist");
    } else {
      setWishlist((prev) => [...prev, product]);
      setToast("Saved to wishlist");
    }
  };

  /* ---------- Totals (derived from cart, no extra state needed) ---------- */
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <CartDataContext
      value={{
        cart,
        wishlist,
        toast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartCount,
        subtotal,
        shipping,
        tax,
        total,
      }}
    >
      {children}
    </CartDataContext>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartDataContext);

export default CartProvider;
