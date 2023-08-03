import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { useFirebase } from "./useFirebase";
import { useUsers } from "./useUsers";

export const productsContext = createContext();

export const ProvideProducts = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { loadCollection } = useFirebase();
  const { selectedUser } = useUsers();

  const loadProducts = async () => {
    setIsLoading(true);

    const p = await loadCollection("products");
    setProducts(p);

    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedUser) {
      loadProducts();
    }
  }, [selectedUser]);

  const getProductById = (id) => products.find((p) => p.id === id);

  const value = {
    products,
    isLoading,
    getProductById,
  };

  return <productsContext.Provider value={value}>{children}</productsContext.Provider>;
};

export const useProducts = () => useContext(productsContext);
