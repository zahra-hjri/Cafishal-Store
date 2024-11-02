import { createContext, useReducer } from "react";
import data from "../services/data";
import { productsReducer } from "../reducers/productsReducer";

const initialState = {
  products: data,
  total: 0,
  mount: 0,
};

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
