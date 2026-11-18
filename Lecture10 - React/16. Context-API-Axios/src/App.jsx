import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Products/:id" element={<ProductsDetails />} />
    </Routes>
  );
};

export default App;
