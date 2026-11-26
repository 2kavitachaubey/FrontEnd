# Cartify – React E-Commerce Store

A responsive online store built with **React 19**, **React Router**, **Context API** and **Axios**.
Users can browse and filter products, view details, manage a cart and wishlist that persist
across page reloads, and place an order through a validated checkout form.

## Features

- **Product catalogue** loaded from [FakeStoreAPI](https://fakestoreapi.com) with Axios
- **Navbar live search** shows matching products in a dropdown while you type. Press Enter to see all results on the Shop page
- **Search** with a custom `useDebounce` hook, so filtering runs only after the user stops typing. The search text is kept in the URL (`?search=`)
- **Filter by category** (kept in the URL, e.g. `/products?category=electronics`), **price range** and **sort** by price or rating
- **Product details page** with dynamic routes (`/products/:id`), a quantity selector and related products
- **Cart** where you can add, update quantity, remove and clear items. Subtotal, tax, shipping and free-shipping progress are calculated from the cart
- **Wishlist**. Cart and wishlist are both saved in `localStorage`
- **Checkout form** made of controlled inputs, with validation for email, phone and pincode, and payment method selection
- **Order confirmation page** that receives the order details through router state
- **Loading skeletons**, error handling with a retry button, empty states, toast notifications and a 404 page
- **Responsive layout** using CSS Grid and Flexbox, with a mobile hamburger menu

## Tech Stack

| Area        | Used                                                      |
| ----------- | --------------------------------------------------------- |
| UI          | React 19 (functional components, hooks)                   |
| Routing     | React Router v7: nested routes, `Outlet`, `NavLink`, `useParams`, `useSearchParams`, `Navigate` |
| State       | Context API (`ProductContext`, `CartContext`), `useState`, `useEffect` |
| Data        | Axios (shared instance), async/await, try/catch           |
| Persistence | `localStorage`                                            |
| Styling     | Plain CSS: variables, Grid, Flexbox, keyframe animations, media queries |
| Tooling     | Vite, ESLint                                              |

## Project Structure

```
src/
├── api/productApi.js        # Axios calls
├── context/
│   ├── ProductContext.jsx   # products, categories, loading, error
│   └── CartContext.jsx      # cart, wishlist, totals, localStorage
├── hooks/useDebounce.js     # custom debounce hook
├── components/              # Layout, Navbar, Footer, ProductCard, Rating, Loader, OrderSummary...
├── pages/                   # Home, Products, ProductDetails, Cart, Wishlist, Checkout, OrderSuccess, NotFound
├── App.jsx                  # routes
└── main.jsx                 # providers + BrowserRouter
```

## Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

```bash
npm run build   # production build in /dist
```
