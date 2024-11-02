import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../context/ProductsContext";

const Products = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const handleDeleteAll = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
      <ul className="px-20 mt-10">
        {state && state.products ? (
          state.products.map((item) => <ProductCard key={item.id} {...item} />)
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
      {state.products.length != 0 && (
        <button
          onClick={handleDeleteAll}
          className="bg-orange-600 text-white font-bold mx-20 mt-10 p-3 rounded-lg"
        >
          Delete All
        </button>
      )}
    </>
  );
};

export default Products;
