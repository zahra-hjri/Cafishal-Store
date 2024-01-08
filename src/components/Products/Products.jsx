import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="">
      {products.map((item) => {
        <Product key={item.id} product={item} />;
      })}
    </div>
  );
};

export default Products;
