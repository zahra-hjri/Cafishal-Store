import { useState } from "react";
import initialData from "../services/data";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState(initialData);

  return (
    <ul className="px-20 mt-10">
      {data.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default Products;
