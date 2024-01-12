import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <div className=" flex justify-around">
      {products.map((item) => (
        // <p>{item.title}</p>
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
