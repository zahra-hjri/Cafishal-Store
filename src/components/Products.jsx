import { useContext } from "react";
// import initialData from "../services/data";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../context/ProductsContext";

const Products = () => {
  const { state } = useContext(ProductsContext);
  // const [data, setData] = useState(initialData);

  return (
    <ul className="px-20 mt-10">
      {state.products.map((id, ...item) => (
        <ProductCard key={id} {...item} />
      ))}
    </ul>
  );
};

export default Products;
