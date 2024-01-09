import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="bg-blue-300">
      {products.map((item) => (
        // <p>{item.title}</p>
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
