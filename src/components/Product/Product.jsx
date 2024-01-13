const Product = ({ product }) => {
  return (
    <div className="w-80 h-50 rounded-lg">
      <img src={product.image} className="h-50 w-50 rounded-lg" />
      <p>{product.title}</p>
      <span>{product.price}</span>
    </div>
  );
};

export default Product;
