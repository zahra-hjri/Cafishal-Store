const Product = ({ product }) => {
  return (
    <div className="w-52 h-64 rounded-lg bg-black">
      <img src={product.image} className="h-20 w-24 rounded-lg" />
      <div className="flex justify-between">
        <p>{product.title}</p>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
