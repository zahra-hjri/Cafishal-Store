const Product = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
      <span>{product.price}</span>
      <img src={product.image} className="h-20 w-20" />
    </div>
  );
};

export default Product;
