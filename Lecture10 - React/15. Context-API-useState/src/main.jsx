import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeChange from "./context/ThemeChange.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeChange>
    <App />
  </ThemeChange>,
);
