const Product = ({ product }) => {
  return (
    <div className="">
      <img src={product.image} className="h-50 w-50" />
      <p>{product.title}</p>
      <span>{product.price}</span>
    </div>
  );
};

export default Product;
