import { useCart } from "../context/CartContext";

// Reused on Cart and Checkout pages. `children` lets each page add its own buttons.
const OrderSummary = ({ children }) => {
  const { cartCount, subtotal, shipping, tax, total } = useCart();

  return (
    <aside className="summary">
      <h2>Order summary</h2>
      <div className="summary-row">
        <span>Items ({cartCount})</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
      </div>
      <div className="summary-row">
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      {children}
    </aside>
  );
};

export default OrderSummary;
