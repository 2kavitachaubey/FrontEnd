import { createContext, useContext, useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";

const ProductDataContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch {
      setError("Could not load products. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  // Unique list of categories, built from the products
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <ProductDataContext
      value={{ products, categories, loading, error, retry: fetchProducts }}
    >
      {children}
    </ProductDataContext>
  );
};

// Small custom hook so components don't need to import the context object
// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductDataContext);

export default ProductProvider;
