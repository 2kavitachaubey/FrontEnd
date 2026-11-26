import { Link, Navigate, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const { state: order } = useLocation();

  // If someone opens this page directly (no order data), send them home
  if (!order) return <Navigate to="/" replace />;

  return (
    <div className="container section empty-state success-page">
      <div className="success-icon">✓</div>
      <h1>Thank you, {order.name.split(" ")[0]}!</h1>
      <p>Your order has been placed successfully.</p>

      <div className="order-box">
        <div className="summary-row"><span>Order ID</span><strong>{order.id}</strong></div>
        <div className="summary-row"><span>Items</span><strong>{order.items}</strong></div>
        <div className="summary-row"><span>Amount paid</span><strong>${order.total.toFixed(2)}</strong></div>
        <div className="summary-row"><span>Confirmation sent to</span><strong>{order.email}</strong></div>
      </div>

      <Link to="/products" className="btn">Continue shopping</Link>
    </div>
  );
};

export default OrderSuccess;
