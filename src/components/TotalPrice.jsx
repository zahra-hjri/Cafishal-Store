import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const TotalPrice = () => {
  const { state } = useContext(ProductsContext);
  return (
    <div className="bg-gray-400 text-white rounded-lg w-52 h-10 flex justify-center items-center">
      TotalPrice:
      <span className="px-0.5 text-green-400 font-bold">
        {state.totalPrice}$
      </span>
    </div>
  );
};

export default TotalPrice;
