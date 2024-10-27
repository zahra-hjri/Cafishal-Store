import { useState } from "react";
import initialData from "../services/data";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState(initialData);

  return (
    <ul className="px-20 mt-10">
      {data.map((id, ...item) => (
        <ProductCard key={id} {...item} setData={setData} />
      ))}
    </ul>
  );
};

export default Products;
