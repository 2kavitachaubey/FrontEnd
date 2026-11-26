import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container section empty-state">
        <h1>Your cart is empty</h1>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn">Start shopping</Link>
      </div>
    );
  }

  const amountForFreeShipping = 100 - subtotal;

  return (
    <div className="container section">
      <div className="page-head">
        <h1>Shopping cart</h1>
        <button className="link" onClick={clearCart}>Clear cart</button>
      </div>

      {amountForFreeShipping > 0 ? (
        <p className="notice">
          Add <strong>${amountForFreeShipping.toFixed(2)}</strong> more to get free shipping!
        </p>
      ) : (
        <p className="notice success">🎉 You've unlocked free shipping!</p>
      )}

      <div className="cart-layout">
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <Link to={`/products/${item.id}`} className="cart-item-img">
                <img src={item.image} alt={item.title} />
              </Link>

              <div className="cart-item-info">
                <Link to={`/products/${item.id}`} className="cart-item-title">
                  {item.title}
                </Link>
                <p className="product-category">{item.category}</p>
                <button className="link danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>

              <div className="qty">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>

        <OrderSummary>
          <button className="btn btn-full" onClick={() => navigate("/checkout")}>
            Proceed to checkout
          </button>
          <Link to="/products" className="link center">Continue shopping</Link>
        </OrderSummary>
      </div>
    </div>
  );
};

export default Cart;
