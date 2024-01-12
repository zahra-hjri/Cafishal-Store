import Product from "../Product/Product";

const Products = ({ products }) => {
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
