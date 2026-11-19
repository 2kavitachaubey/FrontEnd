import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderSummary from "../components/OrderSummary";

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
  payment: "card",
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();

  // One state object for the whole form (two-way binding)
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // Can't checkout with an empty cart -> send user back to cart page
  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  // One handler for every input, using the input's `name` attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (form.fullName.trim().length < 3) newErrors.fullName = "Enter your full name";
    const [user, domain = ""] = form.email.trim().split("@");
    if (!user || !domain.includes(".") || domain.endsWith(".")) {
      newErrors.email = "Enter a valid email";
    }
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Phone must be 10 digits";
    if (form.address.trim().length < 5) newErrors.address = "Enter your address";
    if (!form.city.trim()) newErrors.city = "Enter your city";
    if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Pincode must be 6 digits";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const order = {
      id: "ORD" + Date.now().toString().slice(-8),
      name: form.fullName,
      email: form.email,
      total,
      items: cart.length,
    };
    clearCart();
    // Pass order details to the next page through router state
    navigate("/order-success", { state: order, replace: true });
  };

  // Small helper to avoid repeating the same JSX for every input
  const renderInput = (name, label, type = "text", placeholder = "") => (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={form[name]}
        placeholder={placeholder}
        onChange={handleChange}
        className={errors[name] ? "invalid" : ""}
      />
      {errors[name] && <small className="error">{errors[name]}</small>}
    </label>
  );

  return (
    <div className="container section">
      <div className="page-head">
        <h1>Checkout</h1>
      </div>

      <div className="cart-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <h2>Contact details</h2>
          {renderInput("fullName", "Full name", "text", "John Doe")}
          <div className="form-row">
            {renderInput("email", "Email", "email", "you@example.com")}
            {renderInput("phone", "Phone", "tel", "9876543210")}
          </div>

          <h2>Shipping address</h2>
          {renderInput("address", "Address", "text", "House no, street, area")}
          <div className="form-row">
            {renderInput("city", "City")}
            {renderInput("pincode", "Pincode", "text", "400001")}
          </div>

          <h2>Payment method</h2>
          <div className="payment-options">
            {[
              { value: "card", label: "💳 Card" },
              { value: "upi", label: "📱 UPI" },
              { value: "cod", label: "💵 Cash on delivery" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={form.payment === opt.value ? "payment active" : "payment"}
              >
                <input
                  type="radio"
                  name="payment"
                  value={opt.value}
                  checked={form.payment === opt.value}
                  onChange={handleChange}
                />
                {opt.label}
              </label>
            ))}
          </div>

          <button type="submit" className="btn btn-full">
            Place order · ${total.toFixed(2)}
          </button>
        </form>

        <OrderSummary>
          <ul className="summary-items">
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="" />
                <span>{item.title}</span>
                <strong>×{item.quantity}</strong>
              </li>
            ))}
          </ul>
        </OrderSummary>
      </div>
    </div>
  );
};

export default Checkout;
