const Product = ({ product }) => {
  return (
    <div className="w-96 h-96 rounded-lg bg-black">
      <img src={product.image} className="h-64 w-full rounded-lg" />
      <div className="flex justify-between">
        <p>{product.title}</p>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
